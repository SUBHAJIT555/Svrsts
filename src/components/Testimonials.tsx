import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AhmedAlMansoori from "@/assets/images/TestimonialImages/AhmedAlMansoori.webp";
import AnjaliMehta from "@/assets/images/TestimonialImages/AnjaliMehta.webp";
import DeepakSingh from "@/assets/images/TestimonialImages/DeepakSingh.webp";
import FatimaAlZahra from "@/assets/images/TestimonialImages/FatimaAlZahra.webp";
import MohammedAlSuwaidi from "@/assets/images/TestimonialImages/MohammedAlSuwaidi.webp";
import PriyaSharma from "@/assets/images/TestimonialImages/PriyaSharma.webp";
import RajeshKumar from "@/assets/images/TestimonialImages/RajeshKumar.webp";
import VikramPatel from "@/assets/images/TestimonialImages/VikramPatel.webp";

type Testimonial = {
    name: string;
    role: string;
    image: string;
    company: string;
    quote: string;
    rating?: number;
};

// Full Star Icon Component
const FullStarIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
    </svg>
);

// Half Star Icon Component
const HalfStarIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 1a.993 .993 0 0 1 .823 .443l.067 .116l2.852 5.781l6.38 .925c.741 .108 1.08 .94 .703 1.526l-.07 .095l-.078 .086l-4.624 4.499l1.09 6.355a1.001 1.001 0 0 1 -1.249 1.135l-.101 -.035l-.101 -.046l-5.693 -3l-5.706 3c-.105 .055 -.212 .09 -.32 .106l-.106 .01a1.003 1.003 0 0 1 -1.038 -1.06l.013 -.11l1.09 -6.355l-4.623 -4.5a1.001 1.001 0 0 1 .328 -1.647l.113 -.036l.114 -.023l6.379 -.925l2.853 -5.78a.968 .968 0 0 1 .904 -.56zm0 3.274v12.476a1 1 0 0 1 .239 .029l.115 .036l.112 .05l4.363 2.299l-.836 -4.873a1 1 0 0 1 .136 -.696l.07 -.099l.082 -.09l3.546 -3.453l-4.891 -.708a1 1 0 0 1 -.62 -.344l-.073 -.097l-.06 -.106l-2.183 -4.424z" />
    </svg>
);

// Empty Star Icon Component
const EmptyStarIcon = ({ className }: { className?: string }) => (
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
        className={className}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
    </svg>
);

// Star Rating Component
const StarRating = ({ rating = 5 }: { rating?: number }) => {
    const fullRating = Math.floor(rating || 5);
    const hasHalfStar = (rating || 5) % 1 >= 0.5;
    const emptyStars = 5 - fullRating - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-0.5">
            {/* Full Stars */}
            {[...Array(fullRating)].map((_, i) => (
                <FullStarIcon
                    key={`full-${i}`}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-yellow-400"
                />
            ))}
            {/* Half Star */}
            {hasHalfStar && (
                <HalfStarIcon
                    key="half"
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-yellow-400"
                />
            )}
            {/* Empty Stars */}
            {[...Array(emptyStars)].map((_, i) => (
                <EmptyStarIcon
                    key={`empty-${i}`}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-neutral-300"
                />
            ))}
        </div>
    );
};

