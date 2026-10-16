import { Hero } from "@/components/sections/hero";
import {
  BenefitsSection,
  InformationStrip,
  PromotionsSection,
  RegistrationQrSection,
  RegistrationStepsSection,
  SiteFooter,
} from "@/components/sections/landing-sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <BenefitsSection />
      <RegistrationStepsSection />
      <PromotionsSection />
      <RegistrationQrSection />
      <InformationStrip />
      <SiteFooter />
    </main>
  );
}
