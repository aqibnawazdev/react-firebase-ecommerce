import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import ProductCard from "./components/ProductCard";
import SectionTitle from "./components/SectionCatTitle";
import TopBar from "./components/TopBar";
import AuthLogin from "./pages/AuthLogin";
import AuthRegister from "./pages/AuthRegister";
import ProductDetails from "./pages/ProductDetails";
import CategorySection from "./sections/CategorySection";
import HeroSection from "./sections/HeroSection";
import TodayFlashSaleSection from "./sections/TodayFlashSaleSection";
export default function App() {
  return (
    <div className="w-full">
      <TopBar />
      <Header />
      {/* <HeroSection />
      <TodayFlashSaleSection />
      <CategorySection /> */}
      {/* <AuthRegister /> */}
      {/* <AuthLogin /> */}
      <ProductDetails />
    </div>
  );
}
