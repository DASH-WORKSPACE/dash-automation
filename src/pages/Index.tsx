import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import SearchSection from "@/components/SearchSection";
import TrendingExams from "@/components/TrendingExams";
import Navigation from "@/components/Navigation";
import ExamCategories from "@/components/ExamCategories";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <SearchSection />
      <TrendingExams />
      <Navigation />
      
      <ExamCategories />
    </div>
  );
};

export default Index;
