import { Demo } from "@/components/construction/demo";
import { FeaturesSection } from "@/components/construction/features";
import Main from "@/components/construction/main";
import { Navbar } from "@/components/home/navbar";

export default function Page() {
    return <div>
        <Navbar />
        <Main />
        <FeaturesSection />
        <Demo />
    </div>
}