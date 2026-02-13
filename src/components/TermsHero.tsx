import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TermsHero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const descriptionInView = useInView(descriptionRef, { once: false, amount: 0.1 });

  return (
    <section className="w-full relative mt-10 min-h-[60vh] flex items-center justify-center bg-white">
      {/* Dashed grid background - matches ContactHero / ServiceDetailHero */}
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

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
        >
          <div className="size-3 rounded bg-green-400 animate-pulse border border-neutral-300" />
          <span className="text-sm md:text-base font-generalsans font-medium text-neutral-700">
            Terms & Conditions
          </span>
        </motion.div>

        <motion.h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-light text-neutral-900 font-clashdisplay mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Terms That Govern Your Use
        </motion.h1>

        <motion.p
          ref={descriptionRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 font-generalsans mb-8 sm:mb-10 md:mb-12 max-w-4xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Please read these terms and conditions carefully before using our services. By engaging with SVRS Technical Services, you agree to be bound by these terms.
        </motion.p>
      </div>
    </section>
  );
};

export default TermsHero;
