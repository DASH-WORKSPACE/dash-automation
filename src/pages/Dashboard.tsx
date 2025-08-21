import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, BookOpen, Briefcase, Award, Calendar, LogOut, Bell, Settings } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }
      
      setUser(session.user);
      setLoading(false);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out successfully",
      description: "You have been logged out of your account.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  const quickActions = [
    { icon: BookOpen, label: "Browse Exams", path: "/exams", color: "bg-blue-50 text-blue-600" },
    { icon: Briefcase, label: "Find Jobs", path: "/jobs", color: "bg-green-50 text-green-600" },
    { icon: Award, label: "Check Results", path: "/results", color: "bg-orange-50 text-orange-600" },
    { icon: Calendar, label: "Admit Cards", path: "/admit-cards", color: "bg-purple-50 text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <div className="bg-background shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-8 h-8 text-primary" />
                <div>
                  <h1 className="text-xl font-semibold">Welcome back!</h1>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {/* Welcome Card */}
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Dashboard</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Your personalized education and career hub
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Active User
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Member since {new Date(user?.created_at).toLocaleDateString()}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-200" onClick={() => navigate(action.path)}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-medium">{action.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Your latest exam and job applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">UPSC Civil Services</p>
                      <p className="text-sm text-muted-foreground">Applied 2 days ago</p>
                    </div>
                    <Badge>Pending</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">SSC CGL 2024</p>
                      <p className="text-sm text-muted-foreground">Applied 1 week ago</p>
                    </div>
                    <Badge variant="secondary">Under Review</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Important dates to remember</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div>
                      <p className="font-medium">GATE 2025 Registration</p>
                      <p className="text-sm text-muted-foreground">Ends in 5 days</p>
                    </div>
                    <Calendar className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div>
                      <p className="font-medium">JEE Main Admit Card</p>
                      <p className="text-sm text-muted-foreground">Available in 10 days</p>
                    </div>
                    <Calendar className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;