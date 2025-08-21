import { Button } from "@/components/ui/button";
import { UserCircle, LogIn, Home, Briefcase, Award, CreditCard, GraduationCap, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [user, setUser] = useState<any>(null);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Briefcase, label: "Latest Job", path: "/jobs" },
    { icon: Award, label: "Result", path: "/results" },
    { icon: CreditCard, label: "Admit Card", path: "/admit-cards" },
    { icon: GraduationCap, label: "Admission", path: "/scholarships" }
  ];

  // Check if we're on the landing page
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    // Show nav only if not on landing page
    setShowNav(!isLandingPage);
  }, [isLandingPage]);

  // Check authentication status
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Listen for scroll progress from Index page
  useEffect(() => {
    const handleScrollProgress = (event: CustomEvent) => {
      const progress = event.detail;
      if (isLandingPage) {
        // Reveal only when the below nav is almost at the header
        setShowNav(progress > 0.9);
      }
    };

    window.addEventListener('scrollProgress', handleScrollProgress as EventListener);
    return () => window.removeEventListener('scrollProgress', handleScrollProgress as EventListener);
  }, [isLandingPage]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out successfully",
      description: "You have been logged out of your account.",
    });
    navigate("/");
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      showNav ? 'bg-background/0 backdrop-blur-sm shadow-lg mx-4 mt-2 rounded-lg' : 'bg-background'
    }`}>
      <div className={`container mx-auto px-4 transition-all duration-300 ${
        showNav ? 'py-0' : 'py-3'
      }`}>
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="DASH Logo" 
              className="h-10 w-auto"
            />
            <div className={`text-sm text-muted-foreground transition-all duration-300 ${
              showNav ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-xs'
            }`}>
              Document Automation & Streamlined Handling
            </div>
          </Link>

          {/* Navigation Buttons inside header (centered, subtle fade/scale) */}
          <div className={`flex items-center space-x-2 transition-all duration-500 ease-out z-10 absolute left-1/2 top-1/2 -translate-x-1/2 ${
            showNav
              ? '-translate-y-1/2 opacity-100 scale-100 pointer-events-auto'
              : '-translate-y-0 opacity-0 scale-95 pointer-events-none'
          }`}>
            {navItems.map((item, index) => (
              <Link key={index} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "outline"}
                  size="default"
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                <Link to="/dashboard" className="hidden sm:block">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <UserCircle className="w-4 h-4" />
                    <span className="hidden lg:inline">Dashboard</span>
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleSignOut} className="flex items-center space-x-2">
                  <LogOut className="w-4 h-4" />
                  <span className="hidden lg:inline">Sign Out</span>
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth" className="hidden sm:block">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <LogIn className="w-4 h-4" />
                    <span className="hidden lg:inline">Sign In</span>
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="sm" className="flex items-center space-x-2">
                    <UserCircle className="w-4 h-4" />
                    <span className="hidden lg:inline">Sign Up</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;