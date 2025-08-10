import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const RecentNotifications = () => {
  const notifications = [
    "Army NCC Special Entry 57th Batch.",
    "RPSC geologist Assistant.",
    "Indian Bank Apprentice.",
    "UPUMS Multipost Online Form 2024.",
    "ITBP Constable Kitchen Service.",
    "Airforce Agniveer Non Combatant Recruitment.",
    "Jharkand TET JHTET 2024.",
    "CISF Constable Form"
  ];

  return (
    <div className="py-8 px-4">
      <div className="w-full">
        <div className="max-w-sm mx-auto lg:mx-0">
          <Card className="bg-exam-card border-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Clock className="w-5 h-5 text-primary" />
                <span>Recent Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-card-foreground hover:text-primary cursor-pointer transition-colors">
                    {notification}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecentNotifications;