<?php

// --- CORS ---
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed = [
    'http://localhost:5173',
    'https://svrsts.com',
    'https://www.svrsts.com',
];
if ($origin && in_array($origin, $allowed, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Max-Age: 86400');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// --- Timezone ---
date_default_timezone_set('Asia/Kolkata');
mb_internal_encoding('UTF-8');
header('Content-Type: application/json; charset=utf-8');

// --- Autoload ---
require __DIR__ . '/vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// --- Helpers ---
function v(string $key, string $default = ''): string
{
    return isset($_POST[$key]) ? trim((string) $_POST[$key]) : $default;
}
function clean(?string $s): string
{
    return htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8');
}
function required(array $arr): ?string
{
    foreach ($arr as $k => $label) {
        if (!isset($_POST[$k]) || $_POST[$k] === '')
            return "$label is required";
    }
    return null;
}

// --- Request validation ---
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Only POST allowed.']);
    exit;
}

$formType = v('formType');
if (!in_array($formType, ['contact', 'newsletter', 'marketing-modal', 'exit-intent-modal', 'booking-modal'], true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid formType.']);
    exit;
}

// --- Field validation ---
if ($formType === 'contact') {
    // ContactForm - require fullName, mobileNumber, service, preferredDate, location
    if (
        $msg = required([
            'fullName' => 'Full Name',
            'mobileNumber' => 'Mobile Number',
            'service' => 'Service',
            'preferredDate' => 'Preferred Date',
            'location' => 'Location'
        ])
    ) {
        http_response_code(422);
        echo json_encode(['error' => $msg]);
        exit;
    }
} elseif ($formType === 'newsletter') {
    if ($msg = required(['email' => 'Email'])) {
        http_response_code(422);
        echo json_encode(['error' => $msg]);
        exit;
    }
} elseif ($formType === 'marketing-modal' || $formType === 'exit-intent-modal') {
    if ($msg = required(['name' => 'Name', 'email' => 'Email', 'phone' => 'Phone'])) {
        http_response_code(422);
        echo json_encode(['error' => $msg]);
        exit;
    }
} elseif ($formType === 'booking-modal') {
    if ($msg = required(['name' => 'Name', 'email' => 'Email', 'phone' => 'Phone', 'address' => 'Address', 'message' => 'Message'])) {
        http_response_code(422);
        echo json_encode(['error' => $msg]);
        exit;
    }
}

// --- Email validation ---
$email = v('email');
if ($formType !== 'newsletter' && !$email) {
    // For newsletter, email validation happens in required check
    // For other forms, email should be present
    http_response_code(422);
    echo json_encode(['error' => 'Email is required.']);
    exit;
}
if ($email && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['error' => 'Invalid email.']);
    exit;
}

// --- Capture values ---
$name = v('name') ?: v('fullName'); // Support both field names
$phone = v('phone') ?: v('mobileNumber'); // Support both field names
$message = v('message');
$service = v('service') ?: v('interestedIn'); // Support both field names
$serverip = $_SERVER['HTTP_X_FORWARDED_FOR']
    ?? $_SERVER['HTTP_CLIENT_IP']
    ?? $_SERVER['REMOTE_ADDR']
    ?? '';

$utm_source = v('utm_source');
$utm_medium = v('utm_medium');
$utm_campaign = v('utm_campaign');
$utm_term = v('utm_term');
$utm_content = v('utm_content');

// --- SMTP CONFIG ---
$smtpHost = 'mail.cobblehosting.com';
$smtpUser = 'admin@cobblehosting.com';
$smtpPass = '14920251@dity@';
$smtpPort = 465;
$smtpSecure = 'smtps';

$toAddresses = [['aditya@baharnani.com', 'Aditya']];
$fromEmail = $smtpUser;
$fromName = 'SVRS Technical Services';

// --- Brand styling ---
$brandName = 'SVRS Technical Services';
$tagline = 'Your Trusted Partner for Exhibition Stands, Interior Design & Technical Services in Dubai & UAE.';
$brandColor = '#0a2540';
$muted = '#6b7280';
$bg = '#f9fafb';
$cardBg = '#ffffff';
$border = '#e5e7eb';

// --- Subject ---
switch ($formType) {
    case 'contact':
        // ContactForm - build subject from available fields
        $fullName = v('fullName');
        $service = v('service');
        if ($service) {
            $subject = "New Contact Inquiry from " . clean($fullName) . " - Service: " . clean($service);
        } else {
            $subject = "New Contact Inquiry from " . clean($fullName);
        }
        break;
    case 'newsletter':
        $subject = "New Newsletter Signup - " . clean($email);
        break;
    case 'marketing-modal':
    case 'exit-intent-modal':
        $subject = "New Lead Capture Submission from " . clean($name);
        break;
    case 'booking-modal':
        $service = v('service');
        if ($service) {
            $subject = "New Booking Request from " . clean($name) . " - Service: " . clean($service);
        } else {
            $subject = "New Booking Request from " . clean($name);
        }
        break;
    default:
        $subject = "Form Submission";
        break;
}


// --- Dynamic content per form type ---
$mainContent = '';

if ($formType === 'contact') {
    // ContactForm content
    $contactDetails = '';
    $fullName = v('fullName');
    $mobileNumber = v('mobileNumber');
    $service = v('service');
    $preferredDate = v('preferredDate');
    $location = v('location');
    $message = v('message');

    $contactDetails .= '<p><strong>Full Name:</strong> ' . clean($fullName) . '</p>';
    $contactDetails .= '<p><strong>Mobile Number:</strong> ' . clean($mobileNumber) . '</p>';
    $contactDetails .= '<p><strong>Service:</strong> ' . clean($service) . '</p>';
    
    if ($preferredDate) {
        try {
            $date = new DateTime($preferredDate);
            $contactDetails .= '<p><strong>Preferred Date:</strong> ' . clean($date->format('F d, Y')) . '</p>';
        } catch (Exception $e) {
            $contactDetails .= '<p><strong>Preferred Date:</strong> ' . clean($preferredDate) . '</p>';
        }
    }
    
    $contactDetails .= '<p><strong>Location:</strong> ' . clean($location) . '</p>';
    
    if ($message) {
        $contactDetails .= '<p><strong>Message:</strong><br>' . nl2br(clean($message)) . '</p>';
    }

    $mainContent = '
    <tr>
      <td style="padding:0 24px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ' . $border . ';border-radius:4px;">
          <tr><td style="background:#f3f4f6;padding:8px 10px;font-family:Arial,Helvetica,sans-serif;font-weight:600;color:#0a2540;">Contact Form Submission</td></tr>
          <tr><td style="padding:12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;">' . $contactDetails . '</td></tr>
        </table>
      </td>
    </tr>';
} elseif ($formType === 'newsletter') {
    $mainContent = '
    <tr>
      <td style="padding:0 24px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ' . $border . ';border-radius:4px;">
          <tr><td style="background:#f3f4f6;padding:8px 10px;font-family:Arial,Helvetica,sans-serif;font-weight:600;color:#0a2540;">Newsletter Subscription</td></tr>
          <tr><td style="padding:12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;">
            <p><strong>Email:</strong> ' . clean($email) . '</p>
          </td></tr>
        </table>
      </td>
    </tr>';
} elseif ($formType === 'marketing-modal' || $formType === 'exit-intent-modal') {
    $leadDetails = '';
    $leadDetails .= '<p><strong>Name:</strong> ' . clean(v('name')) . '</p>';
    $leadDetails .= '<p><strong>Email:</strong> ' . clean(v('email')) . '</p>';
    $leadDetails .= '<p><strong>Phone:</strong> ' . clean(v('phone')) . '</p>';
    
    // Add UTM parameters if present
    if ($utm_source || $utm_medium || $utm_campaign) {
        $leadDetails .= '<p style="margin-top:12px;padding-top:12px;border-top:1px solid ' . $border . ';"><strong>Marketing Information:</strong></p>';
        if ($utm_source) $leadDetails .= '<p><strong>UTM Source:</strong> ' . clean($utm_source) . '</p>';
        if ($utm_medium) $leadDetails .= '<p><strong>UTM Medium:</strong> ' . clean($utm_medium) . '</p>';
        if ($utm_campaign) $leadDetails .= '<p><strong>UTM Campaign:</strong> ' . clean($utm_campaign) . '</p>';
        if ($utm_term) $leadDetails .= '<p><strong>UTM Term:</strong> ' . clean($utm_term) . '</p>';
        if ($utm_content) $leadDetails .= '<p><strong>UTM Content:</strong> ' . clean($utm_content) . '</p>';
    }
    
    $mainContent = '
    <tr>
      <td style="padding:0 24px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ' . $border . ';border-radius:4px;">
          <tr><td style="background:#f3f4f6;padding:8px 10px;font-family:Arial,Helvetica,sans-serif;font-weight:600;color:#0a2540;">Lead Capture Submission</td></tr>
          <tr><td style="padding:12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;">' . $leadDetails . '</td></tr>
        </table>
      </td>
    </tr>';
} elseif ($formType === 'booking-modal') {
    $bookingDetails = '';
    $bookingDetails .= '<p><strong>Name:</strong> ' . clean(v('name')) . '</p>';
    $bookingDetails .= '<p><strong>Email:</strong> ' . clean(v('email')) . '</p>';
    $bookingDetails .= '<p><strong>Phone:</strong> ' . clean(v('phone')) . '</p>';
    $bookingDetails .= '<p><strong>Address:</strong> ' . clean(v('address')) . '</p>';
    
    $service = v('service');
    if ($service) {
        $bookingDetails .= '<p><strong>Service:</strong> ' . clean($service) . '</p>';
    }
    
    $message = v('message');
    if ($message) {
        $bookingDetails .= '<p><strong>Message:</strong><br>' . nl2br(clean($message)) . '</p>';
    }
    
    // Add UTM parameters if present
    if ($utm_source || $utm_medium || $utm_campaign) {
        $bookingDetails .= '<p style="margin-top:12px;padding-top:12px;border-top:1px solid ' . $border . ';"><strong>Marketing Information:</strong></p>';
        if ($utm_source) $bookingDetails .= '<p><strong>UTM Source:</strong> ' . clean($utm_source) . '</p>';
        if ($utm_medium) $bookingDetails .= '<p><strong>UTM Medium:</strong> ' . clean($utm_medium) . '</p>';
        if ($utm_campaign) $bookingDetails .= '<p><strong>UTM Campaign:</strong> ' . clean($utm_campaign) . '</p>';
        if ($utm_term) $bookingDetails .= '<p><strong>UTM Term:</strong> ' . clean($utm_term) . '</p>';
        if ($utm_content) $bookingDetails .= '<p><strong>UTM Content:</strong> ' . clean($utm_content) . '</p>';
    }
    
    $mainContent = '
    <tr>
      <td style="padding:0 24px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ' . $border . ';border-radius:4px;">
          <tr><td style="background:#f3f4f6;padding:8px 10px;font-family:Arial,Helvetica,sans-serif;font-weight:600;color:#0a2540;">Booking Request</td></tr>
          <tr><td style="padding:12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;">' . $bookingDetails . '</td></tr>
        </table>
      </td>
    </tr>';
}


// --- HTML email template (Outlook-safe) ---
ob_start(); ?>
<!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?= clean($subject) ?></title>
    <!--[if mso]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      <o:AllowPNG/>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #f9fafb;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
        }

        table,
        td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            border: 0;
            display: block;
            line-height: 0;
        }

        @media (max-width:600px) {
            .stack-column {
                display: block !important;
                width: 100% !important;
            }
        }
    </style>
</head>

<body style="margin:0;padding:0;background:#f9fafb;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
        <tr>
            <td align="center" style="padding:30px 10px;">
                <table width="600" cellpadding="0" cellspacing="0" border="0" role="presentation"
                    style="width:600px;max-width:100%;background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                    <tr>
                        <td align="center" style="padding:30px 10px 20px;">
                            <h1
                                style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;color:#0a2540;font-weight:700;">
                                <?= clean($brandName) ?>
                            </h1>
                            <p
                                style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b7280;">
                                <?= clean($tagline) ?>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:1px;background:#e5e7eb;"></td>
                    </tr>
                    <tr>
                        <td align="center" style="padding:20px;">
                            <p
                                style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:600;color:#0a2540;">
                                <?= clean($subject) ?>
                            </p>
                            <p
                                style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7280;">
                                Received at <?= date('Y-m-d H:i:s') ?> (server time)</p>
                        </td>
                    </tr>

                    <?= $mainContent ?>


                    <tr>
                        <td align="center"
                            style="padding:14px 20px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7280;">
                            This email was generated from the <strong><?= clean($brandName) ?></strong> website.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
<?php
$html = ob_get_clean();

// --- Alt text ---
$alt = strip_tags($subject) . "\n\n";
if ($formType === 'contact') {
    $alt .= "Full Name: " . v('fullName') . "\n";
    $alt .= "Mobile Number: " . v('mobileNumber') . "\n";
    $alt .= "Service: " . v('service') . "\n";
    if (v('preferredDate'))
        $alt .= "Preferred Date: " . v('preferredDate') . "\n";
    if (v('location'))
        $alt .= "Location: " . v('location') . "\n";
    if (v('message'))
        $alt .= "Message: " . strip_tags(v('message')) . "\n";
} elseif ($formType === 'newsletter') {
    $alt .= "Email: " . $email . "\n";
} elseif ($formType === 'marketing-modal' || $formType === 'exit-intent-modal') {
    $alt .= "Name: " . v('name') . "\n";
    $alt .= "Email: " . v('email') . "\n";
    $alt .= "Phone: " . v('phone') . "\n";
    if ($utm_source) $alt .= "UTM Source: " . $utm_source . "\n";
    if ($utm_medium) $alt .= "UTM Medium: " . $utm_medium . "\n";
    if ($utm_campaign) $alt .= "UTM Campaign: " . $utm_campaign . "\n";
} elseif ($formType === 'booking-modal') {
    $alt .= "Name: " . v('name') . "\n";
    $alt .= "Email: " . v('email') . "\n";
    $alt .= "Phone: " . v('phone') . "\n";
    $alt .= "Address: " . v('address') . "\n";
    if (v('service'))
        $alt .= "Service: " . v('service') . "\n";
    if (v('message'))
        $alt .= "Message: " . strip_tags(v('message')) . "\n";
    if ($utm_source) $alt .= "UTM Source: " . $utm_source . "\n";
    if ($utm_medium) $alt .= "UTM Medium: " . $utm_medium . "\n";
    if ($utm_campaign) $alt .= "UTM Campaign: " . $utm_campaign . "\n";
}

