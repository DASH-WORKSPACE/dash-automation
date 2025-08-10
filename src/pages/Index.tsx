import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import TrendingExams from "@/components/TrendingExams";
import Navigation from "@/components/Navigation";
import ExamCategories from "@/components/ExamCategories";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchSection />
      <TrendingExams />
      <Navigation />
      
      <ExamCategories />
    </div>
  );
};

export default Index;
