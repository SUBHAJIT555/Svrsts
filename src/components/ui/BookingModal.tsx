import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "@react-icons/all-files/fi/FiX";
import { FiCheckCircle } from "@react-icons/all-files/fi/FiCheckCircle";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useUTMTracking } from "@/hooks/useUTMTracking";
import { useBookingModalStore } from "@/components/store/bookingModalStore";

const PHONE_PREFIX = "+971";
const PHONE_DIGITS_LENGTH = 9;

// Phone number formatter
const formatPhoneNumber = (value: string): string => {
  let cleaned = value.replace(/[^\d+]/g, "");
  if (cleaned.startsWith("971")) cleaned = "+" + cleaned;
  if (!cleaned.startsWith(PHONE_PREFIX)) {
    const digits = cleaned.replace(/\D/g, "").slice(0, PHONE_DIGITS_LENGTH);
    return digits ? PHONE_PREFIX + digits : "";
  }
  const digits = cleaned
    .slice(PHONE_PREFIX.length)
    .replace(/\D/g, "")
    .slice(0, PHONE_DIGITS_LENGTH);
  return PHONE_PREFIX + digits;
};

// Validation
const validateUAEPhone = (phone: string): boolean | string => {
  if (!phone) return "Phone is required";
  const digits = phone.replace(PHONE_PREFIX, "").replace(/\D/g, "");
  if (digits.length !== PHONE_DIGITS_LENGTH)
    return "Phone number must be 9 digits";
  if (!/^[567]\d{8}$/.test(digits))
    return "Please enter a valid UAE mobile number (starting with 5, 6, or 7)";
  return true;
};

type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  website: string; // honeypot
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
};

