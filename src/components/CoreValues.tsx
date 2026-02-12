import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    title: "Excellence",
    description: "We deliver superior quality in every project, ensuring the highest standards of craftsmanship, premium materials, and innovative design in all our exhibition stands, interiors, and furniture solutions.",
    icon: "award",
    paths: [
      "M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",
      "M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889",
      "M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889",
    ],
  },
  {
    title: "Reliability",
    description: "Dependable service and professional support when you need it most. Our skilled craftsmen and designers are ready to assist across Dubai & UAE, delivering on time and within budget.",
    icon: "clock",
    paths: [
      "M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0",
      "M12 7v5",
      "M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2",
      "M18 15v2a1 1 0 0 0 1 1h1",
      "M21 15v6",
    ],
  },
  {
    title: "Innovation",
    description: "Staying ahead with the latest design trends, modern materials, and innovative solutions for exhibition stands, office interiors, furniture, and comprehensive interior design.",
    icon: "bulb",
    paths: [
      "M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7",
      "M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3",
      "M9.7 17l4.6 0",
    ],
  },
  {
    title: "Integrity",
    description: "Transparent communication, honest pricing, and ethical business practices. Your trusted partner for exhibition stands, interior solutions, woodwork, and all interior services.",
    icon: "scale",
    paths: [
      "M7 20l10 0",
      "M6 6l6 -1l6 1",
      "M12 3l0 17",
      "M9 12l-3 -6l-3 6a3 3 0 0 0 6 0",
      "M21 12l-3 -6l-3 6a3 3 0 0 0 6 0",
    ],
  },
];

// Animated SVG Icon Component
const ValueIcon = ({ paths, isInView }: { paths: string[]; isInView: boolean }) => {
  return (
    <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-neutral-700 mb-4 transition-colors duration-300 bg-white border border-neutral-200 rounded-lg p-1 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        {paths.map((path, idx) => (
          <motion.path
            key={idx}
            d={path}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{
              duration: 0.4 + idx * 0.1,
              delay: idx * 0.1,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const CoreValues = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const descriptionInView = useInView(descriptionRef, { once: false, amount: 0.1 });
  const valuesInView = useInView(valuesRef, { once: false, amount: 0.1 });

  return (
    <section className="min-h-screen w-full relative bg-transparent">
      {/* Content - background from About.tsx wrapper */}
      <div ref={containerRef} className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-32">
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
              Our Core Values
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
            The Principles That Guide
            <br />
            <span className="font-normal text-neutral-800">
              Everything We Do
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl text-neutral-600 font-generalsans leading-relaxed max-w-3xl mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At SVRS Technical Services, our core values form the foundation of everything we do. These principles guide our decisions, shape our culture, and ensure we deliver exceptional service in exhibition stand building, event decoration, office interiors, furniture, woodwork, and all interior solutions.
          </motion.p>

          {/* Values Grid */}
          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="relative min-h-[300px] bg-white border border-neutral-200 rounded-xl ring ring-neutral-300 ring-offset-2 md:ring-offset-4 transition-all duration-300 hover:shadow-lg group/value overflow-hidden"
                style={{ backgroundColor: 'white' }}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
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
                  {/* Icon */}
                  <ValueIcon paths={value.paths} isInView={valuesInView} />

                  <h4 className="text-xl sm:text-2xl md:text-2xl font-clashdisplay font-medium text-neutral-900 mb-3 sm:mb-4">
                    {value.title}
                  </h4>
                  <p className="text-sm sm:text-base md:text-base text-neutral-600 font-generalsans leading-relaxed">
                    {value.description}
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

export default CoreValues;
