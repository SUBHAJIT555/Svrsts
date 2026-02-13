import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import WhyChooseUsImg from "@/assets/images/whychooseus.svg";
import CTAButton from "../ui/CTAButton";

interface WhyWeItem {
  title: string;
  description: string;
}

interface WhyWeProps {
  title: string;
  subtitle?: string;
  items: WhyWeItem[];
  badge?: string;
  image?: string;
  imageAlt?: string;
}

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
  index,
  isInView,
}: {
  item: WhyWeItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isInView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    className="border border-neutral-200 ring ring-neutral-300 ring-offset-2 md:ring-offset-4 rounded-xl bg-linear-to-r from-neutral-100 to-white backdrop-blur-sm overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300"
  >
    <button
      onClick={onToggle}
      className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 group"
    >
      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-800 font-generalsans group-hover:text-neutral-900 transition-colors">
        {item.title}
      </h4>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="shrink-0 text-neutral-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="text-sm sm:text-base text-neutral-600 font-generalsans leading-relaxed px-5 sm:px-6 pb-5">
            {item.description}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const WhyWe = ({ 
  title, 
  subtitle, 
  items, 
  badge = "Why Choose Us",
  image,
  imageAlt = "Why Choose Us"
}: WhyWeProps) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const contentInView = useInView(contentRef, { once: false, amount: 0.1 });
  const accordionInView = useInView(accordionRef, { once: false, amount: 0.1 });
  const imageInView = useInView(imageRef, { once: false, amount: 0.1 });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContact = () => {
    navigate("/contact-us");
  };

  const defaultImage = image || WhyChooseUsImg;

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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-clashdisplay font-light leading-[1.1] text-neutral-900 mb-4 sm:mb-6"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              ref={contentRef}
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 font-generalsans leading-relaxed mb-12 sm:mb-16 md:mb-20 max-w-3xl"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Two columns: Accordion + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Left - Accordion */}
            <div ref={accordionRef} className="space-y-4 sm:space-y-5">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => toggleAccordion(index)}
                  index={index}
                  isInView={accordionInView}
                />
              ))}
            </div>

            {/* Right - Image & Button */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: 30 }}
              animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-8 sm:gap-10 min-w-0 overflow-hidden"
            >
              <div className="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] overflow-hidden rounded-lg flex items-center justify-center shrink-0">
                <img
                  src={defaultImage}
                  alt={imageAlt}
                  className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain object-center"
                />
              </div>
              <div className="space-y-4 sm:space-y-5">
                <CTAButton
                  label="Contact Us Now"
                  onClick={handleContact}
                  variant="light"
                  className="font-generalsans w-fit sm:w-auto bg-linear-to-r from-neutral-200 to-white cursor-pointer shadow-none ring ring-neutral-300 text-neutral-900 ring-offset-2 md:ring-offset-4 ml-2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
