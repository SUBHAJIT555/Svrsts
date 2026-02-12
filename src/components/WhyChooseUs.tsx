import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import WhyChooseUsImg from "@/assets/images/Home/whychooseus.svg";
import CTAButton from "./ui/CTAButton";

const accordionItems = [
  {
    id: 1,
    title: "Expert Exhibition Stand Builders & Event Specialists",
    content:
      "SVRS Technical Services specializes in custom exhibition stand building and event decoration. Our skilled team creates stunning stands and event spaces that showcase your brand and captivate audiences at trade shows and corporate events across Dubai & UAE.",
  },
  {
    id: 2,
    title: "Complete Interior Solutions & Office Design",
    content:
      "From office interiors to complete interior design solutions, we handle all aspects of interior projects. Our expertise includes furniture design, woodwork, space planning, and comprehensive interior services tailored to your vision and requirements.",
  },
  {
    id: 3,
    title: "Master Craftsmen in Woodwork & Custom Furniture",
    content:
      "Our expert woodworkers and craftsmen create custom furniture and woodwork solutions with precision and attention to detail. From office furniture to bespoke pieces, we deliver quality craftsmanship using premium materials.",
  },
  {
    id: 4,
    title: "Transparent Pricing & On-Time Project Delivery",
    content:
      "We believe in honest, upfront pricing with no hidden costs. Our detailed quotes ensure you know exactly what you're paying for. With efficient project management, we deliver on time while maintaining the highest quality standards.",
  },
  {
    id: 5,
    title: "Dubai-Based Serving All Emirates",
    content:
      "As a Dubai-based company, SVRS Technical Services has deep local knowledge of the UAE market. We serve clients across all Emirates, providing consistent quality in exhibition stands, event decoration, office interiors, furniture, and woodwork services.",
  },
];

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
  index,
  isInView,
}: {
  item: (typeof accordionItems)[0];
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
            {item.content}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  return (
    <section className="min-h-screen w-full relative bg-transparent">
      {/* Content - background from Home.tsx wrapper */}
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
              Why Choose SVRS Technical Services
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
            Why Choose SVRS
            <br />
            <span className="font-normal text-neutral-800">
              Exhibition Stands • Interiors • Furniture
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 font-generalsans leading-relaxed mb-12 sm:mb-16 md:mb-20 max-w-3xl"
          >
            Building trust through quality, transparency, and reliable support. Here’s what sets us apart.
          </motion.p>

          {/* Two columns: Accordion + Image / Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Left - Accordion */}
            <div ref={accordionRef} className="space-y-4 sm:space-y-5">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => toggleAccordion(index)}
                  index={index}
                  isInView={accordionInView}
                />
              ))}
            </div>

            {/* Right - Image & Contact */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: 30 }}
              animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-8 sm:gap-10 min-w-0 overflow-hidden"
            >
              <div className="w-full max-h-[240px] sm:max-h-[280px] md:max-h-[320px] overflow-hidden rounded-lg flex items-center justify-center shrink-0">
                <img
                  src={WhyChooseUsImg}
                  alt="Why Choose Us"
                  className="w-full h-auto max-h-[200px] sm:max-h-[220px] md:max-h-[250px] object-contain object-center"
                />
              </div>
              <div className="space-y-4 sm:space-y-5">
                <div className="border-b border-neutral-200 pb-4">
                  <p className="text-xs sm:text-sm font-generalsans text-neutral-600 mb-1">
                    Say Hi @
                  </p>
                  <a
                    href="mailto:info@everlastingtechnicalservices.com"
                    className="text-neutral-900 font-generalsans font-medium text-sm sm:text-base hover:text-neutral-600 transition-colors"
                  >
                    everlastingtechnical@gmail.com
                  </a>
                </div>
                <div className="border-b border-neutral-200 pb-4">
                  <p className="text-xs sm:text-sm font-generalsans text-neutral-600 mb-1">
                    Say Hello @
                  </p>
                  <a
                    href="tel:+971561234567"
                    className="text-neutral-900 font-generalsans font-medium text-sm sm:text-base hover:text-neutral-600 transition-colors"
                  >
                    +971 56 123 4567
                  </a>
                </div>
                <CTAButton
                  label="Contact Us Now"
                  onClick={handleContact}
                  variant="light"
                  className="font-generalsans w-fit sm:w-auto bg-linear-to-r from-neutral-200 to-white cursor-pointer shadow-none ring ring-neutral-300 text-neutral-900  ring-offset-2 md:ring-offset-4 ml-2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
