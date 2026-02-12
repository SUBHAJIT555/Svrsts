import ServiceDetailHero from "@/components/service-details/ServiceDetailHero";
import AboutService from "@/components/service-details/AboutService";
import WhyWe from "@/components/service-details/WhyWe";
import ServiceFAQ from "@/components/service-details/ServiceFAQ";
import ServiceWorkflow from "@/components/service-details/ServiceWorkflow";
import CallToAction from "@/components/CallToAction";

const ExhibitionStandBuilding = () => {
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
          badge="Exhibition Stand Building Services"
          selectedService="Exhibition Stand Building"
          heading="Custom Exhibition Stand That Make Your Brand Stand Out"
          description="Transform your trade show presence with our expert exhibition stand building services. We design and construct stunning custom stands that showcase your brand, captivate your audience, and drive meaningful engagement at trade shows and events across Dubai & UAE."
        />
        <AboutService
        badge="About Exhibition Stand Building"
          title="Exhibition Stand Building Services"
          description={[
            "SVRS Technical Services specializes in creating custom exhibition stands that perfectly represent your brand and capture attention at trade shows and events. Our expert team combines innovative design with precision craftsmanship to deliver stands that make a lasting impression.",
            "From initial concept and 3D visualization to fabrication, installation, and dismantling, we handle every aspect of your exhibition stand project. Our stands are built using premium materials and cutting-edge techniques, ensuring durability, functionality, and visual impact.",
            "Whether you need a modular stand, a custom-built structure, or a complete exhibition solution, we work closely with you to understand your brand identity, target audience, and objectives to create stands that exceed expectations."
          ]}
        />
        <WhyWe
          title="Why Choose Our Exhibition Stand Building Services"
          subtitle="Expert craftsmanship, innovative design, and professional service for trade shows and events."
          items={[
            {
              title: "Custom Design & 3D Visualization",
              description: "Our design team creates unique, brand-focused exhibition stands with detailed 3D visualizations so you can see your stand before it's built."
            },
            {
              title: "Premium Materials & Quality Craftsmanship",
              description: "We use only the finest materials and employ skilled craftsmen to ensure your exhibition stand is built to the highest standards of quality and durability."
            },
            {
              title: "Complete Project Management",
              description: "From design to installation and dismantling, we handle every aspect of your project, ensuring smooth execution and timely delivery."
            },
            {
              title: "Innovative Solutions",
              description: "We stay ahead of industry trends and incorporate the latest technologies and design innovations to create stands that stand out from the competition."
            },
            {
              title: "On-Time Delivery",
              description: "We understand the importance of deadlines in the exhibition industry and ensure your stand is ready and installed on time, every time."
            },
            {
              title: "Post-Event Support",
              description: "Our service doesn't end after installation. We provide ongoing support and handle dismantling and storage if needed."
            }
          ]}
        />
        <ServiceWorkflow
        badge="Our Systematic Workflow"
          title="Our Exhibition Stand Building Process"
          subtitle="From concept to completion, we guide you through every step of creating your perfect exhibition stand."
          steps={[
            {
              title: "Consultation & Briefing",
              description: "We start with a detailed consultation to understand your brand, objectives, target audience, and specific requirements for your exhibition stand."
            },
            {
              title: "Design & 3D Visualization",
              description: "Our design team creates custom concepts and detailed 3D visualizations, allowing you to see and approve your stand before production begins."
            },
            {
              title: "Production & Fabrication",
              description: "Once approved, our skilled craftsmen begin fabrication using premium materials and precision techniques to bring your design to life."
            },
            {
              title: "Installation & Setup",
              description: "Our professional installation team handles on-site setup, ensuring your stand is perfectly installed and ready for your event."
            },
            {
              title: "Event Support & Dismantling",
              description: "We provide on-site support during your event and handle professional dismantling and storage after the event concludes."
            }
          ]}
        />
        <ServiceFAQ
          title="Exhibition Stand Building (FAQ's)"
          subtitle="Common questions about our exhibition stand building services."
          faqItems={[
            {
              id: 1,
              question: "How long does it take to build a custom exhibition stand?",
              answer: "Timeline varies based on complexity and size, typically ranging from 2-8 weeks. We provide detailed timelines during the consultation phase and ensure timely delivery for your event."
            },
            {
              id: 2,
              question: "Do you provide 3D visualizations before building?",
              answer: "Yes, we provide detailed 3D visualizations and renderings so you can see exactly how your stand will look before production begins. This ensures your vision is perfectly captured."
            },
            {
              id: 3,
              question: "Can you handle installation at the exhibition venue?",
              answer: "Absolutely. Our professional installation team handles on-site setup, ensuring your stand is perfectly installed and ready for your event. We coordinate with venue management and handle all logistics."
            },
            {
              id: 4,
              question: "What materials do you use for exhibition stands?",
              answer: "We use premium materials including high-quality wood, metal, acrylic, fabric, and modern composite materials. Material selection depends on your design, budget, and requirements."
            },
            {
              id: 5,
              question: "Do you offer modular or reusable stands?",
              answer: "Yes, we offer both custom-built and modular stand solutions. Modular stands are cost-effective and reusable, while custom stands offer unique design flexibility."
            },
            {
              id: 6,
              question: "What services are included in exhibition stand building?",
              answer: "Our services include design consultation, 3D visualization, fabrication, graphics printing, electrical work, installation, on-site support, and dismantling services."
            }
          ]}
        />
        <CallToAction />
      </div>
    </>
  );
};

export default ExhibitionStandBuilding;
