import HeroSection from "./components/HeroSection";
import Second from "./components/Second";
import Third from "./components/Third";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <Second />
      <Third />
    </div>
  );
}
