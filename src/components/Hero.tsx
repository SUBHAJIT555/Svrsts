"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import AnimatedButton from "./ui/AnimatedButton";

const GradientBars: React.FC = () => {
  const [numBars] = useState(15);

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;

    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);

    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="flex h-full"
        style={{
          width: '100%',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              style={{
                flex: '1 0 calc(100% / 15)',
                maxWidth: 'calc(100% / 15)',
                height: '100%',
                background: 'linear-gradient(to top, rgb(255, 60, 0), transparent)',
                transform: `scaleY(${height / 100})`,
                transformOrigin: 'bottom',
                transition: 'transform 0.5s ease-in-out',
                animation: 'pulseBar 2s ease-in-out infinite alternate',
                animationDelay: `${index * 0.1}s`,
                outline: '1px solid rgba(0, 0, 0, 0)',
                boxSizing: 'border-box',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  // const navigate = useNavigate();

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transform for gradient bars (moves slower)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  // Parallax for newsletter section
  const newsletterY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // const handleServicesClick = () => {
  //   navigate("/services");
  // };

  // const handleContactClick = () => {
  //   navigate("/contact-us");
  // };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-neutral-100 flex items-center overflow-hidden"
    >
      {/* Light Background */}
      <div className="absolute inset-0 bg-neutral-100 z-0"></div>

      {/* Gradient Bars with Parallax - moves slower */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <GradientBars />
      </motion.div>

      {/* Main Content - moves normally */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
          >
            <div className="size-3 rounded bg-green-400 animate-pulse border border-neutral-300" />
            <span className="text-sm md:text-base font-generalsans font-medium text-neutral-700">
              Your Trusted Technical Services Provider in Dubai, UAE
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-clashdisplay font-light leading-[1.1] text-neutral-900 mb-6"
          >
            Crafting Excellence in Every Detail
            <br />
            <span className="font-normal text-neutral-800 ">
              Carpentry • Exhibition Stands • Woodwork • Painting & More
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-generalsans font-normal mb-12 mx-auto leading-relaxed"
          >
            Delivering excellence through certified technicians and proven
            expertise. Your trusted partner for maintenance and renovation
            solutions.
          </motion.p>

          {/* Newsletter Section with Parallax */}
          <motion.div
            style={{ y: newsletterY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 bg-white/20 backdrop-blur-md border border-neutral-300  p-2 rounded-full w-fit"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get("email");
                console.log("Newsletter signup:", email);
                // Add your newsletter submission logic here
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-4xl mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="flex-1 px-6 py-4 rounded-full border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors font-generalsans text-base w-3xl"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors font-generalsans text-base shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* CTA Buttons - Optional */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
          >
            <AnimatedButton
              text="Explore Services"
              onClick={handleServicesClick}
              bgColor="bg-neutral-900"
              hoverColor="bg-neutral-800"
              iconColor="bg-yellow-400"
              textColor="text-white"
              hoverTextColor="text-white"
              borderColor="border-transparent"
              className="rounded-lg shadow-lg font-clashdisplay font-medium"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-900"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12h14" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>
              }
            />

            <AnimatedButton
              text="Get In Touch"
              onClick={handleContactClick}
              bgColor="bg-white"
              hoverColor="bg-neutral-100"
              iconColor="bg-neutral-900"
              textColor="text-neutral-900"
              hoverTextColor="text-neutral-900"
              borderColor="border-neutral-300"
              className="rounded-lg shadow-sm font-generalsans font-medium"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 14l11 -11" />
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
              }
            />
          </motion.div> */}

          {/* Stats or Features */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-neutral-300"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-clashdisplay font-semibold text-neutral-900 mb-2">
                500+
              </div>
              <div className="text-sm text-neutral-600 font-generalsans">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-clashdisplay font-semibold text-neutral-900 mb-2">
                15+
              </div>
              <div className="text-sm text-neutral-600 font-generalsans">
                Years of Experience
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-clashdisplay font-semibold text-neutral-900 mb-2">
                24/7
              </div>
              <div className="text-sm text-neutral-600 font-generalsans">
                Support Available
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
