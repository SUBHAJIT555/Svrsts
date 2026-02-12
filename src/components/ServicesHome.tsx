import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Services data with images
const services = [
  {
    id: "hv-ac-and-electrical",
    name: "HVAC & Electrical",
    description: "Expert HVAC and electrical solutions for residential and commercial projects. From installation to maintenance, ensuring efficiency and safety.",
    shortDescription: "Complete HVAC and electrical solutions for all your needs.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
  },
  {
    id: "carpentry",
    name: "Carpentry",
    description: "Bespoke carpentry solutions and custom fit-outs. Precision craftsmanship with premium materials tailored to your needs.",
    shortDescription: "Custom carpentry and woodworking solutions.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop",
  },
  {
    id: "data-cctv",
    name: "Data & CCTV",
    description: "Structured cabling, CCTV installations, and security solutions. Keeping your property secure and connected.",
    shortDescription: "Security and connectivity solutions for modern buildings.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    description: "Professional plumbing services covering pipe installations, repairs, and maintenance. Leak-free systems for every project.",
    shortDescription: "Professional plumbing installations and repairs.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
  },
  {
    id: "sanitary-paint",
    name: "Sanitary & Paint",
    description: "Professional painting, finishing, and sanitary solutions. Premium materials for residential and commercial projects.",
    shortDescription: "Premium painting and sanitary solutions.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
  },
  {
    id: "kitchen-equipment",
    name: "Kitchen Equipment",
    description: "Complete kitchen equipment installation and setup. Functional design with premium appliances and fixtures.",
    shortDescription: "Complete kitchen installation and setup services.",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop",
  },
  {
    id: "villa-renovation",
    name: "Villa Renovation",
    description: "Full-scale villa renovation services. Transforming spaces with expert design, quality materials, and meticulous execution.",
    shortDescription: "Complete villa transformation and renovation.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
  {
    id: "annual-maintenance",
    name: "Annual Maintenance",
    description: "Comprehensive annual maintenance contracts (AMC) to ensure your building's systems operate seamlessly year-round.",
    shortDescription: "Comprehensive maintenance contracts for all systems.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  },
];

const ServiceCard = ({
  id,
  title,
  description,
  shortDescription,
  image,
  index,
  isInView,
}: {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  index: number;
  isInView: boolean;
}) => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate(`/services#${id}`);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative h-[400px] sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-clashdisplay font-medium mb-2 sm:mb-3 text-white">
          {title}
        </h3>

        {/* Short Description - Always visible */}
        <p className="text-sm sm:text-base text-white/90 font-generalsans mb-4 line-clamp-2">
          {shortDescription}
        </p>

        {/* Full Description and Button - Show on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <p className="text-sm sm:text-base text-white/90 font-generalsans mb-4 leading-relaxed">
            {description}
          </p>
          <button
            onClick={handleKnowMore}
            className="bg-neutral-800/90 hover:bg-neutral-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-generalsans font-medium text-sm sm:text-base transition-all duration-300 inline-flex items-center gap-2 shadow-lg group/button"
          >
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover/button:-translate-y-1 transition-transform duration-200"
            >
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesHome = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const contentInView = useInView(contentRef, { once: false, amount: 0.1 });
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.1 });

  const handleViewAll = () => {
    navigate("/services");
  };

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
              Our Services
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
            Comprehensive Solutions
            <br />
            <span className="font-normal text-neutral-800">
              For Every Need
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
            From HVAC and electrical installations to plumbing, carpentry, and comprehensive maintenance solutions, we provide end-to-end technical services tailored to your needs.
          </motion.p>

          {/* Services Grid */}
          <div
            ref={servicesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.name}
                description={service.description}
                shortDescription={service.shortDescription}
                image={service.image}
                index={index}
                isInView={servicesInView}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 sm:mt-16 md:mt-20 flex justify-start"
          >
            <button
              onClick={handleViewAll}
              className="bg-neutral-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-neutral-800 transition-all duration-300 font-generalsans font-medium text-base sm:text-lg shadow-lg"
            >
              View All Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
