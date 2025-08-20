import { Button } from "@/components/ui/button";
import { Home, Briefcase, Award, CreditCard, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Briefcase, label: "Latest Job", path: "/jobs" },
    { icon: Award, label: "Result", path: "/results" },
    { icon: CreditCard, label: "Admit Card", path: "/admit-cards" },
    { icon: GraduationCap, label: "Admission", path: "/scholarships" }
  ];

  return (
    <div className="py-6 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center space-x-4 overflow-x-auto">
          {navItems.map((item, index) => (
            <Link key={index} to={item.path}>
              <Button
                variant={location.pathname === item.path ? "default" : "outline"}
                size="lg"
                className="flex items-center space-x-2 whitespace-nowrap"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;