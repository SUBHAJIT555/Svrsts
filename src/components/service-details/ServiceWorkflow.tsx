import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WorkflowStep {
  title: string;
  description: string;
  icon?: string;
}

interface ServiceWorkflowProps {
  title?: string;
  subtitle?: string;
  steps: WorkflowStep[];
  badge?: string;
}

const ServiceWorkflow = ({
  title = "Our Workflow",
  subtitle,
  steps,
  badge = "Our Process",
}: ServiceWorkflowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const descriptionInView = useInView(descriptionRef, { once: false, amount: 0.1 });
  const stepsInView = useInView(stepsRef, { once: false, amount: 0.1 });

  return (
    <section className="min-h-screen w-full relative bg-transparent">
      <div
        ref={containerRef}
        className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16"
      >
        <div className="w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 sm:mb-12 ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
          >
            <div className="size-3 rounded bg-yellow-400" />
            <span className="text-xs sm:text-sm font-generalsans font-medium text-neutral-700">
              {badge}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-clashdisplay font-light leading-[1.1] text-neutral-900 mb-6 sm:mb-8 md:mb-10"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              ref={descriptionRef}
              className="text-base sm:text-lg md:text-xl text-neutral-600 font-generalsans leading-relaxed max-w-3xl mb-8 sm:mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Steps Grid */}
          <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative min-h-[300px] bg-white border border-neutral-200 rounded-xl ring ring-neutral-300 ring-offset-2 md:ring-offset-4 transition-all duration-300 hover:shadow-lg group/value overflow-hidden"
                style={{ backgroundColor: 'white' }}
                initial={{ opacity: 0, y: 40 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
              >
                {/* Dashed Top Fade Grid Background */}
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
                
                {/* Content wrapper - ensures text is visible */}
                <div className="relative z-10 p-6 sm:p-8">
                  {/* Step Number Icon */}
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-neutral-700 mb-4 transition-colors duration-300 bg-white border border-neutral-200 rounded-xl">
                    <div className="w-full h-full rounded-xl bg-neutral-900 text-white flex items-center justify-center text-lg sm:text-xl md:text-2xl font-clashdisplay font-semibold ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
                      {index + 1}
                    </div>
                  </div>

                  <h4 className="text-xl sm:text-2xl md:text-2xl font-clashdisplay font-medium text-neutral-900 mb-3 sm:mb-4">
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base md:text-base text-neutral-600 font-generalsans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWorkflow;
