import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutHome = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const contentInView = useInView(contentRef, { once: false, amount: 0.1 });

  return (
    <section className="min-h-screen w-full relative bg-white">
      {/* Dashed Center Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
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

      {/* Content */}
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
              About Our Company
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
            Building Excellence,
            <br />
            <span className="font-normal text-neutral-800">
              One Project at a Time
            </span>
          </motion.h2>

          {/* Content Grid */}
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-12 sm:mt-16">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 sm:space-y-8"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-clashdisplay font-medium text-neutral-900">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-generalsans leading-relaxed">
                We are dedicated to delivering exceptional technical solutions that exceed expectations. Our commitment to quality, innovation, and customer satisfaction drives everything we do.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-generalsans leading-relaxed">
                With a team of experienced professionals and cutting-edge technology, we provide comprehensive services tailored to meet the unique needs of each client, ensuring lasting results and trusted partnerships.
              </p>
            </motion.div>

            {/* Right Column - Additional Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-clashdisplay font-medium text-neutral-900">
                Our Values
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-clashdisplay font-medium text-neutral-900 mb-2">
                    Excellence
                  </h4>
                  <p className="text-base sm:text-lg text-neutral-600 font-generalsans leading-relaxed">
                    We strive for perfection in every project, maintaining the highest standards of quality and craftsmanship.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-clashdisplay font-medium text-neutral-900 mb-2">
                    Innovation
                  </h4>
                  <p className="text-base sm:text-lg text-neutral-600 font-generalsans leading-relaxed">
                    Embracing new technologies and methodologies to provide forward-thinking solutions that stand the test of time.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-clashdisplay font-medium text-neutral-900 mb-2">
                    Integrity
                  </h4>
                  <p className="text-base sm:text-lg text-neutral-600 font-generalsans leading-relaxed">
                    Building trust through transparent communication, ethical practices, and reliable service delivery.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 sm:mt-16 md:mt-20 flex justify-start"
          >
            <button className="bg-neutral-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-neutral-800 transition-all duration-300 font-generalsans font-medium text-base sm:text-lg shadow-lg">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
