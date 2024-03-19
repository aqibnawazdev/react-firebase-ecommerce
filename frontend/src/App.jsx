import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import ProductCard from "./components/ProductCard";
import SectionTitle from "./components/SectionCatTitle";
import TopBar from "./components/TopBar";
import HeroSection from "./Sections/HeroSection";
import TodayFlashSaleSection from "./Sections/TodayFlashSaleSection";

export default function App() {
  return (
    <div className="w-full">
      <TopBar />
      <Header />
      <HeroSection />
      <TodayFlashSaleSection />
    </div>
  );
}