const BookingModal = () => {
  const { isOpen, selectedService, closeModal } = useBookingModalStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: PHONE_PREFIX,
      address: "",
      message: "",
      website: "",
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
    },
  });

  useUTMTracking<BookingFormData>(setValue);

  // Focus trap
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      const modal = modalRef.current;
      if (modal) {
        const focusableElements = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key !== "Tab") return;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        };

        document.addEventListener("keydown", handleTabKey);
        firstElement?.focus();

        return () => {
          document.removeEventListener("keydown", handleTabKey);
        };
      }
    } else {
      previousActiveElement.current?.focus();
    }
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      reset();
      setSubmitStatus(null);
      setMessage("");
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: BookingFormData) => {
    if (data.website) {
      // Honeypot filled, treat as success silently
      reset();
      closeModal();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("address", data.address);
      formData.append("message", data.message);
      formData.append("service", selectedService || "");
      formData.append("formType", "booking-modal");
      formData.append("utm_source", data.utm_source);
      formData.append("utm_medium", data.utm_medium);
      formData.append("utm_campaign", data.utm_campaign);
      formData.append("utm_term", data.utm_term);
      formData.append("utm_content", data.utm_content);

      const response = await fetch("/mail.php", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.error || responseData.status === "error") {
        throw new Error(
          responseData.error || responseData.message || "Failed to send message"
        );
      }

      setMessage(responseData.message || "Thank you! We'll be in touch soon.");
      setSubmitStatus("success");
      reset();

      // Close modal after success
      setTimeout(() => {
        closeModal();
      }, 2000);
      setTimeout(() => {
        setSubmitStatus(null);
        navigate("/thank-you", { replace: true });
      }, 2500);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleBackdropWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // Prevent backdrop from scrolling
    e.stopPropagation();
  };

  const handleBackdropTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // Prevent backdrop from scrolling on touch devices
    if (e.target === e.currentTarget) {
      e.preventDefault();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-1000 flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm overflow-hidden"
          onClick={handleBackdropClick}
          onWheel={handleBackdropWheel}
          onTouchMove={handleBackdropTouchMove}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg max-h-[80vh] rounded-xl border border-neutral-200 overflow-hidden ring ring-neutral-300 ring-offset-4 md:ring-offset-8 bg-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Dashed Top Fade Grid */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                  linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                `,
                backgroundSize: "1px 1px",
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
                  radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
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
                  radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                `,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />
            
            {/* Close button - Fixed position */}
            <button
              type="button"
              style={{
                minWidth: "1px",
                minHeight: "1px",
              }}
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-text-secondary font-medium hover:text-text-primary transition-colors p-1 z-20 border rounded-lg border-neutral-200 bg-white shadow-sm cursor-pointer"
            >
              <FiX size={24} />
            </button>

            {/* Content wrapper */}
            <div 
              className="relative z-10 p-6 sm:p-8 rounded-xl overflow-y-auto flex-1 min-h-0"
              onWheel={(e) => e.stopPropagation()}
            >
              {submitStatus === "success" ? (
              <div className="text-center py-8">
                <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-xl text-text-primary font-semibold font-clashdisplay">
                  {message}
                </p>
              </div>
            ) : submitStatus === "error" ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">⚠️</div>
                <p className="text-lg text-red-500 font-semibold mb-2 font-clashdisplay">
                  Sorry, something went wrong.
                </p>
                <p className="text-sm text-text-secondary font-generalsans">
                  {message}
                </p>
              </div>
            ) : (
              <>
                {/* Headline */}
                <h2
                  id="modal-headline"
                  className="text-xl sm:text-2xl lg:text-3xl font-clashdisplay font-medium text-text-primary mb-3 pr-8 leading-tight uppercase"
                >
                  You'r Booking For : 
                </h2>

                {/* Selected Service Display */}
                {selectedService && (
                  <div className="mb-4 p-2 bg-white rounded-lg border border-neutral-200 ring ring-neutral-300 ring-offset-2 md:ring-offset-4 shadow-lg">
                    
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold text-text-primary font-generalsans">
                      {selectedService}
                    </p>
                  </div>
                )}

                {/* Subtext */}
                <p className="text-text-secondary font-medium mb-6 text-md sm:text-lg font-generalsans leading-relaxed">
                  Fill in your details and we'll get back to you shortly.
                </p>

                {/* Form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-4"
                  id="booking-form"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-text-secondary font-medium font-generalsans text-sm sm:text-base mb-2"
                    >
                      Enter Your Full Name * :
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your name"
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg bg-white border-neutral-300 text-neutral-700 font-generalsans transition-colors focus:outline-none focus:ring focus:ring-neutral-300 focus:ring-offset-2",
                        errors.name && "border-red-500"
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 font-generalsans">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-text-secondary font-medium font-generalsans text-sm sm:text-base mb-2"
                    >
                      Enter Your Email Address * :
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="Your email"
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg bg-white border-neutral-300 text-neutral-700 font-generalsans transition-colors focus:outline-none focus:ring focus:ring-neutral-300 focus:ring-offset-2",
                        errors.email && "border-red-500"
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 font-generalsans">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-text-secondary font-medium font-generalsans text-sm sm:text-base mb-2"
                    >
                      Enter Your Phone Number * :
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ validate: validateUAEPhone }}
                      render={({ field }) => (
                        <>
                          <input
                            id="booking-phone"
                            type="tel"
                            value={field.value}
                            onChange={(e) =>
                              field.onChange(formatPhoneNumber(e.target.value))
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Backspace" || e.key === "Delete") {
                                const input = e.currentTarget;
                                const cursorPos = input.selectionStart || 0;
                                const selectionEnd = input.selectionEnd || 0;
                                const hasSelection = cursorPos !== selectionEnd;

                                if (
                                  field.value.startsWith(PHONE_PREFIX) &&
                                  cursorPos <= PHONE_PREFIX.length &&
                                  !hasSelection
                                ) {
                                  e.preventDefault();
                                }
                              }
                            }}
                            onBlur={field.onBlur}
                            placeholder="Your phone number"
                            className={cn(
                              "w-full px-4 py-3 border rounded-lg bg-white border-neutral-300 text-neutral-700 font-generalsans transition-colors focus:outline-none focus:ring focus:ring-neutral-300 focus:ring-offset-2",
                              errors.phone && "border-red-500"
                            )}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-500 font-generalsans">
                              {errors.phone.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label
                      htmlFor="booking-address"
                      className="block text-text-secondary font-medium font-generalsans text-sm sm:text-base mb-2"
                    >
                      Enter Your Address * :
                    </label>
                    <input
                      id="booking-address"
                      type="text"
                      {...register("address", {
                        required: "Address is required",
                      })}
                      placeholder="Your address"
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg bg-white border-neutral-300 text-neutral-700 font-generalsans transition-colors focus:outline-none focus:ring focus:ring-neutral-300 focus:ring-offset-2",
                        errors.address && "border-red-500"
                      )}
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-500 font-generalsans">
                        {errors.address.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="booking-message"
                      className="block text-text-secondary font-medium font-generalsans text-sm sm:text-base mb-2"
                    >
                      Message * :
                    </label>
                    <textarea
                      id="booking-message"
                      rows={4}
                      {...register("message", {
                        required: "Message is required",
                      })}
                      placeholder="Your message"
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg bg-white border-neutral-300 text-neutral-700 font-generalsans transition-colors focus:outline-none focus:ring focus:ring-neutral-300 focus:ring-offset-2 resize-none",
                        errors.message && "border-red-500"
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500 font-generalsans">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Honeypot */}
                  <div className="hidden">
                    <input
                      type="text"
                      {...register("website")}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <input type="hidden" {...register("utm_source")} />
                  <input type="hidden" {...register("utm_medium")} />
                  <input type="hidden" {...register("utm_campaign")} />
                  <input type="hidden" {...register("utm_term")} />
                  <input type="hidden" {...register("utm_content")} />

                  {/* Submit button */}
                  <div className="w-full">
                    <style>{`
                      @keyframes drawSendPath {
                        0% {
                          stroke-dasharray: 1000;
                          stroke-dashoffset: 1000;
                        }
                        50% {
                          stroke-dashoffset: 0;
                        }
                        100% {
                          stroke-dasharray: 1000;
                          stroke-dashoffset: 1000;
                        }
                      }
                    `}</style>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "font-generalsans font-normal text-xs sm:text-sm md:text-base py-2 w-full bg-white shadow-sm text-text-primary border border-neutral-200 rounded-lg ring ring-neutral-200 ring-offset-2 md:ring-offset-4 transition-colors hover:shadow-none cursor-pointer flex items-center justify-center gap-2 hover:bg-neutral-500 hover:text-white",
                        {
                          "opacity-50 cursor-not-allowed pointer-events-none": isSubmitting,
                        }
                      )}
                    >
                      <span>{isSubmitting ? "Sending..." : "Submit Your Request"}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-send"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M10 14l11 -11"
                          style={{
                            strokeDasharray: 1000,
                            strokeDashoffset: 1000,
                            animation: "drawSendPath 4s ease-in-out infinite",
                            animationDelay: "0.5s",
                          }}
                        />
                        <path
                          d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
                          style={{
                            strokeDasharray: 1000,
                            strokeDashoffset: 1000,
                            animation: "drawSendPath 4s ease-in-out infinite",
                            animationDelay: "0.8s",
                          }}
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}

              <span className="sr-only" aria-live="polite">
                {isOpen ? "Modal open" : "Modal closed"}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
