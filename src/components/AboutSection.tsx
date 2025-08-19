import { Card, CardContent } from "@/components/ui/card";
import { FileText, Smartphone, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Smart Form Management",
      description: "DASH automates form-filling, captcha-solving, and integrates with DigiLocker for easy document management."
    },
    {
      icon: Smartphone,
      title: "Seamless Access",
      description: "It also enables seamless access to phone files from a laptop, simplifying digital tasks."
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "Streamline your workflow and save valuable time with automated processes and intelligent features."
    }
  ];

  const newFeatures = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced insights and performance tracking for better decision making."
    },
    {
      title: "Enhanced Security",
      description: "Multi-layer security protocols to protect your sensitive data and documents."
    },
    {
      title: "Mobile App Integration",
      description: "Seamless synchronization between desktop and mobile applications."
    },
    {
      title: "Cloud Storage Expansion",
      description: "Increased storage capacity with faster sync speeds and reliability."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* About DASH Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-stretch">
            {/* DASH Info Card */}
            <div className="lg:col-span-2">
              <Card className="h-full bg-primary/5">
                <CardContent className="p-10 flex flex-col justify-center h-full min-h-[320px]">
                  <h2 className="text-5xl font-bold text-primary mb-6">
                    D<span className="text-orange-500">A</span>
                    <span className="text-green-600">S</span>
                    <span className="text-blue-600">H</span>
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    DASH automates form-filling, captcha-solving, and integrates with DigiLocker for 
                    easy document management. It also enables seamless access to phone files from a 
                    laptop, simplifying digital tasks and saving time.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Feature Cards */}
            <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 min-h-[320px]">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* New in DASH Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-stretch">
            {/* Section Title */}
            <div className="lg:col-span-1">
              <div className="h-full flex flex-col justify-center min-h-[280px]">
                <h2 className="text-4xl font-bold text-foreground mb-2">
                  New In
                </h2>
                <h2 className="text-4xl font-bold text-primary">
                  D<span className="text-orange-500">A</span>
                  <span className="text-green-600">S</span>
                  <span className="text-blue-600">H</span>
                </h2>
              </div>
            </div>

            {/* New Feature Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {newFeatures.map((feature, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 min-h-[280px]">
                  <CardContent className="p-8 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <span className="text-sm text-primary font-medium">Coming Soon</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;