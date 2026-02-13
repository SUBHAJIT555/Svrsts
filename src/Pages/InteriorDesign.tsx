import ServiceDetailHero from "@/components/service-details/ServiceDetailHero";
import AboutService from "@/components/service-details/AboutService";
import WhyWe from "@/components/service-details/WhyWe";
import ServiceFAQ from "@/components/service-details/ServiceFAQ";
import ServiceWorkflow from "@/components/service-details/ServiceWorkflow";
import CallToAction from "@/components/CallToAction";
import AboutInteriorDesign from "@/assets/images/SeperateAboutPageImages/AboutInteriorDesign.webp";

const InteriorDesign = () => {
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
        selectedService="Interior Design Services"
          badge="Interior Design Services"
          heading="Transform Your Space With Expert Interior Design"
          description="Create beautiful, functional spaces that reflect your style and enhance your lifestyle. Our comprehensive interior design services combine creative vision with practical solutions to transform your home or office into spaces you'll love."
        />
        <AboutService
        image={AboutInteriorDesign}
        badge="About Our Interior Design Services"
          title="Interior Design Services For Your Home & Office"
          description={[
            "SVRS Technical Services offers comprehensive interior design services that transform spaces into beautiful, functional environments. Our experienced designers work closely with you to understand your style, needs, and vision, creating designs that perfectly reflect your personality and lifestyle.",
            "We handle all aspects of interior design including space planning, color schemes, material selection, furniture design, lighting design, and complete project coordination. Our services cover residential interiors, commercial spaces, offices, and hospitality projects.",
            "From concept development to final installation, we guide you through every step of the design process, ensuring your space is transformed into an environment that inspires, functions perfectly, and exceeds your expectations."
          ]}
        />
        <WhyWe
          title="Why Choose Our Interior Design Services"
          subtitle="Creative design, expert execution, and spaces that reflect your unique style."
          items={[
            {
              title: "Creative Design Vision",
              description: "Our designers bring creative vision and expertise to create unique, personalized designs that reflect your style and enhance your lifestyle."
            },
            {
              title: "Space Optimization",
              description: "We optimize your space for maximum functionality, flow, and aesthetic appeal, making the most of every square foot."
            },
            {
              title: "Material & Finish Selection",
              description: "We help you select the right materials, finishes, colors, and textures that create cohesive, beautiful interiors."
            },
            {
              title: "Complete Project Coordination",
              description: "We coordinate all aspects of your project, from design to installation, ensuring seamless execution and timely completion."
            },
            {
              title: "Budget Management",
              description: "We work within your budget to deliver maximum value, providing cost-effective solutions without compromising on design quality."
            },
            {
              title: "3D Visualizations",
              description: "We provide detailed 3D visualizations so you can see exactly how your space will look before any work begins."
            }
          ]}
        />
        <ServiceWorkflow
        badge="Our Systematic Workflow"
          title="Our Interior Design Process For Your Home & Office"
          subtitle="From concept to completion, we guide you through transforming your space."
          steps={[
            {
              title: "Initial Consultation",
              description: "We discuss your style preferences, functional needs, budget, and vision to understand what you want to achieve with your space."
            },
            {
              title: "Design Development & Presentation",
              description: "We create and present design concepts with layouts, colors, materials, and 3D views for your feedback."
            },
            {
              title: "Material Selection & Procurement",
              description: "We help select and procure all materials, furniture, fixtures, and finishes according to the approved design."
            },
            {
              title: "Implementation & Installation",
              description: "We coordinate and oversee all installation work, ensuring every element is implemented according to design specifications."
            },
            {
              title: "Final Styling & Handover",
              description: "We complete final styling touches and conduct a walkthrough before handover, ensuring everything meets our high standards."
            }
          ]}
        />
        <ServiceFAQ
          title="Interior Design Services For Your Home & Office (FAQ's)"
          subtitle="Common questions about our interior design services."
          faqItems={[
            {
              id: 1,
              question: "What is included in interior design services?",
              answer: "Our services include space planning, design concepts, 3D visualizations, material selection, furniture design, lighting design, project coordination, and installation oversight."
            },
            {
              id: 2,
              question: "Do you provide 3D visualizations?",
              answer: "Yes, we provide detailed 3D visualizations and renderings so you can see exactly how your space will look before any work begins. This helps ensure your vision is perfectly captured."
            },
            {
              id: 3,
              question: "Can you work with existing furniture?",
              answer: "Absolutely. We can incorporate your existing furniture into the design, or help you select new pieces that complement the overall design concept."
            },
            {
              id: 4,
              question: "How long does an interior design project take?",
              answer: "Timeline varies based on scope, typically 6-16 weeks from design to completion. We provide detailed timelines during planning and keep you updated throughout the process."
            },
            {
              id: 5,
              question: "Do you handle procurement of materials and furniture?",
              answer: "Yes, we can handle procurement of all materials, furniture, fixtures, and finishes, or work with your preferred suppliers. We ensure quality and timely delivery."
            },
            {
              id: 6,
              question: "What types of spaces do you design?",
              answer: "We design all types of spaces including residential homes, apartments, offices, commercial spaces, retail stores, and hospitality venues. We adapt our approach to match each project type."
            }
          ]}
        />
        <CallToAction />
      </div>
    </>
  );
};

export default InteriorDesign;
