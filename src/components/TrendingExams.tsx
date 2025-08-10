import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const TrendingExams = () => {
  const trendingItems = [
    "CISF Vacancy",
    "Railway Vacancy", 
    "NEET",
    "CTET",
    "Railway RRB",
    "SSC CGL Vacancy",
    "NDA"
  ];

  return (
    <div className="py-6 px-4">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4 justify-center overflow-x-auto">
          <div className="flex items-center space-x-2 text-primary font-medium whitespace-nowrap">
            <TrendingUp className="w-5 h-5" />
            <span>Trending:</span>
          </div>
          {trendingItems.map((item, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="whitespace-nowrap hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingExams;