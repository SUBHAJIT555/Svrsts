import ServiceDetailHero from "@/components/service-details/ServiceDetailHero";
import AboutService from "@/components/service-details/AboutService";
import WhyWe from "@/components/service-details/WhyWe";
import ServiceFAQ from "@/components/service-details/ServiceFAQ";
import ServiceWorkflow from "@/components/service-details/ServiceWorkflow";
import CallToAction from "@/components/CallToAction";
import AboutOfficeInterior from "@/assets/images/SeperateAboutPageImages/AboutOfficeInterior.webp";

const OfficeInterior = () => {
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
        selectedService="Office Interior Design & Fit-Out Services"
          badge="Office Interior Design & Fit-Out Services"
          heading="Transform Your Workspace Into a Productive Environment"
          description="Create inspiring office spaces that boost productivity and reflect your company culture. Our comprehensive office interior design and fit-out services combine functionality with modern aesthetics to create work environments that employees love."
        />
        <AboutService
        image={AboutOfficeInterior}
        badge="About Our Office Interior Services"
          title="Office Interior Design & Fit-Out Services"
          description={[
            "SVRS Technical Services specializes in creating functional, inspiring office environments that enhance productivity and reflect your company's brand identity. Our comprehensive office interior services cover everything from space planning and design to complete fit-out and installation.",
            "We understand that office spaces need to balance functionality, aesthetics, and employee well-being. Our design team creates layouts that optimize workflow, incorporate modern workplace trends, and create environments that attract and retain talent.",
            "From small office renovations to complete corporate fit-outs, we handle all aspects including space planning, furniture selection, lighting design, flooring, wall treatments, and complete project management to ensure seamless execution."
          ]}
        />
        <WhyWe
          title="Why Choose Our Office Interior Services"
          subtitle="Expert design, quality execution, and spaces that inspire productivity and collaboration."
          items={[
            {
              title: "Space Planning Expertise",
              description: "Our designers optimize your office layout for maximum efficiency, workflow, and employee comfort, considering modern workplace trends."
            },
            {
              title: "Brand Integration",
              description: "We incorporate your company's brand identity, colors, and culture into the design, creating spaces that reflect your organization's values."
            },
            {
              title: "Quality Fit-Out",
              description: "Our skilled team ensures high-quality installation of all interior elements, from furniture to finishes, meeting the highest standards."
            },
            {
              title: "Project Management",
              description: "We handle complete project management, coordinating all aspects of the fit-out to ensure timely completion with minimal disruption to your business."
            },
            {
              title: "Modern Workplace Solutions",
              description: "We incorporate modern workplace solutions including flexible workspaces, collaboration areas, and wellness-focused design elements."
            },
            {
              title: "Budget Management",
              description: "We work within your budget to deliver maximum value, providing cost-effective solutions without compromising on quality or design."
            }
          ]}
        />
        <ServiceWorkflow
        badge="Our Systematic Workflow"
          title="Our Office Interior Design & Fit-Out Process"
          subtitle="From concept to completion, we transform your office space step by step."
          steps={[
            {
              title: "Consultation & Space Analysis",
              description: "We analyze your current space, understand your requirements, company culture, and functional needs to create a comprehensive design brief."
            },
            {
              title: "Design Development",
              description: "Our design team creates detailed layouts, 3D visualizations, and material selections that optimize your space and reflect your brand."
            },
            {
              title: "Approval & Planning",
              description: "We present designs for approval and create detailed project plans, timelines, and budgets before beginning any work."
            },
            {
              title: "Fit-Out & Installation",
              description: "Our skilled team handles all fit-out work including furniture installation, flooring, lighting, wall treatments, and final finishes."
            },
            {
              title: "Final Inspection & Handover",
              description: "We conduct thorough quality checks and final inspections before handover, ensuring everything meets our high standards and your expectations."
            }
          ]}
        />
        <ServiceFAQ
          title="Office Interior Design & Fit-Out (FAQ's)"
          subtitle="Common questions about our office interior design and fit-out services."
          faqItems={[
            {
              id: 1,
              question: "How long does an office fit-out project take?",
              answer: "Timeline varies based on scope and size, typically 4-12 weeks for most projects. We provide detailed timelines during planning and work to minimize business disruption."
            },
            {
              id: 2,
              question: "Do you provide 3D visualizations?",
              answer: "Yes, we provide detailed 3D visualizations and renderings so you can see exactly how your office will look before work begins. This helps ensure your vision is perfectly captured."
            },
            {
              id: 3,
              question: "Can you work around our business operations?",
              answer: "Yes, we plan our work to minimize disruption to your business operations. We can work in phases or during off-hours to ensure continuity of your business."
            },
            {
              id: 4,
              question: "Do you handle furniture procurement?",
              answer: "Yes, we can source and procure office furniture, or work with your existing furniture. We help select furniture that matches your design and functional requirements."
            },
            {
              id: 5,
              question: "What services are included in office fit-out?",
              answer: "Our services include space planning, design, furniture selection, flooring, lighting, wall treatments, electrical work, painting, and complete project management."
            },
            {
              id: 6,
              question: "Do you provide post-completion support?",
              answer: "Yes, we provide post-completion support including warranty services, maintenance guidance, and assistance with any adjustments or modifications needed."
            }
          ]}
        />
        <CallToAction />
      </div>
    </>
  );
};

export default OfficeInterior;
