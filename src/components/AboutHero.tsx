
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";
import { useNavigate } from "react-router-dom";

export default function AboutHero() {

    const navigate = useNavigate();

    return (
        <PulseFitHero
            
            title="Who We Are & What We Stand For"
            subtitle="SVRS Technical Services delivers excellence in exhibition stand building, event decoration, office interiors, custom furniture, woodwork, and comprehensive interior solutions across Dubai & UAE. Your trusted partner for transforming spaces with expert craftsmanship and innovative design."
            primaryAction={{
                label: "Get Free Consultation",
                onClick: () => navigate("/contact-us"),
            }}
            secondaryAction={{
                label: "Explore Our Services",
                onClick: () => navigate("/services"),
            }}
            disclaimer="* Expert craftsmanship with professional service across Dubai & UAE."
            socialProof={{
                avatars: [
                    "https://i.pravatar.cc/150?img=1",
                    "https://i.pravatar.cc/150?img=2",
                    "https://i.pravatar.cc/150?img=3",
                    "https://i.pravatar.cc/150?img=4",
                ],
                text: "Trusted by 1000+ customers.",
            }}
            programs={[
                {
                    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
                    category: "Exhibition Stand Building",
                    title: "Custom Exhibition Stands for Trade Shows",
                    onClick: () => navigate("/services#exhibition-stand-building"),
                },
                {
                    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop",
                    category: "Wood Work",
                    title: "Expert Woodwork & Carpentry Solutions",
                    onClick: () => navigate("/services#wood-work"),
                },
                {
                    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
                    category: "Event Decoration",
                    title: "Professional Event Decoration & Lighting",
                    onClick: () => navigate("/services#event-decoration"),
                },
                {
                    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
                    category: "Office Interior",
                    title: "Complete Office Interior Design & Fit-out",
                    onClick: () => navigate("/services#office-interior"),
                },
                {
                    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
                    category: "Furniture",
                    title: "Custom Furniture Design & Fabrication",
                    onClick: () => navigate("/services#furniture"),
                },
                {
                    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
                    category: "Interior Design",
                    title: "Complete Interior Design Solutions",
                    onClick: () => navigate("/services#interior-design"),
                },
                {
                    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
                    category: "Painting Services",
                    title: "Professional Painting for All Surfaces",
                    onClick: () => navigate("/services#painting"),
                },
                {
                    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
                    category: "Complete Interior Solutions",
                    title: "End-to-End Interior Solutions",
                    onClick: () => navigate("/services#complete-interior-solutions"),
                }
            ]}
        />
    );
}

