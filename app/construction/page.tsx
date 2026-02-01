import { Demo } from "@/components/construction/demo";
import { FeaturesSection } from "@/components/construction/features";
import GroundAerialSteps from "@/components/construction/ground";
import Main from "@/components/construction/main";
import { ProjectSpotlight } from "@/components/construction/spotlight";
import TestimonialHero from "@/components/construction/testimonial";
import { Navbar } from "@/components/home/navbar";

export default function Page() {
    return <div>
        <Navbar />
        <Main />
        <FeaturesSection />
        <Demo />
        <GroundAerialSteps />
        <TestimonialHero />
        <ProjectSpotlight />
    </div>
}