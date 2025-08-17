import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Stethoscope, 
  Building, 
  Briefcase, 
  Scale, 
  Building2, 
  University, 
  Heart,
  ArrowDown
} from "lucide-react";
import { useState } from "react";

interface ScholarshipCategory {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const ScholarshipsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const scholarshipCategories: ScholarshipCategory[] = [
    {
      icon: GraduationCap,
      title: "Engineering Entrance & Admission",
      description: "JEE Main, JEE Advanced, BITSAT, VITEEE, and other engineering entrance scholarships",
      color: "text-blue-600"
    },
    {
      icon: Stethoscope,
      title: "NEET Entrance & Admission",
      description: "Medical and dental college admissions, AIIMS, JIPMER scholarship opportunities",
      color: "text-green-600"
    },
    {
      icon: Building,
      title: "Central University Entrance and Admission",
      description: "CUET, BHU, JMI, AMU and other central university admission scholarships",
      color: "text-purple-600"
    },
    {
      icon: Briefcase,
      title: "Management Colleges Entrance and Admission",
      description: "CAT, XAT, MAT, SNAP and MBA college admission scholarships",
      color: "text-orange-600"
    },
    {
      icon: Scale,
      title: "Law Colleges Entrance & Admission",
      description: "CLAT, AILET, LSAT and law school admission scholarships",
      color: "text-red-600"
    },
    {
      icon: Building2,
      title: "Central Government Scholarships",
      description: "NSP, Post Matric, Pre Matric, Merit Cum Means and other central schemes",
      color: "text-indigo-600"
    },
    {
      icon: University,
      title: "State Government Scholarships Scheme",
      description: "State-wise scholarship schemes for various categories and courses",
      color: "text-teal-600"
    },
    {
      icon: Heart,
      title: "TATA and Private Scholarships",
      description: "Corporate scholarships, trust funds, and private foundation scholarships",
      color: "text-pink-600"
    }
  ];

  const displayedCategories = showAll ? scholarshipCategories : scholarshipCategories.slice(0, 6);

  const handleCategoryClick = (category: ScholarshipCategory) => {
    console.log(`Selected scholarship category: ${category.title}`);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Scholarships & Admission Based on Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore scholarship opportunities and admission processes across various educational categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
                onClick={() => handleCategoryClick(category)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent 
                      className={`h-12 w-12 mx-auto ${category.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 font-semibold"
          >
            {showAll ? "Show Less" : "More Options"}
            <ArrowDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsSection;