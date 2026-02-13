import ServiceDetailHero from "@/components/service-details/ServiceDetailHero";
import AboutService from "@/components/service-details/AboutService";
import WhyWe from "@/components/service-details/WhyWe";
import ServiceFAQ from "@/components/service-details/ServiceFAQ";
import ServiceWorkflow from "@/components/service-details/ServiceWorkflow";
import CallToAction from "@/components/CallToAction";
import AboutFurniture from "@/assets/images/SeperateAboutPageImages/AboutFurniture.webp";

const Furniture = () => {
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
        selectedService="Custom Furniture Design & Fabrication"
          badge="Custom Furniture Design & Fabrication"
          heading="Bespoke Furniture That Perfectly Fits Your Space"
          description="Create custom furniture pieces that are uniquely yours. Our expert craftsmen design and fabricate furniture that perfectly fits your space, style, and functional requirements, combining quality craftsmanship with personalized design."
        />
        <AboutService
        image={AboutFurniture}
        badge="About Our Furniture Services"
          title="Custom Furniture Design & Fabrication"
          description={[
            "SVRS Technical Services specializes in creating custom furniture that perfectly matches your space, style, and needs. Our expert craftsmen combine traditional techniques with modern design to create bespoke pieces that are both functional and beautiful.",
            "We design and fabricate a wide range of custom furniture including sofas, tables, chairs, storage solutions, built-in units, and specialty pieces. Each piece is carefully crafted to your specifications, ensuring perfect fit, functionality, and aesthetic appeal.",
            "Whether you need residential furniture, office furniture, or commercial pieces, we work closely with you throughout the design and fabrication process to ensure the final product exceeds your expectations."
          ]}
        />
        <WhyWe
          title="Why Choose Our Furniture Services"
          subtitle="Custom design, expert craftsmanship, and furniture that perfectly fits your needs."
          items={[
            {
              title: "Custom Design",
              description: "Every piece is designed specifically for your space and requirements, ensuring perfect fit and functionality that off-the-shelf furniture can't provide."
            },
            {
              title: "Expert Craftsmanship",
              description: "Our skilled craftsmen use time-tested techniques and premium materials to create furniture that stands the test of time."
            },
            {
              title: "Material Selection",
              description: "We help you choose the right materials, finishes, and hardware based on your preferences, usage, and budget requirements."
            },
            {
              title: "Perfect Fit",
              description: "Custom furniture ensures perfect fit for your space, maximizing functionality and eliminating compromises on size or style."
            },
            {
              title: "Quality Finishing",
              description: "We apply professional finishes including staining, varnishing, upholstery, and hardware installation to ensure beautiful, durable results."
            },
            {
              title: "Personalized Service",
              description: "We work closely with you throughout the process, from initial design to final delivery, ensuring your vision is perfectly realized."
            }
          ]}
        />
        <ServiceWorkflow
        badge="Our Systematic Workflow"
          title="Our Custom Furniture Design & Fabrication Process"
          subtitle="From concept to delivery, we create your perfect custom furniture."
          steps={[
            {
              title: "Design Consultation",
              description: "We discuss your requirements, take measurements, and create custom designs that match your style, space, and functional needs."
            },
            {
              title: "Material Selection & Approval",
              description: "We help you select materials, finishes, and hardware, providing samples and detailed specifications for your approval."
            },
            {
              title: "Fabrication",
              description: "Our craftsmen begin fabrication using precision techniques, ensuring every detail is executed to perfection according to your approved design."
            },
            {
              title: "Finishing & Quality Check",
              description: "We apply professional finishes and conduct thorough quality checks to ensure every piece meets our high standards before delivery."
            },
            {
              title: "Delivery & Installation",
              description: "We handle careful delivery and professional installation, ensuring your custom furniture is perfectly placed and ready to use."
            }
          ]}
        />
        <ServiceFAQ
          title="Custom Furniture Design & Fabrication (FAQ's)"
          subtitle="Common questions about our custom furniture design and fabrication services."
          faqItems={[
            {
              id: 1,
              question: "How long does custom furniture take to make?",
              answer: "Timeline varies based on complexity and materials, typically 3-8 weeks for most pieces. We provide detailed timelines during consultation and keep you updated throughout the process."
            },
            {
              id: 2,
              question: "What materials can you work with?",
              answer: "We work with various materials including solid wood, engineered wood, metal, glass, and upholstery fabrics. We help you choose the best materials for your needs and budget."
            },
            {
              id: 3,
              question: "Do you provide design drawings?",
              answer: "Yes, we provide detailed design drawings and 3D visualizations so you can see exactly how your furniture will look before fabrication begins."
            },
            {
              id: 4,
              question: "Can you match existing furniture?",
              answer: "Absolutely. Our craftsmen can match existing furniture styles, finishes, and details to ensure seamless integration with your current pieces."
            },
            {
              id: 5,
              question: "Do you offer upholstery services?",
              answer: "Yes, we provide professional upholstery services including fabric selection, padding, and expert upholstery work for sofas, chairs, and other furniture pieces."
            },
            {
              id: 6,
              question: "What warranty do you provide?",
              answer: "We provide warranties on our craftsmanship and materials. Warranty periods vary based on the type of furniture and materials used, typically ranging from 1-3 years."
            }
          ]}
        />
        <CallToAction />
      </div>
    </>
  );
};

export default Furniture;
