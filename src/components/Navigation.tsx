import { Button } from "@/components/ui/button";
import { Home, Briefcase, Award, CreditCard, GraduationCap } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Briefcase, label: "Latest Job" },
    { icon: Award, label: "Result" },
    { icon: CreditCard, label: "Admit Card" },
    { icon: GraduationCap, label: "Admission" }
  ];

  return (
    <div className="py-6 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center space-x-4 overflow-x-auto">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "outline"}
              size="lg"
              className="flex items-center space-x-2 whitespace-nowrap"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;