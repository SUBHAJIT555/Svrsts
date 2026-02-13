import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FAQImg from "@/assets/images/faq.svg";
import CTAButton from "./ui/CTAButton";

const faqItems = [
  {
    id: 1,
    question: "What services does SVRS Technical Services offer?",
    answer:
      "SVRS Technical Services specializes in exhibition stand building, event decoration and lighting, office interior design, custom furniture, woodwork, painting services, and comprehensive interior solutions. We handle all aspects of interior projects from concept to completion across Dubai & UAE.",
  },
  {
    id: 2,
    question: "Do you build custom exhibition stands?",
    answer:
      "Yes, we are expert exhibition stand builders. We design and construct custom exhibition stands for trade shows and events, creating stunning displays that showcase your brand and captivate your audience. From concept to installation, we handle every aspect of your exhibition stand project.",
  },
  {
    id: 3,
    question: "What interior services do you provide?",
    answer:
      "We provide complete interior solutions including office interior design and fit-outs, custom furniture design and fabrication, woodwork and carpentry, painting services, and all kinds of interior design work. Our team handles space planning, material selection, and complete project execution.",
  },
  {
    id: 4,
    question: "Do you provide event decoration services?",
    answer:
      "Yes, we offer professional event decoration and stand lighting services. Our team creates memorable event experiences with stunning decor and strategic lighting design that enhances your brand presence and creates impactful visual experiences.",
  },
  {
    id: 5,
    question: "What is your pricing structure?",
    answer:
      "We believe in transparent pricing with no hidden costs. Our quotes are detailed and upfront, so you know exactly what you're paying for before we begin any work. Pricing varies based on project scope, materials, and requirements for exhibition stands, interiors, furniture, or woodwork projects.",
  },
  {
    id: 6,
    question: "How quickly can you complete a project?",
    answer:
      "We understand the importance of deadlines. Our project management ensures timely completion while maintaining the highest quality standards. Project timelines vary based on scope - from quick furniture pieces to complete office interiors or exhibition stands. We provide realistic timelines upfront.",
  },
  {
    id: 7,
    question: "Do you serve clients across all Emirates?",
    answer:
      "Yes, as a Dubai-based company, SVRS Technical Services serves clients across all Emirates in the UAE. We have the capability and resources to deliver consistent quality in exhibition stand building, event decoration, office interiors, furniture, and woodwork services wherever you are located.",
  },
  {
    id: 8,
    question: "Do you provide warranties on your work?",
    answer:
      "Yes, we stand behind our work with appropriate warranties. Whether it's exhibition stands, furniture, woodwork, or interior installations, we ensure quality craftsmanship and reliable solutions. Warranty periods depend on the type of work and materials used.",
  },
];

const FAQItem = ({
  item,
  isOpen,
  onToggle,
  index,
  isInView,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isInView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    className="border border-neutral-200 ring ring-neutral-300 ring-offset-2 md:ring-offset-4 rounded-xl bg-linear-to-l from-neutral-100 to-white backdrop-blur-sm overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300"
  >
    <button
      onClick={onToggle}
      className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 group"
    >
      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-800 font-generalsans group-hover:text-neutral-900 transition-colors">
        {item.question}
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
            {item.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
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
              FAQ
            </span>
          </motion.div>

          {/* Two columns: Left = intro + CTA, Right = accordion */}
          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Left - Heading, description, CTA */}
            <div className="w-full md:w-2/5 lg:w-2/5 shrink-0">
              <motion.h2
                ref={headingRef}
                initial={{ opacity: 0, y: 30 }}
                animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clashdisplay font-light leading-tight text-neutral-900 mb-4 sm:mb-6"
              >
                Frequently Asked{" "}
                <span className="font-normal text-neutral-800">Questions</span>
              </motion.h2>
              <motion.p
                ref={contentRef}
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg text-neutral-600 font-generalsans leading-relaxed mb-6 sm:mb-8"
              >
                Find answers to common questions about SVRS Technical Services - exhibition stand building, event decoration, office interiors, furniture, woodwork, and comprehensive interior solutions in Dubai & UAE.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CTAButton
                  label="Any questions? Reach out"
                  onClick={() => navigate("/contact-us")}
                  variant="light"
                  className="font-generalsans w-fit sm:w-auto bg-linear-to-r from-neutral-200 to-white cursor-pointer shadow-none ring ring-neutral-300 text-neutral-900  ring-offset-2 md:ring-offset-4 ml-2 mb-6 sm:mb-8"
                />
              </motion.div>
              {/* Image */}
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, x: -30 }}
                animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full max-h-[250px] sm:max-h-[400px] md:max-h-[500px] overflow-hidden rounded-lg flex items-center justify-center shrink-0"
              >
                <img
                  src={FAQImg}
                  alt="FAQ"
                  className="w-full h-auto max-h-[250px] sm:max-h-[400px] md:max-h-[500px] object-contain object-center"
                />
              </motion.div>
            </div>

            {/* Right - Accordion */}
            <div ref={accordionRef} className="flex-1 min-w-0 space-y-4 sm:space-y-5">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => toggleAccordion(index)}
                  index={index}
                  isInView={accordionInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
