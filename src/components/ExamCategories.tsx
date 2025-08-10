import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Users, 
  Train, 
  Building2, 
  Flag, 
  BookOpen, 
  Scale, 
  Calculator,
  ChevronDown
} from "lucide-react";

interface ExamCategory {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const ExamCategories = () => {
  const categories: ExamCategory[] = [
    {
      icon: Shield,
      title: "Defence Recruitments",
      description: "& Exams",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Social Service &",
      description: "Commission SSC Exams",
      color: "text-red-600"
    },
    {
      icon: Train,
      title: "Railway RRB",
      description: "Recruitments & Exams",
      color: "text-green-600"
    },
    {
      icon: Building2,
      title: "Banking PO, Clerks",
      description: "Job Exams",
      color: "text-purple-600"
    },
    {
      icon: Flag,
      title: "Civil Services",
      description: "Examinations",
      color: "text-indigo-600"
    },
    {
      icon: BookOpen,
      title: "Teaching Exams",
      description: "",
      color: "text-orange-600"
    },
    {
      icon: Scale,
      title: "Judicial Jobs",
      description: "Exams",
      color: "text-teal-600"
    },
    {
      icon: Calculator,
      title: "Accounting Jobs",
      description: "Recruitment",
      color: "text-pink-600"
    }
  ];

  const handleCategoryClick = (category: ExamCategory) => {
    // This would navigate to exam selection and auto-fill form
    console.log(`Selected category: ${category.title}`);
  };

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Exams Based on Categories
          </h2>
        </div>

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
            <span>More Exams</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamCategories;