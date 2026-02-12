import ServiceDetailHero from "@/components/service-details/ServiceDetailHero";
import AboutService from "@/components/service-details/AboutService";
import WhyWe from "@/components/service-details/WhyWe";
import ServiceFAQ from "@/components/service-details/ServiceFAQ";
import ServiceWorkflow from "@/components/service-details/ServiceWorkflow";
import CallToAction from "@/components/CallToAction";

const CompleteInteriorSolutions = () => {
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
        selectedService="Complete Interior Solutions"
          badge="Complete Interior Solutions"
          heading="End-to-End Interior Solutions From Concept to Completion"
          description="Comprehensive interior solutions that handle every aspect of your project. From design to installation, we provide complete interior services including design, furniture, woodwork, painting, and project management for seamless execution."
        />
        <AboutService
        badge="About Our Complete Interior Solutions "
          title="Complete Interior Solutions For Your Home & Office"
          description={[
            "SVRS Technical Services offers comprehensive interior solutions that cover every aspect of your interior project. Our complete service approach means you have a single point of contact for design, furniture, woodwork, painting, and all interior work, ensuring seamless coordination and execution.",
            "We handle everything from initial design concepts to final installation, including space planning, material selection, custom furniture fabrication, woodwork, painting, lighting, and complete project management. This integrated approach ensures consistency, quality, and timely completion.",
            "Whether you're renovating a home, office, or commercial space, our complete interior solutions eliminate the hassle of coordinating multiple contractors, ensuring your project is executed smoothly from start to finish."
          ]}
        />
        <WhyWe
          title="Why Choose Our Complete Interior Solutions"
          subtitle="One-stop service, seamless coordination, and comprehensive solutions for all your interior needs."
          items={[
            {
              title: "Single Point of Contact",
              description: "One team handles everything from design to installation, eliminating the need to coordinate multiple contractors and ensuring seamless communication."
            },
            {
              title: "Integrated Design & Execution",
              description: "Our integrated approach ensures design concepts are perfectly executed, with all elements working together harmoniously."
            },
            {
              title: "Comprehensive Services",
              description: "We provide all interior services including design, furniture, woodwork, painting, lighting, and project management under one roof."
            },
            {
              title: "Quality Consistency",
              description: "Working with one team ensures consistent quality across all aspects of your project, from design to final finishes."
            },
            {
              title: "Efficient Project Management",
              description: "Our project managers coordinate all aspects of your project, ensuring timely completion and minimizing delays."
            },
            {
              title: "Cost Efficiency",
              description: "Our comprehensive approach often results in cost savings compared to hiring multiple separate contractors, while ensuring better coordination."
            }
          ]}
        />
        <ServiceWorkflow
        badge="Our Systematic Workflow"
          title="Our Complete Interior Solutions Process For Your Home & Office"
          subtitle="From initial concept to final handover, we manage every aspect of your interior project."
          steps={[
            {
              title: "Initial Consultation & Planning",
              description: "We discuss your vision, requirements, budget, and timeline to create a comprehensive project plan covering all aspects of your interior project."
            },
            {
              title: "Design Development & Approval",
              description: "We develop detailed designs and present them for your approval, coordinating all preparations for seamless execution."
            },
            {
              title: "Execution & Installation",
              description: "Our skilled teams execute all work including furniture fabrication, woodwork, painting, lighting, and installation according to approved designs."
            },
            {
              title: "Quality Control & Finishing",
              description: "We conduct quality checks throughout execution and complete final finishing touches to ensure everything meets our high standards."
            },
            {
              title: "Final Inspection & Handover",
              description: "We conduct comprehensive final inspections and walkthroughs before handover, ensuring your complete satisfaction with the finished project."
            }
          ]}
        />
        <ServiceFAQ
          title="Complete Interior Solutions For Your Home & Office (FAQ's)"
          subtitle="Common questions about our comprehensive interior solutions."
          faqItems={[
            {
              id: 1,
              question: "What services are included in complete interior solutions?",
              answer: "Our complete solutions include interior design, space planning, custom furniture design and fabrication, woodwork, painting, lighting design, flooring, and complete project management."
            },
            {
              id: 2,
              question: "How does the complete solution approach benefit me?",
              answer: "You benefit from seamless coordination, consistent quality, single point of contact, better cost efficiency, and reduced hassle compared to coordinating multiple contractors."
            },
            {
              id: 3,
              question: "Can you handle both residential and commercial projects?",
              answer: "Yes, we handle complete interior solutions for residential homes, offices, commercial spaces, retail stores, and hospitality venues. We adapt our approach to match each project type."
            },
            {
              id: 4,
              question: "How long does a complete interior project take?",
              answer: "Timeline varies based on scope and size, typically 8-20 weeks for most projects. We provide detailed timelines during planning and keep you updated throughout."
            },
            {
              id: 5,
              question: "Do you provide 3D visualizations?",
              answer: "Yes, we provide detailed 3D visualizations and renderings so you can see exactly how your complete interior will look before work begins."
            },
            {
              id: 6,
              question: "What is included in project management?",
              answer: "Our project management includes scheduling, coordination, quality control, progress updates, problem-solving, and ensuring timely completion of all project aspects."
            }
          ]}
        />
        <CallToAction />
      </div>
    </>
  );
};

export default CompleteInteriorSolutions;
