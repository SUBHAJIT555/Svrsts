
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import CTAButton from "./ui/CTAButton";
import { useNavigate } from "react-router-dom";

const ContactHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
    const descriptionInView = useInView(descriptionRef, { once: false, amount: 0.1 });
    const buttonsInView = useInView(buttonsRef, { once: false, amount: 0.1 });

    const navigate = useNavigate();

    return (
        <section className="w-full relative mt-10 min-h-[80vh] flex items-center justify-center bg-white"
            >
            {/* Grid Pattern Background */}
           <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
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
           

            <div
                ref={containerRef}
                className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center text-center"
            >
                {/* Update Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
                >
                    <div className="size-3 rounded bg-green-400 animate-pulse border border-neutral-300" />
                    <span className="text-sm md:text-base font-generalsans font-medium text-neutral-700">
                        Here to help in Dubai.
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    ref={headingRef}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-neutral-900 font-clashdisplay mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="block">Let's Start a</span>
                    <span className="block">
                        <span
                            className="inline-block bg-linear-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent"
                            style={{
                                backgroundSize: "200% auto",
                                animation: "gradient 3s ease infinite",
                            }}
                        >
                            Conversation
                        </span>{" "}
                        Together.
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    ref={descriptionRef}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 font-generalsans mb-8 sm:mb-10 md:mb-12 max-w-4xl leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Ready to transform your space? Get in touch with our{" "}
                    <strong className="font-semibold text-neutral-800">Expert Team</strong> for{" "}
                    <strong className="font-semibold text-neutral-800">Free Consultations</strong>,{" "}
                    <strong className="font-semibold text-neutral-800">Custom Quotes</strong>, and{" "}
                    <strong className="font-semibold text-neutral-800">24/7 Support</strong>. We're here to answer your questions and bring your MEP projects to life across Dubai & UAE.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    ref={buttonsRef}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    {/* Primary Button */}
                    <CTAButton
                        label="Get Free Consultation"
                        onClick={() => navigate("/contact-us")}
                        variant="dark"
                        className="font-generalsans bg-linear-to-l from-neutral-500 to-neutral-800 cursor-pointer"
                    />

                    {/* Secondary Button */}
                    <CTAButton
                        label="Explore Our Services"
                        onClick={() => navigate("/services")}
                        variant="light"
                        className="font-generalsans bg-linear-to-r from-neutral-100 to-neutral-300 cursor-pointer"
                    />
                </motion.div>
            </div>

            {/* Gradient Animation Keyframes */}
            <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
        </section>
    );
};

export default ContactHero;