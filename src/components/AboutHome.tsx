import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CTAButton from "./ui/CTAButton";

const AboutHome = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const contentInView = useInView(contentRef, { once: false, amount: 0.1 });

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section className="min-h-screen w-full relative bg-transparent">
      {/* Content - background from Home.tsx wrapper */}
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
              About SVRS Technical Services
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
            Crafting Spaces That Inspire
            <br />
            <span className="font-normal text-neutral-800">
              Exhibition Stands • Interiors • Furniture
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
                SVRS Technical Services is dedicated to delivering exceptional exhibition stand building, event decoration, office interior design, furniture solutions, woodwork, and comprehensive interior services. Our commitment to quality craftsmanship and innovative design drives everything we do.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-generalsans leading-relaxed">
                With a team of skilled professionals and years of experience, we transform spaces into inspiring environments. From custom exhibition stands to complete office interiors, we provide end-to-end solutions tailored to your unique vision and requirements.
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
                What We Do
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-clashdisplay font-medium text-neutral-900 mb-2">
                    Exhibition Stand Building
                  </h4>
                  <p className="text-base sm:text-lg text-neutral-600 font-generalsans leading-relaxed">
                    Custom-designed exhibition stands that showcase your brand and captivate your audience at trade shows and events.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-clashdisplay font-medium text-neutral-900 mb-2">
                    Event Decoration & Lighting
                  </h4>
                  <p className="text-base sm:text-lg text-neutral-600 font-generalsans leading-relaxed">
                    Professional event decoration and stand lighting services that create memorable experiences and enhance your brand presence.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-clashdisplay font-medium text-neutral-900 mb-2">
                    Office Interiors & Furniture
                  </h4>
                  <p className="text-base sm:text-lg text-neutral-600 font-generalsans leading-relaxed">
                    Complete office interior solutions including custom furniture, woodwork, and all interior design services to transform your workspace.
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
            className="mt-8 md:mt-0 flex justify-start"
          >
            <CTAButton
              label="Learn More About Us"
              onClick={handleLearnMore}
              variant="light"
              className="font-generalsans ring ring-neutral-300 ring-offset-2 md:ring-offset-4 bg-linear-to-r from-neutral-200 to-white cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
