import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CTAButton from "./ui/CTAButton";

// Services data with SVG paths, descriptions, and images
const services = [
    {
        id: "exhibition-stand-building",
        name: "Exhibition Stand Building.",
        description: "Custom-designed exhibition stands that showcase your brand and captivate your audience at trade shows and events. From concept to completion, we build stands that make an impact. Our expert team handles design, fabrication, installation, and dismantling, ensuring your brand stands out with innovative solutions and premium craftsmanship.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        paths: [
            "M3 21h18",
            "M5 21V7l8 -4v18",
            "M19 21V11l-6 -4",
            "M9 9v0",
            "M9 15v0",
            "M9 21v0",
        ],
    },
    {
        id: "wood-work",
        name: "Wood Work.",
        description: "Expert woodwork and carpentry services. Custom furniture, cabinetry, and woodworking solutions crafted with precision and premium materials for lasting quality. Our skilled craftsmen create bespoke pieces including custom furniture, built-in wardrobes, kitchen cabinets, and precision joinery work that combines traditional techniques with modern design.",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop",
        paths: [
            "M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5",
        ],
    },
    {
        id: "event-decoration",
        name: "Event Decoration.",
        description: "Professional event decoration and stand lighting services that create memorable experiences. Transform your events with stunning decor and strategic lighting design. We provide complete event decoration solutions including theme-based designs, floral arrangements, lighting installations, and stand lighting that enhances your brand presence and creates impactful visual experiences.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
        paths: [
            "M12 2v20",
            "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
        ],
    },
    {
        id: "office-interior",
        name: "Office Interior.",
        description: "Complete office interior design and fit-out services. Transform your workspace into inspiring environments that boost productivity and reflect your brand identity. We handle everything from space planning and design consultation to complete fit-out, furniture installation, and finishing touches that create functional and aesthetically pleasing office spaces.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        paths: [
            "M3 21h18",
            "M5 21V7l8 -4v18",
            "M19 21V11l-6 -4",
            "M9 9v0",
            "M9 15v0",
            "M9 21v0",
        ],
    },
    {
        id: "furniture",
        name: "Furniture.",
        description: "Custom furniture solutions for offices, events, and interiors. From design to fabrication, we create furniture pieces that combine functionality with aesthetic appeal. Our furniture services include custom design, material selection, precision fabrication, and professional installation, delivering pieces that perfectly match your space and requirements.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
        paths: [
            "M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z",
            "M9 7h6",
            "M9 11h6",
            "M9 15h4",
        ],
    },
    {
        id: "interior-design",
        name: "Interior Design.",
        description: "Comprehensive interior design services for all spaces. From residential to commercial, we handle all aspects of interior design including space planning, color schemes, and material selection. Our design team creates cohesive interiors that reflect your style and meet your functional needs, from initial concept development to final execution and styling.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        paths: [
            "M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.828 4.828a2 2 0 0 0 -.586 1.414v4.172",
            "M6 20h12",
            "M14 20v-8.172a2 2 0 0 0 -.586 -1.414l-4.828 -4.828a2 2 0 0 1 -.586 -1.414V4",
        ],
    },
    {
        id: "painting",
        name: "Painting Services.",
        description: "Professional painting services for all interior and exterior surfaces. Premium paints, expert application, and attention to detail for flawless finishes. We provide interior and exterior painting, decorative finishes, texture applications, and protective coatings using premium materials suitable for Dubai's climate, ensuring durability and resistance to heat and humidity.",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
        paths: [
            "M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -2",
            "M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2",
            "M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4",
        ],
    },
    {
        id: "complete-interior-solutions",
        name: "Complete Interior.",
        description: "End-to-end interior solutions covering all aspects from design to execution. We handle everything from concept development to final installation for seamless project delivery. Our comprehensive approach includes design consultation, space planning, material selection, furniture procurement, installation, and finishing touches, ensuring a cohesive and complete interior transformation.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        paths: [
            "M3 21h7v-3a2 2 0 0 1 4 0v3h7",
            "M6 21l0 -9",
            "M18 21l0 -9",
            "M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3",
        ],
    },
];

