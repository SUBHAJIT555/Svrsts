import ServiceDetailHero from "@/components/service-details/ServiceDetailHero";
import AboutService from "@/components/service-details/AboutService";
import WhyWe from "@/components/service-details/WhyWe";
import ServiceFAQ from "@/components/service-details/ServiceFAQ";
import ServiceWorkflow from "@/components/service-details/ServiceWorkflow";
import CallToAction from "@/components/CallToAction";
import AboutWoodWork from "@/assets/images/SeperateAboutPageImages/AboutWoodWork.webp";

const WoodWork = () => {
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
          selectedService="Wood Work & Carpentry Services"
          badge="Wood Work & Carpentry Services"
          heading="Expert Woodwork & Custom Carpentry Solutions"
          description="Master craftsmen creating custom furniture, cabinetry, and woodworking solutions with precision and premium materials. From custom furniture to built-in wardrobes and kitchen cabinets, we deliver quality craftsmanship for lasting beauty."
        />
        <AboutService
        image={AboutWoodWork}
        badge="About Our Wood Work Services"
          title="Wood Work & Carpentry Services"
          description={[
            "SVRS Technical Services brings years of expertise in woodwork and carpentry to create bespoke pieces that combine traditional craftsmanship with modern design. Our skilled craftsmen work with premium wood materials to deliver furniture and woodwork solutions that stand the test of time.",
            "We specialize in custom furniture design and fabrication, built-in wardrobes, kitchen cabinets, precision joinery work, and all types of woodworking projects. Each piece is carefully crafted with attention to detail, ensuring both functionality and aesthetic appeal.",
            "Whether you need custom office furniture, residential woodwork, or commercial carpentry solutions, we work closely with you to bring your vision to life using the finest materials and time-tested techniques."
          ]}
        />
        <WhyWe
          title="Why Choose Our Wood Work Services"
          subtitle="Expert craftsmanship, premium materials, and attention to detail in every piece."
          items={[
            {
              title: "Master Craftsmen",
              description: "Our team consists of experienced woodworkers and carpenters with years of expertise in traditional and modern woodworking techniques."
            },
            {
              title: "Premium Materials",
              description: "We source only the finest wood materials, including hardwoods, engineered wood, and premium finishes to ensure durability and beauty."
            },
            {
              title: "Custom Design",
              description: "Every piece is custom-designed to fit your space, style, and functional requirements, ensuring a perfect match for your needs."
            },
            {
              title: "Precision Joinery",
              description: "Our precision joinery work ensures strong, durable connections and seamless finishes that showcase expert craftsmanship."
            },
            {
              title: "Quality Finishing",
              description: "We apply professional finishes including staining, varnishing, and painting to protect and enhance the natural beauty of the wood."
            },
            {
              title: "Timely Delivery",
              description: "We understand the importance of deadlines and ensure timely completion of all woodwork projects without compromising quality."
            }
          ]}
        />
        <ServiceWorkflow
        badge="Our Workflow"
          title="Our Wood Work & Carpentry Process"
          subtitle="From design to installation, we guide you through creating your perfect custom woodwork."
          steps={[
            {
              title: "Consultation & Design",
              description: "We discuss your requirements, take measurements, and create custom designs that match your style and functional needs."
            },
            {
              title: "Material Selection",
              description: "We help you choose the right wood type, finishes, and hardware based on your preferences, budget, and project requirements."
            },
            {
              title: "Fabrication & Crafting",
              description: "Our craftsmen begin fabrication using precision techniques, ensuring every joint, cut, and detail is executed to perfection."
            },
            {
              title: "Finishing & Quality Check",
              description: "We apply professional finishes and conduct thorough quality checks to ensure every piece meets our high standards."
            },
            {
              title: "Installation & Handover",
              description: "Our installation team carefully installs your custom woodwork, ensuring perfect fit and finish before final handover."
            }
          ]}
        />
        <ServiceFAQ
          title="Wood Work & Carpentry (FAQ's)"
          subtitle="Common questions about our woodwork and carpentry services."
          faqItems={[
            {
              id: 1,
              question: "What types of wood do you work with?",
              answer: "We work with a wide range of wood types including hardwoods (oak, teak, mahogany), softwoods, engineered wood (MDF, plywood), and exotic woods. We help you choose the best option for your project."
            },
            {
              id: 2,
              question: "How long does a custom furniture project take?",
              answer: "Timeline varies based on complexity, typically 2-6 weeks for most projects. We provide detailed timelines during consultation and keep you updated throughout the process."
            },
            {
              id: 3,
              question: "Do you provide design services?",
              answer: "Yes, our design team creates custom designs based on your requirements, space, and style preferences. We provide detailed drawings and 3D visualizations before fabrication."
            },
            {
              id: 4,
              question: "Can you match existing furniture styles?",
              answer: "Absolutely. Our craftsmen can match existing furniture styles, finishes, and details to ensure seamless integration with your current decor."
            },
            {
              id: 5,
              question: "Do you offer installation services?",
              answer: "Yes, our professional installation team handles on-site installation, ensuring perfect fit and finish. We also provide post-installation support."
            },
            {
              id: 6,
              question: "What warranty do you provide on woodwork?",
              answer: "We provide warranties on our craftsmanship and materials. Warranty periods vary based on the type of work and materials used, typically ranging from 1-3 years."
            }
          ]}
        />
        <CallToAction />
      </div>
    </>
  );
};

export default WoodWork;
