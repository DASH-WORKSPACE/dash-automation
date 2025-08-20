import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Calendar, IndianRupee, GraduationCap, Users, Filter } from "lucide-react";

const Scholarships = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const scholarships = [
    {
      id: 1,
      title: "National Scholarship Portal - Merit Cum Means",
      type: "Government",
      provider: "Ministry of Education",
      description: "Merit cum means scholarship for students belonging to minority communities",
      amount: "₹20,000 - ₹50,000 per year",
      lastDate: "2025-03-31",
      eligibility: "Class 10th pass with 50% marks, Family income < ₹2.5 lakh",
      benefits: "Tuition fees + Maintenance allowance",
      duration: "Till completion of course",
      category: "Merit-based",
      status: "Active",
      applyLink: "#"
    },
    {
      id: 2,
      title: "Prime Minister's Scholarship Scheme",
      type: "Government",
      provider: "Department of Ex-Servicemen Welfare",
      description: "Scholarship for wards of Ex-Servicemen for technical and professional courses",
      amount: "₹36,000 - ₹50,000 per year",
      lastDate: "2025-02-28",
      eligibility: "Children of Ex-Servicemen, Minimum 60% in 12th",
      benefits: "Course fees + Books allowance",
      duration: "Duration of course",
      category: "Professional",
      status: "Active",
      applyLink: "#"
    },
    {
      id: 3,
      title: "AICTE Pragati Scholarship",
      type: "Government",
      provider: "All India Council for Technical Education",
      description: "Scholarship for girl students pursuing technical education",
      amount: "₹30,000 per year",
      lastDate: "2025-03-15",
      eligibility: "Girl students in Engineering/Pharmacy, Family income < ₹8 lakh",
      benefits: "Tuition fees + Books",
      duration: "Complete course duration",
      category: "Engineering",
      status: "Active",
      applyLink: "#"
    },
    {
      id: 4,
      title: "Tata Capital Pankh Scholarship",
      type: "Private",
      provider: "Tata Capital Limited",
      description: "Supporting students from Classes 6 to 12 and graduates from underprivileged backgrounds",
      amount: "₹10,000 - ₹12,000 per year",
      lastDate: "2025-02-15",
      eligibility: "Students from Classes 6-12 and graduates, Family income < ₹4 lakh",
      benefits: "Educational expenses",
      duration: "One academic year",
      category: "General",
      status: "Active",
      applyLink: "#"
    },
    {
      id: 5,
      title: "Dr. A.P.J. Abdul Kalam IGNITE Awards",
      type: "Government",
      provider: "National Innovation Foundation",
      description: "Awards for innovative ideas by students below 18 years",
      amount: "₹10,000 - ₹25,000",
      lastDate: "2025-04-30",
      eligibility: "Students below 18 years with innovative ideas",
      benefits: "Award money + Recognition",
      duration: "One-time award",
      category: "Innovation",
      status: "Active",
      applyLink: "#"
    },
    {
      id: 6,
      title: "National Means-cum-Merit Scholarship",
      type: "Government",
      provider: "Department of School Education",
      description: "Scholarship for economically weaker sections studying in Class IX",
      amount: "₹12,000 per year",
      lastDate: "2025-03-20",
      eligibility: "Class VIII pass with 55% marks, Family income < ₹1.5 lakh",
      benefits: "Educational expenses",
      duration: "Class IX to XII",
      category: "School",
      status: "Active",
      applyLink: "#"
    }
  ];

  const types = ["all", "Government", "Private"];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || scholarship.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Scholarships & Admissions</h1>
          <p className="text-muted-foreground text-lg">
            Discover educational funding opportunities and admission notifications
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search scholarships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredScholarships.map((scholarship) => (
            <Card key={scholarship.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">
                    {scholarship.type}
                  </Badge>
                  <Badge variant={scholarship.status === "Active" ? "default" : "destructive"}>
                    {scholarship.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {scholarship.title}
                </CardTitle>
                <p className="text-muted-foreground font-medium">
                  {scholarship.provider}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-2">
                  {scholarship.description}
                </p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <IndianRupee className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-green-600">{scholarship.amount}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Last Date: {new Date(scholarship.lastDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>Category: {scholarship.category}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="font-medium text-sm">Eligibility: </span>
                    <p className="text-xs text-muted-foreground mt-1">{scholarship.eligibility}</p>
                  </div>
                  <div>
                    <span className="font-medium text-sm">Benefits: </span>
                    <p className="text-xs text-muted-foreground mt-1">{scholarship.benefits}</p>
                  </div>
                  <div>
                    <span className="font-medium text-sm">Duration: </span>
                    <span className="text-xs text-muted-foreground">{scholarship.duration}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <Badge variant="outline" className="text-xs">
                    <Users className="w-3 h-3 mr-1" />
                    Open for Applications
                  </Badge>
                  <Button size="sm">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredScholarships.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No scholarships found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scholarships;