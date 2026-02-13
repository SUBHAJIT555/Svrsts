
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";
import { useNavigate } from "react-router-dom";

import CustomExhibitionStandsForTradeShows from "@/assets/images/AboutPageImages/CustomExhibitionStandsForTradeShows.webp";
import ExpertWoodworkCarpentrySolutions from "@/assets/images/AboutPageImages/ExpertWoodworkAndCarpentrySolutions.webp";
import ProfessionalEventDecorationAndStandLighting from "@/assets/images/AboutPageImages/ProfessionalEventDecorationAndLighting.webp";
import CompleteOfficeInteriorDesignAndFitOut from "@/assets/images/AboutPageImages/CompleteOfficeInteriorDesignAndFitout.webp";
import CustomFurnitureDesignAndFabrication from "@/assets/images/AboutPageImages/CustomFurnitureDesignAndFabrication.webp";
import CompleteInteriorDesignSolutions from "@/assets/images/AboutPageImages/CompleteInteriorDesignSolutions.webp";
import ProfessionalPaintingForAllSurfaces from "@/assets/images/AboutPageImages/ProfessionalPaintingforAllSurfaces.webp";
import EndToEndInteriorSolutions from "@/assets/images/AboutPageImages/End-to-EndInteriorSolutions.webp";


import Avatar1 from "@/assets/images/TestimonialImages/AnjaliMehta.webp";
import Avatar2 from "@/assets/images/TestimonialImages/DeepakSingh.webp";
import Avatar3 from "@/assets/images/TestimonialImages/FatimaAlZahra.webp";
import Avatar4 from "@/assets/images/TestimonialImages/PriyaSharma.webp";


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
                    Avatar1,
                    Avatar2,
                    Avatar3,
                    Avatar4,
                ],
                text: "Trusted by 1000+ customers.",
            }}
            programs={[
                {
                    image: CustomExhibitionStandsForTradeShows,
                    category: "Exhibition Stand Building",
                    title: "Custom Exhibition Stands for Trade Shows",
                    onClick: () => navigate("/services#exhibition-stand-building"),
                },
                {
                    image: ExpertWoodworkCarpentrySolutions,
                    category: "Wood Work",
                    title: "Expert Woodwork & Carpentry Solutions",
                    onClick: () => navigate("/services#wood-work"),
                },
                {
                    image: ProfessionalEventDecorationAndStandLighting,
                    category: "Event Decoration",
                    title: "Professional Event Decoration & Lighting",
                    onClick: () => navigate("/services#event-decoration"),
                },
                {
                    image: CompleteOfficeInteriorDesignAndFitOut,
                    category: "Office Interior",
                    title: "Complete Office Interior Design & Fit-out",
                    onClick: () => navigate("/services#office-interior"),
                },
                {
                    image: CustomFurnitureDesignAndFabrication,
                    category: "Furniture",
                    title: "Custom Furniture Design & Fabrication",
                    onClick: () => navigate("/services#furniture"),
                },
                {
                    image: CompleteInteriorDesignSolutions,
                    category: "Interior Design",
                    title: "Complete Interior Design Solutions",
                    onClick: () => navigate("/services#interior-design"),
                },
                {
                    image: ProfessionalPaintingForAllSurfaces,
                    category: "Painting Services",
                    title: "Professional Painting for All Surfaces",
                    onClick: () => navigate("/services#painting"),
                },
                {
                    image: EndToEndInteriorSolutions,
                    category: "Complete Interior Solutions",
                    title: "End-to-End Interior Solutions",
                    onClick: () => navigate("/services#complete-interior-solutions"),
                }
            ]}
        />
    );
}

