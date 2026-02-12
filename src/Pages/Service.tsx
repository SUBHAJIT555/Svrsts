import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServiceHero from "@/components/ServiceHero";
import ServicesVarity from "@/components/ServicesVarity";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Service = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when component mounts or hash changes
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // Small delay to ensure components are rendered
    }
  }, [location.hash]);

  return (
    <>
      {/* Fixed full-viewport dashed grid background (behind everything except hero/footer) */}
      <div
        className="fixed inset-0 h-screen w-full z-0 bg-white pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "5px 5px",
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
      <div className="relative z-10">
        <ServiceHero />
        <ServicesVarity />
        <Testimonials />
        <CallToAction />
      </div>
    </>
  );
};

export default Service;