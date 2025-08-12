import { Header } from "@/components/Header";
import { DiscoverSection } from "@/components/DiscoverSection";
import { TrafficSection } from "@/components/TrafficSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Header />
      <DiscoverSection />
      <TrafficSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
