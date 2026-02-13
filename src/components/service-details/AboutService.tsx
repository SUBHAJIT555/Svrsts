import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CTAButton from "../ui/CTAButton";
import { useCallbackModalStore } from "@/components/store/callbackModalStore";
import AboutCompanyImg from "@/assets/images/SeperateAboutPageImages/AboutExhibitionStandBuilding.webp";

interface AboutServiceProps {
  title: string;
  description: string[];
  image?: string;
  imageAlt?: string;
  badge?: string;
}

const AboutService = ({
  title,
  description,
  image,
  imageAlt = "Service Image",
  badge = "About This Service",
}: AboutServiceProps) => {
  // Use provided image or fallback to default
  const displayImage = image || AboutCompanyImg;
  const openCallbackModal = useCallbackModalStore((state) => state.openModal);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const contentInView = useInView(contentRef, { once: false, amount: 0.1 });

  return (
    <section className="min-h-screen w-full relative bg-transparent">
      <div
        ref={containerRef}
        className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-32"
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

          {/* Content Grid */}
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-12 sm:mt-16">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 sm:space-y-8"
            >
              {description.map((para, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg md:text-xl text-neutral-600 font-generalsans leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <img
                src={displayImage}
                alt={imageAlt}
                className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain rounded-xl border border-neutral-200 ring ring-neutral-300 ring-offset-4 md:ring-offset-8"
              />
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 sm:mt-16 flex justify-start"
          >
            <CTAButton
              label="Get Free Consultation"
              onClick={openCallbackModal}
              variant="light"
              className="font-generalsans ring ring-neutral-300 ring-offset-2 md:ring-offset-4 bg-linear-to-r from-neutral-200 to-white cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
