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
      
      <div className="lg:flex lg:gap-6 lg:items-start">
        <div className="lg:flex-1">
          <ExamCategories />
        </div>
        <div className="hidden lg:block lg:w-80 lg:flex-shrink-0">
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
