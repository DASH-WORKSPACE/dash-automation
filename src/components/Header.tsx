import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserCircle, LogIn } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground px-3 py-2 rounded-md font-bold text-xl">
              DASH
            </div>
            <div className="text-sm text-muted-foreground">
              Document Automation & Streamlined Handling
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </Button>
            <Button size="sm" className="flex items-center space-x-2">
              <UserCircle className="w-4 h-4" />
              <span>Sign-Up</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;