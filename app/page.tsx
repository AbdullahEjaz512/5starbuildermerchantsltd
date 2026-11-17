import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { DeliveryBanner } from "@/components/home/DeliveryBanner";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <DeliveryBanner />
      <CTASection />
    </>
  );
}
