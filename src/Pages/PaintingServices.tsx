import ServiceDetailHero from "@/components/service-details/ServiceDetailHero";
import AboutService from "@/components/service-details/AboutService";
import WhyWe from "@/components/service-details/WhyWe";
import ServiceFAQ from "@/components/service-details/ServiceFAQ";
import ServiceWorkflow from "@/components/service-details/ServiceWorkflow";
import CallToAction from "@/components/CallToAction";

const PaintingServices = () => {
  return (
    <>
      {/* Fixed full-viewport dashed grid background */}
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
        <ServiceDetailHero
        selectedService="Professional Painting Services"
          badge="Professional Painting Services"
          heading="Expert Painting That Transforms Your Space"
          description="Professional painting services that enhance your space with quality finishes and expert application. From interior walls to exterior surfaces, we deliver flawless results using premium paints and professional techniques."
        />
        <AboutService
        badge="About Our Painting Services"
          title="Professional Painting Services For Your Home & Office"
          description={[
            "SVRS Technical Services provides professional painting services for residential, commercial, and industrial properties. Our skilled painters use premium paints and expert techniques to deliver flawless finishes that enhance your space and protect your surfaces.",
            "We handle all types of painting projects including interior walls, ceilings, exterior surfaces, decorative finishes, texture work, and specialty coatings. Our services cover preparation, priming, painting, and final touch-ups to ensure perfect results.",
            "Whether you need a complete repaint or touch-up work, we work efficiently to minimize disruption while delivering quality results that last. We use only premium paints and follow best practices for surface preparation and application."
          ]}
        />
        <WhyWe
          title="Why Choose Our Painting Services"
          subtitle="Expert application, premium materials, and flawless finishes that last."
          items={[
            {
              title: "Expert Painters",
              description: "Our skilled painters have years of experience and expertise in all types of painting techniques, ensuring professional results every time."
            },
            {
              title: "Premium Paints",
              description: "We use only high-quality, premium paints from trusted brands that provide excellent coverage, durability, and beautiful finishes."
            },
            {
              title: "Proper Surface Preparation",
              description: "We properly prepare all surfaces including cleaning, sanding, priming, and repair work to ensure paint adheres properly and lasts longer."
            },
            {
              title: "Clean & Efficient Work",
              description: "We maintain clean work areas, protect your furniture and floors, and work efficiently to minimize disruption to your daily routine."
            },
            {
              title: "Attention to Detail",
              description: "We pay attention to every detail including clean edges, smooth finishes, and proper coverage to ensure flawless results."
            },
            {
              title: "Warranty on Work",
              description: "We stand behind our work with warranties on craftsmanship, ensuring your satisfaction and peace of mind."
            }
          ]}
        />
        <ServiceWorkflow
        badge="Our Systematic Workflow"
          title="Our Professional Painting Process For Your Home & Office"
          subtitle="From preparation to final finish, we ensure flawless painting results."
          steps={[
            {
              title: "Surface Inspection & Preparation",
              description: "We inspect surfaces, identify any repairs needed, and prepare surfaces through cleaning, sanding, and priming to ensure optimal paint adhesion."
            },
            {
              title: "Protection & Setup",
              description: "We protect your furniture, floors, and fixtures, set up work areas, and ensure proper ventilation before beginning painting work."
            },
            {
              title: "Priming & Base Coats",
              description: "We apply quality primers and base coats using proper techniques to ensure even coverage and a solid foundation for the final finish."
            },
            {
              title: "Final Coats & Finishing",
              description: "We apply final coats with precision, ensuring smooth finishes, clean edges, and proper coverage for beautiful, lasting results."
            },
            {
              title: "Cleanup & Inspection",
              description: "We conduct thorough cleanup, remove protection materials, and perform final inspections to ensure everything meets our high standards."
            }
          ]}
        />
        <ServiceFAQ
          title="Professional Painting Services For Your Home & Office (FAQ's)"
          subtitle="Common questions about our professional painting services."
          faqItems={[
            {
              id: 1,
              question: "What types of surfaces do you paint?",
              answer: "We paint all types of surfaces including interior walls, ceilings, exterior walls, woodwork, metal surfaces, and specialty surfaces. We adapt our techniques to match each surface type."
            },
            {
              id: 2,
              question: "Do you provide color consultation?",
              answer: "Yes, we can help you select colors that work well with your space, lighting, and style preferences. We provide color samples and recommendations."
            },
            {
              id: 3,
              question: "How long does a painting project take?",
              answer: "Timeline varies based on project size, typically 1-5 days for most projects. We provide detailed timelines during consultation and work efficiently to minimize disruption."
            },
            {
              id: 4,
              question: "Do you move furniture?",
              answer: "We can move and protect furniture, or work around it if preferred. We discuss setup and protection requirements during consultation."
            },
            {
              id: 5,
              question: "What paint brands do you use?",
              answer: "We use premium paints from trusted brands. We can use your preferred brand or recommend quality options based on your project requirements."
            },
            {
              id: 6,
              question: "Do you provide warranties?",
              answer: "Yes, we provide warranties on our painting work, typically covering craftsmanship and ensuring proper paint application and finish quality."
            }
          ]}
        />
        <CallToAction />
      </div>
    </>
  );
};

export default PaintingServices;
