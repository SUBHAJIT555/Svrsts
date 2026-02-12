import ServiceDetailHero from "@/components/service-details/ServiceDetailHero";
import AboutService from "@/components/service-details/AboutService";
import WhyWe from "@/components/service-details/WhyWe";
import ServiceFAQ from "@/components/service-details/ServiceFAQ";
import ServiceWorkflow from "@/components/service-details/ServiceWorkflow";
import CallToAction from "@/components/CallToAction";

const EventDecoration = () => {
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
        selectedService="Event Decoration & Lighting Services"
          badge="Event Decoration & Lighting Services"
          heading="Stunning Event Decoration That Creates Memorable Experiences"
          description="Transform your events into unforgettable experiences with our professional event decoration and strategic lighting design services. We create visually stunning environments that enhance your brand presence and captivate your audience."
        />
        <AboutService
        badge="About Our Event Decoration Services"
          title="Event Decoration & Lighting Services"
          description={[
            "SVRS Technical Services specializes in creating memorable event experiences through expert decoration and strategic lighting design. Our team combines creative vision with technical expertise to transform venues into stunning spaces that reflect your brand and create lasting impressions.",
            "We handle all aspects of event decoration including theme design, floral arrangements, fabric draping, stage design, backdrop creation, and comprehensive lighting solutions. Our services cover corporate events, trade shows, product launches, celebrations, and special occasions.",
            "From concept to execution, we work closely with you to understand your vision, brand identity, and event objectives, ensuring every detail contributes to creating an impactful and memorable experience for your guests."
          ]}
        />
        <WhyWe
          title="Why Choose Our Event Decoration Services"
          subtitle="Creative design, professional execution, and attention to detail for unforgettable events."
          items={[
            {
              title: "Creative Design Team",
              description: "Our experienced designers create unique, theme-based decoration concepts that align with your brand and event objectives."
            },
            {
              title: "Strategic Lighting Design",
              description: "We use professional lighting techniques to enhance ambiance, highlight key areas, and create dramatic visual effects."
            },
            {
              title: "Premium Materials & Props",
              description: "We source high-quality decoration materials, props, and floral arrangements to ensure your event looks exceptional."
            },
            {
              title: "Complete Event Solutions",
              description: "From stage design to venue transformation, we provide comprehensive decoration services covering all aspects of your event."
            },
            {
              title: "On-Time Setup & Breakdown",
              description: "Our professional team ensures timely setup before your event and efficient breakdown afterward, respecting venue schedules."
            },
            {
              title: "Budget-Conscious Solutions",
              description: "We work within your budget to deliver maximum impact, offering creative solutions that maximize value without compromising quality."
            }
          ]}
        />
        <ServiceWorkflow
        badge="Our Systematic Workflow"
          title="Our Event Decoration & Lighting Process"
          subtitle="From concept to execution, we bring your event vision to life."
          steps={[
            {
              title: "Event Briefing & Concept Design",
              description: "We discuss your event objectives, theme, venue, and budget to create a comprehensive decoration concept that aligns with your vision."
            },
            {
              title: "Design Development & Approval",
              description: "Our design team develops detailed decoration plans, including layouts, color schemes, and material selections for your approval."
            },
            {
              title: "Material Sourcing & Preparation",
              description: "We source premium materials, props, and floral arrangements, and prepare all decoration elements in advance of your event."
            },
            {
              title: "On-Site Installation",
              description: "Our professional team handles on-site installation, ensuring every decoration element is perfectly placed and your venue is transformed on schedule."
            },
            {
              title: "Event Support & Breakdown",
              description: "We provide on-site support during your event and handle professional breakdown and cleanup after the event concludes."
            }
          ]}
        />
        <ServiceFAQ
          title="Event Decoration & Lighting (FAQ's)"
          subtitle="Common questions about our event decoration and lighting services."
          faqItems={[
            {
              id: 1,
              question: "What types of events do you decorate?",
              answer: "We decorate all types of events including corporate events, trade shows, product launches, weddings, celebrations, conferences, and special occasions. We adapt our services to match your event type and requirements."
            },
            {
              id: 2,
              question: "Do you provide lighting design services?",
              answer: "Yes, we provide comprehensive lighting design services including ambient lighting, accent lighting, stage lighting, and special effects lighting to enhance your event atmosphere."
            },
            {
              id: 3,
              question: "How far in advance should I book event decoration services?",
              answer: "We recommend booking at least 2-4 weeks in advance, though we can accommodate shorter timelines for smaller events. Early booking ensures better availability and allows time for custom design work."
            },
            {
              id: 4,
              question: "Do you work with event planners?",
              answer: "Yes, we frequently collaborate with event planners and coordinators to ensure seamless integration of decoration services with overall event planning."
            },
            {
              id: 5,
              question: "Can you match specific themes or color schemes?",
              answer: "Absolutely. We work closely with you to match your specific theme, color scheme, and brand guidelines, ensuring your event decoration perfectly reflects your vision."
            },
            {
              id: 6,
              question: "What is included in event decoration services?",
              answer: "Our services include concept design, material sourcing, on-site installation, lighting setup, event support, and post-event breakdown. Specific inclusions depend on your event requirements."
            }
          ]}
        />
        <CallToAction />
      </div>
    </>
  );
};

export default EventDecoration;
