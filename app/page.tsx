import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { DeliveryBanner } from "@/components/home/DeliveryBanner";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <GalleryPreview />
      <ServicesPreview />
      <DeliveryBanner />
      <CTASection />
    </>
  );
}
