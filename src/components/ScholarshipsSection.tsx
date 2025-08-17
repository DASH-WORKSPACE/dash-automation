import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RecentNotifications from "@/components/RecentNotifications";
import { 
  GraduationCap, 
  Stethoscope, 
  Building, 
  Briefcase, 
  Scale, 
  Building2, 
  University, 
  Heart,
  ChevronDown
} from "lucide-react";

interface ScholarshipCategory {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const ScholarshipsSection = () => {
  const categories: ScholarshipCategory[] = [
    {
      icon: GraduationCap,
      title: "Engineering Entrance",
      description: "& Admission",
      color: "text-blue-600"
    },
    {
      icon: Stethoscope,
      title: "NEET Entrance &",
      description: "Admission",
      color: "text-green-600"
    },
    {
      icon: Building,
      title: "Central University",
      description: "Entrance and Admission",
      color: "text-purple-600"
    },
    {
      icon: Briefcase,
      title: "Management Colleges",
      description: "Entrance and Admission",
      color: "text-orange-600"
    },
    {
      icon: Scale,
      title: "Law Colleges",
      description: "Entrance & Admission",
      color: "text-red-600"
    },
    {
      icon: Building2,
      title: "Central Government",
      description: "Scholarships",
      color: "text-indigo-600"
    },
    {
      icon: University,
      title: "State Government",
      description: "Scholarships Scheme",
      color: "text-teal-600"
    },
    {
      icon: Heart,
      title: "TATA and Private",
      description: "Scholarships",
      color: "text-pink-600"
    }
  ];

  const handleCategoryClick = (category: ScholarshipCategory) => {
    console.log(`Selected scholarship category: ${category.title}`);
  };

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Scholarships & Admission Based on Categories
          </h2>
        </div>

        <div className="lg:flex lg:gap-6 lg:items-start">
          {/* Categories Section */}
          <div className="lg:flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {categories.map((category, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary bg-exam-card"
                  onClick={() => handleCategoryClick(category)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className={`p-4 rounded-full bg-gray-100 group-hover:bg-primary/10 transition-colors`}>
                        <category.icon className={`w-8 h-8 ${category.color} group-hover:text-primary transition-colors`} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-card-foreground text-lg mb-1">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" className="flex items-center space-x-2 mx-auto">
                <ChevronDown className="w-5 h-5" />
                <span>More Options</span>
              </Button>
            </div>
          </div>

          {/* Recent Notifications Section */}
          <div className="hidden lg:block lg:w-80 lg:flex-shrink-0">
            <RecentNotifications />
          </div>
        </div>

        {/* Mobile notifications */}
        <div className="lg:hidden mt-8">
          <RecentNotifications />
        </div>
      </div>
    </div>
  );
};

export default ScholarshipsSection;