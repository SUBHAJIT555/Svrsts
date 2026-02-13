import PrivacyHero from "@/components/PrivacyHero";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Fixed full-viewport dashed grid background - matches Terms, Cookie, About, Contact */}
      <div
        className="fixed inset-0 h-screen w-full z-0 bg-white pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "5px 5px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="relative z-10">
        <PrivacyHero />

        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-6xl mx-auto">
            {/* Badge - matches site style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 sm:mb-10 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-text-shield text-neutral-700">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M13 3v4a.997 .997 0 0 0 1 1h4" />
                <path d="M11 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5" />
                <path d="M8 9h1" />
                <path d="M8 12.994l3 0" />
                <path d="M8 16.997l2 0" />
                <path d="M21 15.994c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5" />
              </svg>
              <span className="text-sm md:text-base font-generalsans font-medium text-neutral-700">
                Privacy Policy 
              </span>
            </div>

            {/* Content card - border/ring like other site sections */}
            <div className="relative rounded-xl border border-neutral-200 bg-white ring ring-neutral-300 ring-offset-4 md:ring-offset-8 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="prose prose-neutral max-w-none">
                <p className="text-sm sm:text-base text-neutral-500 font-generalsans mb-8 italic">
                  Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    1. Introduction
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    SVRS Technical Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    By using our services or providing us with your personal information, you consent to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    2. Information We Collect
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    We may collect the following types of information:
                  </p>

                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-clashdisplay mb-3 mt-6">
                    2.1 Personal Information
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    When you contact us, request a quote, or use our services, we may collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Name and contact information (email address, phone number, postal address)</li>
                    <li>Company name and business information</li>
                    <li>Project details and service requirements</li>
                    <li>Payment information (processed securely through third-party payment processors)</li>
                    <li>Identification documents (when required for regulatory compliance)</li>
                  </ul>

                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-clashdisplay mb-3 mt-6">
                    2.2 Automatically Collected Information
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website addresses</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    3. How We Use Your Information
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>To provide, maintain, and improve our services</li>
                    <li>To process your service requests and quotations</li>
                    <li>To communicate with you about your projects and services</li>
                    <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To comply with legal obligations and regulatory requirements</li>
                    <li>To prevent fraud and ensure security</li>
                    <li>To analyze website usage and improve user experience</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    4. Information Sharing and Disclosure
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    We do not sell your personal information. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business (e.g., payment processors, cloud hosting, email services)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our clients</li>
                    <li><strong>With Your Consent:</strong> When you have given explicit consent for sharing</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    5. Data Security
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Secure servers and databases</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication procedures</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    6. Your Rights
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    Under UAE data protection laws, you have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    To exercise these rights, please contact us using the information provided in the Contact section below.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    7. Cookies and Tracking Technologies
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. Types of cookies we use:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality. For more detailed information, please refer to our Cookie Policy.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    8. Data Retention
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors we consider:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>The nature of the information</li>
                    <li>Legal and regulatory requirements</li>
                    <li>Ongoing business relationships</li>
                    <li>Dispute resolution and legal claims</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    9. Third-Party Links
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    10. Children&apos;s Privacy
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    11. International Data Transfers
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    12. Changes to Privacy Policy
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services after changes constitutes acceptance of the updated Privacy Policy.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    13. Contact Information
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-neutral-100 rounded-lg border border-neutral-200 p-4 sm:p-6 ring ring-neutral-200 ring-offset-2">
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans mb-2">
                      <strong>SVRS Technical Services</strong>
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans mb-2">
                      Dubai, United Arab Emirates
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans">
                      Email: info@svrs.ae
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-neutral-100 rounded-lg border border-neutral-200 ring ring-neutral-200 ring-offset-2">
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    By using our services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described herein.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
