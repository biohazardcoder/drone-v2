import { ConstructionWorkflow } from "@/components/home/construction";
import HowItWorks from "@/components/home/how-it-works";
import { IndustriesSection } from "@/components/home/industries";
import LearnSection from "@/components/home/learn";
import { Main } from "@/components/home/main";
import { Navbar } from "@/components/home/navbar";
import QuoteSection from "@/components/home/quote";
import RequestDemoPage from "@/components/home/request";
import { TrustedBy } from "@/components/home/trustedby";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <TrustedBy />
      <IndustriesSection />
      <ConstructionWorkflow />
      <QuoteSection />
      <HowItWorks />
      <LearnSection />
      <RequestDemoPage />
    </div>
  );
}
