import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Calendar, MapPin, Users, Clock, Filter } from "lucide-react";

const Exams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const exams = [
    {
      id: 1,
      title: "UPSC Civil Services Preliminary Examination 2025",
      category: "Civil Services",
      description: "Preliminary examination for recruitment to various Group A and Group B services",
      applicationDeadline: "2025-03-15",
      examDate: "2025-05-26",
      locations: ["Pan India"],
      eligibility: "Graduate",
      fees: "₹100",
      status: "Active",
      applyLink: "#"
    },
    {
      id: 2,
      title: "SSC Combined Graduate Level Examination 2025",
      category: "SSC",
      description: "Recruitment for Group B and C posts in various ministries",
      applicationDeadline: "2025-02-28",
      examDate: "2025-04-15",
      locations: ["All States"],
      eligibility: "Graduate",
      fees: "₹100",
      status: "Active",
      applyLink: "#"
    },
    {
      id: 3,
      title: "SBI PO Recruitment 2025",
      category: "Banking",
      description: "Probationary Officer recruitment in State Bank of India",
      applicationDeadline: "2025-02-20",
      examDate: "2025-03-30",
      locations: ["Pan India"],
      eligibility: "Graduate",
      fees: "₹750",
      status: "Active",
      applyLink: "#"
    },
    {
      id: 4,
      title: "Railway RRB NTPC 2025",
      category: "Railway",
      description: "Non-Technical Popular Categories recruitment",
      applicationDeadline: "2025-03-10",
      examDate: "2025-04-20",
      locations: ["All Zones"],
      eligibility: "12th Pass",
      fees: "₹500",
      status: "Active",
      applyLink: "#"
    },
    {
      id: 5,
      title: "IBPS PO 2025",
      category: "Banking",
      description: "Probationary Officer recruitment in public sector banks",
      applicationDeadline: "2025-02-25",
      examDate: "2025-04-10",
      locations: ["Pan India"],
      eligibility: "Graduate",
      fees: "₹850",
      status: "Active",
      applyLink: "#"
    },
    {
      id: 6,
      title: "CISF Constable Recruitment 2025",
      category: "Defence",
      description: "Constable recruitment in Central Industrial Security Force",
      applicationDeadline: "2025-03-05",
      examDate: "2025-04-25",
      locations: ["All States"],
      eligibility: "10th Pass",
      fees: "₹100",
      status: "Active",
      applyLink: "#"
    }
  ];

  const categories = ["all", "Civil Services", "SSC", "Banking", "Railway", "Defence"];

  const filteredExams = exams.filter(exam => {
    const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || exam.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Government Exams</h1>
          <p className="text-muted-foreground text-lg">
            Find and apply for the latest government job examinations
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search exams..."
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

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <Card key={exam.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {exam.category}
                  </Badge>
                  <Badge variant={exam.status === "Active" ? "default" : "destructive"}>
                    {exam.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {exam.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {exam.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Apply by: {new Date(exam.applicationDeadline).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Exam: {new Date(exam.examDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{exam.locations.join(", ")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Eligibility: {exam.eligibility}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="font-semibold text-primary">{exam.fees}</span>
                  <Button size="sm">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredExams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No exams found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exams;