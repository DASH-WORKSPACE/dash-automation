import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Calendar, MapPin, Clock, Filter, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AdmitCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const admitCards = [
    {
      id: 1,
      title: "UPSC Civil Services Mains Admit Card 2024",
      category: "Civil Services",
      examName: "Civil Services Main Examination 2024",
      releaseDate: "2024-12-15",
      examDate: "2025-01-15 to 2025-01-23",
      downloadStartDate: "2024-12-15",
      examCenter: "Multiple Cities",
      instruction: "Report 30 minutes before exam time",
      status: "Available",
      downloadLink: "#",
      isUrgent: false
    },
    {
      id: 2,
      title: "SSC CGL Tier-2 Admit Card 2024",
      category: "SSC",
      examName: "Combined Graduate Level Tier-2 Examination",
      releaseDate: "2025-01-20",
      examDate: "2025-02-15 to 2025-02-18",
      downloadStartDate: "2025-01-20",
      examCenter: "All Regional Centers",
      instruction: "Bring original photo ID proof",
      status: "Coming Soon",
      downloadLink: "#",
      isUrgent: true
    },
    {
      id: 3,
      title: "SBI Clerk Preliminary Admit Card 2025",
      category: "Banking",
      examName: "Junior Associate Preliminary Examination",
      releaseDate: "2025-01-10",
      examDate: "2025-02-01 to 2025-02-07",
      downloadStartDate: "2025-01-10",
      examCenter: "Pan India",
      instruction: "Biometric verification required",
      status: "Available",
      downloadLink: "#",
      isUrgent: false
    },
    {
      id: 4,
      title: "Railway RRB Group D Admit Card 2025",
      category: "Railway",
      examName: "Railway Recruitment Board Group D",
      releaseDate: "2025-01-25",
      examDate: "2025-02-20 to 2025-03-15",
      downloadStartDate: "2025-01-25",
      examCenter: "Zonal Railway Centers",
      instruction: "COVID-19 guidelines to be followed",
      status: "Coming Soon",
      downloadLink: "#",
      isUrgent: true
    },
    {
      id: 5,
      title: "IBPS Clerk Mains Admit Card 2024",
      category: "Banking",
      examName: "Clerk Main Examination",
      releaseDate: "2024-12-28",
      examDate: "2025-01-30",
      downloadStartDate: "2024-12-28",
      examCenter: "Selected Test Centers",
      instruction: "Calculator not allowed",
      status: "Available",
      downloadLink: "#",
      isUrgent: false
    },
    {
      id: 6,
      title: "CISF Head Constable Admit Card 2025",
      category: "Defence",
      examName: "Head Constable Recruitment Examination",
      releaseDate: "2025-02-01",
      examDate: "2025-02-25",
      downloadStartDate: "2025-02-01",
      examCenter: "Multiple Locations",
      instruction: "Physical fitness test after written exam",
      status: "Coming Soon",
      downloadLink: "#",
      isUrgent: false
    }
  ];

  const categories = ["all", "Civil Services", "SSC", "Banking", "Railway", "Defence"];

  const filteredAdmitCards = admitCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.examName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || card.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const urgentCards = filteredAdmitCards.filter(card => card.isUrgent);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Admit Cards</h1>
          <p className="text-muted-foreground text-lg">
            Download your admit cards for upcoming government examinations
          </p>
        </div>

        {/* Urgent Notice */}
        {urgentCards.length > 0 && (
          <Alert className="mb-6 border-orange-500 bg-orange-50">
            <AlertCircle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <strong>Urgent:</strong> {urgentCards.length} admit card(s) releasing soon. Don't miss the download window!
            </AlertDescription>
          </Alert>
        )}

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search admit cards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Admit Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAdmitCards.map((card) => (
            <Card key={card.id} className={`hover:shadow-lg transition-shadow duration-300 ${card.isUrgent ? 'border-orange-500 shadow-orange-100' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">
                    {card.category}
                  </Badge>
                  <div className="flex gap-2">
                    {card.isUrgent && (
                      <Badge variant="destructive" className="text-xs">
                        Urgent
                      </Badge>
                    )}
                    <Badge variant={card.status === "Available" ? "default" : "outline"}>
                      {card.status}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {card.title}
                </CardTitle>
                <p className="text-muted-foreground font-medium">
                  {card.examName}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Release Date: {new Date(card.releaseDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Exam Date: {card.examDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Centers: {card.examCenter}</span>
                  </div>
                </div>

                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-1">Important Instructions:</p>
                  <p className="text-xs text-muted-foreground">{card.instruction}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-sm text-muted-foreground">
                    Download from: {new Date(card.downloadStartDate).toLocaleDateString()}
                  </span>
                  <Button 
                    size="sm" 
                    disabled={card.status !== "Available"}
                    className={card.status === "Available" ? "" : "opacity-50 cursor-not-allowed"}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {card.status === "Available" ? "Download" : "Not Available"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAdmitCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No admit cards found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmitCards;