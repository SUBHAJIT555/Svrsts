import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { LetterSwapPingPong } from "./ui/LetterSwap";

const ContactAddress = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const addressRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
    const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
    const addressInView = useInView(addressRef, { once: false, amount: 0.1 });
    const contactInView = useInView(contactRef, { once: false, amount: 0.1 });

    return (
        <section className="min-h-screen w-full relative bg-transparent">
            {/* Content - background from Contact.tsx wrapper */}
            <div ref={containerRef} className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="w-full max-w-6xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 sm:mb-12 ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
                    >
                        <div className="size-3 rounded bg-yellow-400" />
                        <span className="text-xs sm:text-sm font-generalsans font-medium text-neutral-700">
                            Contact Information
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
                        Get In Touch With Us
                        <br />
                        <span className="font-normal text-neutral-800">
                            We're Here to Help
                        </span>
                    </motion.h2>

                    {/* Introductory Text */}
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-neutral-600 font-generalsans leading-relaxed max-w-3xl mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Ready to transform your space? Reach out to SVRS Technical Services for expert consultation on exhibition stands, event decoration, office interiors, custom furniture, woodwork, and all interior solutions. We're here to help bring your vision to life across Dubai & UAE.
                    </motion.p>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-12 sm:mt-16">
                        {/* Left Column - Address & Map */}
                        <motion.div
                            ref={addressRef}
                            className="flex flex-col space-y-6 sm:space-y-8"
                            initial={{ opacity: 0, x: -30 }}
                            animate={addressInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {/* Our Address Section */}
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-clashdisplay font-medium text-neutral-900 mb-4 sm:mb-6">
                                    Our Address
                                </h3>
                                <div className="text-base sm:text-lg md:text-xl text-neutral-600 font-generalsans leading-relaxed space-y-2">
                                    <p className="font-semibold text-neutral-900">SVRS Technical Services</p>
                                    <p>Office No-111, Al Makteb building</p>
                                    <p>Al quoz - 3, Dubai, UAE.</p>
                                </div>
                            </div>

                            {/* Embedded Google Map */}
                            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden rounded-xl border border-neutral-200 shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.198509554!2d55.2408!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTQnMjYuOSJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                />
                            </div>
                        </motion.div>

                        {/* Right Column - Contact Info & Social */}
                        <motion.div
                            ref={contactRef}
                            className="flex flex-col space-y-8 sm:space-y-10"
                            initial={{ opacity: 0, x: 30 }}
                            animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            {/* Contact Information Section */}
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-clashdisplay font-medium text-neutral-900 mb-6 sm:mb-8">
                                    Contact Information
                                </h3>
                                <div className="space-y-6 sm:space-y-8">
                                    {/* Email */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-2 rounded-xl bg-neutral-100 border border-neutral-200 shrink-0 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
                                            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-neutral-500 font-generalsans mb-1">
                                                Email Us
                                            </p>
                                            <a
                                                href="mailto:info@svrs.ae"
                                                className="text-base sm:text-lg md:text-xl text-neutral-900 font-generalsans hover:text-neutral-700 transition-colors inline-block"
                                            >
                                                <LetterSwapPingPong
                                                    label="info@svrs.ae"
                                                    className="text-base sm:text-lg md:text-xl text-neutral-900 font-generalsans group-hover:text-neutral-700 transition-colors"
                                                />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-2 rounded-xl bg-neutral-100 border border-neutral-200 shrink-0 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
                                            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-neutral-500 font-generalsans mb-1">
                                                Call Us
                                            </p>
                                            <a
                                                href="tel:+971554684988"
                                                className="text-base sm:text-lg md:text-xl text-neutral-900 font-generalsans hover:text-neutral-700 transition-colors inline-block"
                                            >
                                                <LetterSwapPingPong
                                                    label="+971 55 468 4988"
                                                    className="text-base sm:text-lg md:text-xl text-neutral-900 font-generalsans group-hover:text-neutral-700 transition-colors"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Follow Us On Section */}
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-clashdisplay font-medium text-neutral-900 mb-6 sm:mb-8">
                                    Follow Us On
                                </h3>
                                <div className="space-y-4 sm:space-y-6">
                                    {/* LinkedIn */}
                                    <a
                                        href="https://linkedin.com/company/svrs-technical-services"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="p-2 rounded-xl bg-neutral-100 border border-neutral-200 shrink-0 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M8 11v5" />
                                                <path d="M8 8v.01" />
                                                <path d="M12 16v-5" />
                                                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                                                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
                                            </svg>
                                        </div>
                                        <LetterSwapPingPong
                                            label="LinkedIn"
                                            className="text-base sm:text-lg md:text-xl text-neutral-900 font-generalsans group-hover:text-neutral-700 transition-colors"
                                        />
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        href="https://instagram.com/svrs.technical"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="p-2 rounded-xl bg-neutral-100 border border-neutral-200 shrink-0 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
                                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                <path d="M16.5 7.5v.01" />
                                            </svg>
                                        </div>
                                        <LetterSwapPingPong
                                            label="Instagram"
                                            className="text-base sm:text-lg md:text-xl text-neutral-900 font-generalsans group-hover:text-neutral-700 transition-colors"
                                        />
                                    </a>

                                    {/* Facebook */}
                                    <a
                                        href="https://facebook.com/svrs.technical"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="p-2 rounded-xl bg-neutral-100 border border-neutral-200 shrink-0 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                            </svg>
                                        </div>
                                        <LetterSwapPingPong
                                            label="Facebook"
                                            className="text-base sm:text-lg md:text-xl text-neutral-900 font-generalsans group-hover:text-neutral-700 transition-colors"
                                        />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactAddress;