// --- Send Email ---
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $smtpPort;
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    $mail->setFrom($fromEmail, $fromName);
    foreach ($toAddresses as [$addr, $nm])
        $mail->addAddress($addr, $nm);
    
    // Set reply-to based on form type
    if ($formType === 'newsletter') {
        $mail->addReplyTo($email, 'Newsletter Subscriber');
    } else {
        $replyName = v('name') ?: v('fullName') ?: 'Customer';
        $mail->addReplyTo($email, $replyName);
    }
    
    $mail->addCC('data@idigitalise.co.in', 'Idigitalise');

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $html;
    $mail->AltBody = $alt;
    $mail->send();

    // --- Auto-reply to customer ---
    try {
        $mail->clearAllRecipients();
        $mail->clearAttachments();
        $mail->clearReplyTos();
        $mail->clearCCs();
        $mail->clearBCCs();

        $mail->setFrom('no-reply@baharnani.com', $fromName);
        
        // Get customer name based on form type
        $customerName = clean(v('name') ?: v('fullName') ?: 'Valued Customer');
        $mail->addAddress($email, $customerName);

        // Skip auto-reply for newsletter subscriptions
        if ($formType === 'newsletter') {
            return;
        }

        $mail->Subject = "Thanks for contacting $brandName";
        $mail->isHTML(true);
        $autoReplyHtml = "
            <div style='font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>
                <p style='font-size: 16px; color: #333; margin-bottom: 16px;'>Hi " . $customerName . ",</p>
                <p style='font-size: 15px; color: #555; line-height: 1.6; margin-bottom: 16px;'>
                    Thanks for reaching out to <strong>$brandName</strong>. Our team has received your details and will contact you shortly.
                </p>
                <p style='font-size: 15px; color: #555; line-height: 1.6; margin-bottom: 16px;'>
                    If it's urgent, feel free to reply to this email.
                </p>
                <br>
                <p style='font-size: 15px; color: #333; margin-top: 24px;'>
                    Regards,<br>
                    <strong>$brandName Team</strong>
                </p>
            </div>
        ";

        $mail->Body = $autoReplyHtml;
        $mail->AltBody = "Hi " . $customerName . ",\n\nThanks for reaching out to $brandName. Our team has received your details and will contact you shortly.\n\nIf it's urgent, feel free to reply to this email.\n\nRegards,\n$brandName Team";

        $mail->send();
    } catch (Exception $e) {
        error_log('Auto-reply Error: ' . $mail->ErrorInfo);
        // Don't block the main form – auto-reply failure should not return error to user
    }

    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} catch (Exception $e) {
    error_log('Mailer Error: ' . $mail->ErrorInfo);
    http_response_code(500);
    echo json_encode(['error' => $mail->ErrorInfo]);
    // echo json_encode(['error' => 'Failed to send email.']);
}