// Map service IDs to their detail page routes
const getServiceDetailRoute = (id: string): string => {
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
    return routeMap[id] ?? `/services/${id}`;
};

// Animated SVG Icon Component


// Parallax Services Component
type ServiceType = {
    id: string;
    name: string;
    description: string;
    image: string;
    paths: string[];
};

const ParallaxServices = ({ services }: { services: ServiceType[] }) => {
    const navigate = useNavigate();
    const sectionRef0 = useRef<HTMLDivElement>(null);
    const sectionRef1 = useRef<HTMLDivElement>(null);
    const sectionRef2 = useRef<HTMLDivElement>(null);
    const sectionRef3 = useRef<HTMLDivElement>(null);
    const sectionRef4 = useRef<HTMLDivElement>(null);
    const sectionRef5 = useRef<HTMLDivElement>(null);
    const sectionRef6 = useRef<HTMLDivElement>(null);
    const sectionRef7 = useRef<HTMLDivElement>(null);

    const sectionRefs = [sectionRef0, sectionRef1, sectionRef2, sectionRef3, sectionRef4, sectionRef5, sectionRef6, sectionRef7];

    // Create scroll progress for each section
    const scrollYProgress0 = useScroll({
        target: sectionRef0,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress1 = useScroll({
        target: sectionRef1,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress2 = useScroll({
        target: sectionRef2,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress3 = useScroll({
        target: sectionRef3,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress4 = useScroll({
        target: sectionRef4,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress5 = useScroll({
        target: sectionRef5,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress6 = useScroll({
        target: sectionRef6,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress7 = useScroll({
        target: sectionRef7,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const opacity0 = useTransform(scrollYProgress0, [0, 0.7], [0, 1]);
    const opacity1 = useTransform(scrollYProgress1, [0, 0.7], [0, 1]);
    const opacity2 = useTransform(scrollYProgress2, [0, 0.7], [0, 1]);
    const opacity3 = useTransform(scrollYProgress3, [0, 0.7], [0, 1]);
    const opacity4 = useTransform(scrollYProgress4, [0, 0.7], [0, 1]);
    const opacity5 = useTransform(scrollYProgress5, [0, 0.7], [0, 1]);
    const opacity6 = useTransform(scrollYProgress6, [0, 0.7], [0, 1]);
    const opacity7 = useTransform(scrollYProgress7, [0, 0.7], [0, 1]);

    const clip0 = useTransform(scrollYProgress0, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip1 = useTransform(scrollYProgress1, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip2 = useTransform(scrollYProgress2, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip3 = useTransform(scrollYProgress3, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip4 = useTransform(scrollYProgress4, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip5 = useTransform(scrollYProgress5, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip6 = useTransform(scrollYProgress6, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip7 = useTransform(scrollYProgress7, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

    const translate0 = useTransform(scrollYProgress0, [0, 1], [-50, 0]);
    const translate1 = useTransform(scrollYProgress1, [0, 1], [-50, 0]);
    const translate2 = useTransform(scrollYProgress2, [0, 1], [-50, 0]);
    const translate3 = useTransform(scrollYProgress3, [0, 1], [-50, 0]);
    const translate4 = useTransform(scrollYProgress4, [0, 1], [-50, 0]);
    const translate5 = useTransform(scrollYProgress5, [0, 1], [-50, 0]);
    const translate6 = useTransform(scrollYProgress6, [0, 1], [-50, 0]);
    const translate7 = useTransform(scrollYProgress7, [0, 1], [-50, 0]);

    const opacityContents = [opacity0, opacity1, opacity2, opacity3, opacity4, opacity5, opacity6, opacity7];
    const clipProgresses = [clip0, clip1, clip2, clip3, clip4, clip5, clip6, clip7];
    const translateContents = [translate0, translate1, translate2, translate3, translate4, translate5, translate6, translate7];

    return (
        <div className="flex flex-col md:px-0 px-4 sm:px-6">
            {services.map((service: ServiceType, index: number) => (
                <div
                    key={index}
                    id={service.id}
                    ref={sectionRefs[index]}
                    className={`min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-16 lg:gap-20 gap-8 py-12 sm:py-16 md:py-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                    {/* Content Section */}
                    <motion.div
                        style={{ y: translateContents[index] }}
                        className="flex flex-col w-full md:w-1/2 max-w-2xl"
                    >
                        {/* Service Name with Icon */}
                        <h4 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-clashdisplay font-medium text-neutral-900 mb-8 sm:mb-10 leading-tight flex items-center gap-3 sm:gap-4">
                            
                            <span>{service.name}</span>
                        </h4>

                        {/* Description */}
                        <motion.p
                            style={{ y: translateContents[index] }}
                            className="text-base sm:text-lg md:text-lg lg:text-xl text-neutral-600 font-generalsans leading-relaxed mb-6 sm:mb-8"
                        >
                            {service.description}
                        </motion.p>

                        {/* Image Section - Mobile Only (after description) */}
                        <motion.div
                            style={{
                                opacity: opacityContents[index],
                                clipPath: clipProgresses[index],
                            }}
                            className="relative w-full flex justify-center mb-6 sm:mb-8 md:hidden"
                        >
                            <img
                                src={service.image}
                                className="w-full max-w-md h-auto object-cover rounded-xl"
                                alt={service.name}
                            />
                        </motion.div>

                        {/* CTA Button - Mobile Only (after image) */}
                        <div className="md:hidden">
                            <CTAButton
                                label="Know More About This"
                                onClick={() => navigate(getServiceDetailRoute(service.id))}
                                variant="light"
                                className="font-generalsans bg-linear-to-r from-neutral-100 to-neutral-300 cursor-pointer"
                            />
                        </div>

                        {/* CTA Button - Desktop Only */}
                        <div className="hidden md:block">
                            <CTAButton
                                label="Know More About This"
                                onClick={() => navigate(getServiceDetailRoute(service.id))}
                                variant="light"
                                className="font-generalsans bg-linear-to-r from-neutral-100 to-neutral-300 cursor-pointer"
                            />
                        </div>
                    </motion.div>

                    {/* Image Section - Desktop Only */}
                    <motion.div
                        style={{
                            opacity: opacityContents[index],
                            clipPath: clipProgresses[index],
                        }}
                        className="hidden md:flex relative w-full md:w-1/2 justify-center"
                    >
                        <img
                            src={service.image}
                            className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover shadow-xl "
                            alt={service.name}
                        />
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

const ServicesVarity = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);


    const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
    const descriptionInView = useInView(descriptionRef, { once: false, amount: 0.1 });

    return (
        <section className="min-h-screen w-full relative bg-transparent">
            {/* Content - background from Service.tsx wrapper */}
            <div ref={containerRef} className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="w-full">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 sm:mb-12 ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
                    >
                        <div className="size-3 rounded bg-yellow-400" />
                        <span className="text-xs sm:text-sm font-generalsans font-medium text-neutral-700">
                            Our Variety of Services
                        </span>
                    </div>

                    {/* Main Heading */}
                    <motion.h2
                        ref={headingRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-clashdisplay font-light leading-[1.1] text-neutral-900 mb-6 sm:mb-8 md:mb-10"
                    >
                        Comprehensive Solutions for
                        <br />
                        <span className="font-normal text-neutral-800">
                            Every Space & Event
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
                        SVRS Technical Services delivers excellence in exhibition stand building, event decoration, office interiors, custom furniture, woodwork, painting services, and comprehensive interior solutions across Dubai & UAE. Expert craftsmanship, premium materials, and professional service for every project.
                    </motion.p>

                    {/* Parallax Scroll Sections */}
                    <ParallaxServices services={services} />
                </div>
            </div>
        </section>
    );
};

export default ServicesVarity;
