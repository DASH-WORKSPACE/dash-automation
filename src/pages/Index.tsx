import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import TrendingExams from "@/components/TrendingExams";
import Navigation from "@/components/Navigation";
import ExamCategories from "@/components/ExamCategories";
import RecentNotifications from "@/components/RecentNotifications";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchSection />
      <TrendingExams />
      <Navigation />
      
      <div className="relative">
        <ExamCategories />
        <div className="absolute top-0 right-0 hidden lg:block">
          <RecentNotifications />
        </div>
      </div>
      
      {/* Mobile notifications */}
      <div className="lg:hidden">
        <RecentNotifications />
      </div>
    </div>
  );
};

export default Index;
