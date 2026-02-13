import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCallbackModalStore } from "@/components/store/callbackModalStore";
import CTAButton from "./ui/CTAButton";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const openCallbackModal = useCallbackModalStore((state) => state.openModal);

  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const contentInView = useInView(contentRef, { once: false, amount: 0.1 });

  return (
    <section className="w-full relative mb-10 sm:mb-16 md:mb-20 overflow-visible bg-transparent">
      <div ref={containerRef} className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        <motion.div
          ref={contentRef}
          className="relative mx-auto w-full max-w-4xl border border-neutral-200 rounded-xl ring ring-neutral-300 ring-offset-4 md:ring-offset-8 bg-white overflow-hidden shadow-2xl shadow-neutral-100"
          style={{ backgroundColor: 'white' }}
          initial={{ opacity: 0, y: 30 }}
          animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Dashed Top Fade Grid Background */}
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
                radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
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
                radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
              `,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
          
          {/* Content wrapper - ensures text is visible */}
          <div className="relative z-10 flex flex-col justify-between gap-y-3 max-[640px]:gap-y-2.5 sm:gap-y-5 md:gap-y-6 px-3 max-[640px]:px-3 sm:px-6 md:px-8 lg:px-10 py-4 max-[640px]:py-4 sm:py-8 md:py-10 lg:py-12">
          {/* Plus Icons at corners */}
          {/* <svg
            className="absolute top-[-10px] sm:top-[-12px] left-[-9px] sm:left-[-11px] z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          <svg
            className="absolute top-[-10px] sm:top-[-12px] right-[-9px] sm:right-[-11px] z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          <svg
            className="absolute bottom-[-10px] sm:bottom-[-12px] left-[-9px] sm:left-[-11px] z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          <svg
            className="absolute right-[-9px] sm:right-[-11px] bottom-[-10px] sm:bottom-[-12px] z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg> */}

          {/* Vertical borders */}
          {/* <div className="absolute -inset-y-4 sm:-inset-y-5 md:-inset-y-6 pointer-events-none left-0 w-px border-l border-neutral-200" />
          <div className="absolute -inset-y-4 sm:-inset-y-5 md:-inset-y-6 pointer-events-none right-0 w-px border-r border-neutral-200" /> */}

          {/* Dashed center line - hidden on mobile, visible on tablet and up */}
          {/* <div
            className="hidden md:block absolute top-0 left-1/2 h-full border-l border-dashed border-neutral-200 -z-10"
            style={{ transform: "translateX(-50%)" }}
          /> */}

          {/* Badge */}
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center gap-1.5 max-[640px]:gap-1 sm:gap-2 px-3 max-[640px]:px-2.5 sm:px-4 py-1.5 max-[640px]:py-1 sm:py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-4 max-[640px]:mb-3 sm:mb-8 md:mb-12 ring ring-neutral-300 ring-offset-1 max-[640px]:ring-offset-1 sm:ring-offset-2 md:ring-offset-4 w-fit mx-auto"
                  >
                      <div className="size-2 max-[640px]:size-1.5 sm:size-3 rounded bg-yellow-400" />
                      <span className="text-[10px] max-[640px]:text-[10px] sm:text-xs md:text-sm font-generalsans font-medium text-neutral-700">
                          Get In Touch
                      </span>
                  </motion.div>

          {/* Content */}
          <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
            <motion.h2
              className="text-center font-clashdisplay font-normal text-lg max-[640px]:text-base sm:text-2xl md:text-3xl lg:text-4xl text-neutral-800 leading-tight sm:leading-snug md:leading-normal px-1"
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Transform Your Space?
            </motion.h2>
            <motion.p
              className="text-center text-neutral-600 font-generalsans text-xs max-[640px]:text-[11px] sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get expert interior solutions, professional installations, and reliable maintenance services across Dubai & UAE. Our certified technicians are ready to bring your vision to life.
            </motion.p>
          </div>

          {/* Buttons - full width on small screens */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 max-[640px]:gap-2 sm:gap-3 md:gap-4 w-full max-[640px]:px-1 sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CTAButton
              label="Request Call Back"
              onClick={() => openCallbackModal()}
              variant="light"
              className="font-generalsans w-full max-[640px]:text-xs max-[640px]:py-2 max-[640px]:px-3 sm:w-auto sm:text-sm bg-linear-to-r from-neutral-200 to-white cursor-pointer shadow-none ring ring-neutral-300 text-neutral-900 ring-offset-2 md:ring-offset-4 max-[640px]:ml-0 sm:ml-2"
            />
            <CTAButton
              label="Contact Us Now"
              onClick={() => navigate("/contact-us")}
              variant="dark"
              className="font-generalsans w-full max-[640px]:text-xs max-[640px]:py-2 max-[640px]:px-3 sm:w-auto sm:text-sm bg-linear-to-l from-neutral-500 to-neutral-900 cursor-pointer shadow-none ring ring-neutral-300 text-white ring-offset-2 md:ring-offset-4 max-[640px]:ml-0 sm:ml-2"
            />
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
