import { Hero } from "@/components/sections/hero";
import { LandingAnimations } from "@/components/providers/landing-animations";
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
      <LandingAnimations />
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
