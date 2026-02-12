import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import CTAButton from "./ui/CTAButton";

// Services data with images
const services = [
  {
    id: "exhibition-stand-building",
    name: "Exhibition Stand Building",
    description: "Custom-designed exhibition stands that showcase your brand and captivate your audience at trade shows and events. From concept to completion, we build stands that make an impact.",
    shortDescription: "Custom exhibition stands for trade shows and events.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    
  },
  {
    id: "wood-work",
    name: "Wood Work",
    description: "Expert woodwork and carpentry services. Custom furniture, cabinetry, and woodworking solutions crafted with precision and premium materials for lasting quality.",
    shortDescription: "Custom woodwork and carpentry solutions.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop",
  },
  {
    id: "event-decoration",
    name: "Event Decoration",
    description: "Professional event decoration and stand lighting services that create memorable experiences. Transform your events with stunning decor and strategic lighting design.",
    shortDescription: "Professional event decoration and lighting services.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
  },
  {
    id: "office-interior",
    name: "Office Interior",
    description: "Complete office interior design and fit-out services. Transform your workspace into inspiring environments that boost productivity and reflect your brand identity.",
    shortDescription: "Complete office interior design and fit-out services.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
  {
    id: "furniture",
    name: "Furniture",
    description: "Custom furniture solutions for offices, events, and interiors. From design to fabrication, we create furniture pieces that combine functionality with aesthetic appeal.",
    shortDescription: "Custom furniture design and fabrication.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
  },
  {
    id: "interior-design",
    name: "Interior Design",
    description: "Comprehensive interior design services for all spaces. From residential to commercial, we handle all aspects of interior design including space planning, color schemes, and material selection.",
    shortDescription: "Complete interior design solutions for all spaces.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
  },
  {
    id: "painting",
    name: "Painting Services",
    description: "Professional painting services for all interior and exterior surfaces. Premium paints, expert application, and attention to detail for flawless finishes.",
    shortDescription: "Professional painting for all surfaces.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
  },
  {
    id: "complete-interior-solutions",
    name: "Complete Interior",
    description: "End-to-end interior solutions covering all aspects from design to execution. We handle everything from concept development to final installation for seamless project delivery.",
    shortDescription: "End-to-end interior solutions from concept to completion.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
];

const ServiceCard = ({
  id,
  title,
  description,
  image,
  index,
  isInView,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
  index: number;
  isInView: boolean;
}) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.3 });

  const handleKnowMore = () => {
    // Map service IDs to their route paths
    const routeMap: Record<string, string> = {
      "exhibition-stand-building": "/services/exhibition-stand-building",
      "wood-work": "/services/wood-work",
      "event-decoration": "/services/event-decoration",
      "office-interior": "/services/office-interior",
      "furniture": "/services/furniture",
      "interior-design": "/services/interior-design",
      "painting": "/services/painting-services",
      "complete-interior-solutions": "/services/complete-interior-solutions",
    };
    
    const route = routeMap[id] || `/services#${id}`;
    navigate(route);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative h-[400px] sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden cursor-pointer ring ring-neutral-300 ring-offset-4 md:ring-offset-8"
      onClick={handleKnowMore}
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

      {/* Content - fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-4 text-white text-left">
        {/* Title - always visible at bottom */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-clashdisplay mb-2 sm:mb-2 text-white text-left">
          {title}
        </h3>

        {/* Full description + button - visible on scroll for mobile/tablet, hover for desktop */}
        <div className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          // Mobile/tablet: show when in view
          cardInView ? "grid-rows-[1fr] md:grid-rows-[0fr]" : "grid-rows-[0fr]",
          // Desktop: show on hover
          "lg:group-hover:grid-rows-[1fr]"
        )}>
          <div className="min-h-0 overflow-hidden">
            <div className="w-full h-px bg-white/30"></div>
            <div className={cn(
              "transition-opacity duration-300 delay-75 pt-1 text-left",
              // Mobile/tablet: show when in view
              cardInView ? "opacity-100 md:opacity-0" : "opacity-0",
              // Desktop: show on hover
              "lg:group-hover:opacity-100"
            )}>
              <p className="text-sm sm:text-base text-white/90 font-generalsans mb-4 text-left leading-tight">
                {description}
              </p>
              <div 
                className="flex justify-start"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              >
                <CTAButton
                  label="Know More"
                  onClick={handleKnowMore}
                  variant="dark"
                  className="font-generalsans bg-linear-to-l from-neutral-500 to-neutral-900 cursor-pointer"
                />
              </div>
            </div>
          </div>
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


  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const contentInView = useInView(contentRef, { once: false, amount: 0.1 });
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.1 });

 

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
              SVRS Technical Services
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
            Exhibition Stands • Interiors
            <br />
            
              Furniture • Woodwork • Event Decor
            
          </motion.h2>

          {/* Description */}
          <motion.p
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 font-generalsans leading-relaxed mb-12 sm:mb-16 md:mb-20 max-w-3xl"
          >
            SVRS Technical Services specializes in exhibition stand building, event decoration, office interiors, custom furniture, woodwork, and comprehensive interior design solutions. We transform spaces with expert craftsmanship and innovative design.
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
                image={service.image}
                index={index}
                isInView={servicesInView}
              />
            ))}
          </div>

          
          
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