const testimonials: Testimonial[] = [
    {
        quote:
            "SVRS transformed our exhibition stand at GITEX Dubai into a stunning showcase. Their attention to detail and craftsmanship exceeded our expectations. The stand was the highlight of the trade show.",
        name: "Ahmed Al-Mansoori",
        role: "Marketing Director",
        company: "Dubai Tech Solutions LLC",
        image: AhmedAlMansoori,
        rating: 5,
    },
    {
        quote:
            "Outstanding work on our office interior renovation in Business Bay. SVRS delivered a beautiful, functional space that perfectly reflects our brand. Professional team and exceptional craftsmanship.",
        name: "Priya Sharma",
        role: "Operations Director",
        company: "Innovate Middle East FZE",
        image: PriyaSharma,
        rating: 5,
    },
    {
        quote:
            "The custom furniture pieces SVRS created for our showroom in Jumeirah are exceptional. Quality craftsmanship and innovative design that perfectly matched our vision. Highly recommended!",
        name: "Rajesh Kumar",
        role: "Showroom Manager",
        company: "Luxury Home Interiors Dubai",
        image: RajeshKumar,
        rating: 5,
    },
    {
        quote:
            "SVRS handled our event decoration for Dubai Shopping Festival beautifully. From concept to execution, they delivered a memorable experience. Their lighting and decor services are top-notch.",
        name: "Fatima Al-Zahra",
        role: "Event Manager",
        company: "Premier Events & Exhibitions",
        image: FatimaAlZahra,
        rating: 5,
    },
    {
        quote:
            "Excellent woodwork services for our office in Dubai Marina. SVRS built custom cabinets and furniture that transformed our workspace. Professional service and outstanding quality.",
        name: "Vikram Patel",
        role: "Facilities Manager",
        company: "Tech Hub Dubai LLC",
        image: VikramPatel,
        rating: 4.5,
    },
    {
        quote:
            "SVRS delivered a complete interior solution for our new office in DIFC. From design to installation, everything was handled professionally. Our employees love the new workspace.",
        name: "Anjali Mehta",
        role: "HR Director",
        company: "Global Financial Services UAE",
        image: AnjaliMehta,
        rating: 5,
    },
    {
        quote:
            "The exhibition stand SVRS built for us at Arab Health was impressive and attracted many visitors. Their expertise in stand building is evident in every detail. Highly professional.",
        name: "Mohammed Al-Suwaidi",
        role: "Business Development Manager",
        company: "Dubai Medical Equipment Trading",
        image: MohammedAlSuwaidi,
        rating: 5,
    },
    {
        quote:
            "SVRS transformed our workspace in Al Barsha with their interior design expertise. The combination of furniture, woodwork, and design created a perfect working environment.",
        name: "Deepak Singh",
        role: "General Manager",
        company: "Future Workspaces Dubai",
        image: DeepakSingh,
        rating: 4.5,
    },


];

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
    const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
    const descriptionInView = useInView(descriptionRef, { once: false, amount: 0.1 });
    const testimonialsInView = useInView(testimonialsRef, { once: false, amount: 0.1 });

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
                            Testimonials
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
                        Real Results, Real Voices
                        <br />
                        <span className="font-normal text-neutral-800">
                            From Our Clients
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
                        See how businesses across Dubai & UAE are thriving with SVRS Technical Services — real stories of exceptional exhibition stands, beautiful interiors, custom furniture, and comprehensive interior solutions.
                    </motion.p>

                    {/* Testimonials Grid */}
                    <div
                        ref={testimonialsRef}
                        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
                    >
                        {testimonials.map(({ name, role, company, quote, image, rating }, index) => (
                            <motion.div
                                key={index}
                                className="relative min-h-[280px] bg-white border border-neutral-200 rounded-xl ring ring-neutral-300 ring-offset-3 md:ring-offset-6 transition-all duration-300 hover:shadow-lg overflow-hidden"
                                style={{ backgroundColor: 'white' }}
                                initial={{ opacity: 0, y: 40 }}
                                animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
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
                                        backgroundSize: "10px 10px",
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
                                    {/* Profile Image and Info */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            alt={name}
                                            src={image}
                                            loading="lazy"
                                            className="size-12 sm:size-14 rounded-2xl object-cover border border-neutral-200 ring ring-neutral-300 ring-offset-2 md:ring-offset-3 shadow-xl"
                                        />
                                        <div>
                                            <p className="text-base sm:text-lg font-semibold text-neutral-900 font-generalsans">
                                                {name}
                                            </p>
                                            <span className="text-sm text-neutral-600 font-generalsans">
                                                {role}
                                            </span>
                                            <p className="text-xs text-neutral-500 font-generalsans">
                                                {company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Star Rating */}
                                    <div className="mb-4">
                                        <StarRating rating={rating} />
                                    </div>

                                    {/* Quote */}
                                    <blockquote>
                                        <p className="text-sm sm:text-base text-neutral-700 font-generalsans leading-relaxed italic">
                                            "{quote}"
                                        </p>
                                    </blockquote>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
