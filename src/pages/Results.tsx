import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, ExternalLink, Calendar, Filter } from "lucide-react";

const Results = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const results = [
    {
      id: 1,
      title: "UPSC Civil Services Final Result 2024",
      category: "Civil Services",
      examName: "Civil Services Examination 2024",
      resultDate: "2025-01-15",
      description: "Final result for UPSC Civil Services Examination 2024 has been declared",
      totalCandidates: "10,564",
      qualified: "933",
      cutoff: "General: 950, OBC: 940, SC: 930, ST: 920",
      status: "Final",
      downloadLink: "#",
      officialLink: "https://upsc.gov.in"
    },
    {
      id: 2,
      title: "SSC CGL Tier-1 Result 2024",
      category: "SSC",
      examName: "Combined Graduate Level Examination Tier-1",
      resultDate: "2025-01-10",
      description: "SSC CGL Tier-1 examination result has been published",
      totalCandidates: "25,30,969",
      qualified: "1,85,578",
      cutoff: "General: 135.75, OBC: 131.50, SC: 125.25, ST: 120.00",
      status: "Tier-1",
      downloadLink: "#",
      officialLink: "https://ssc.nic.in"
    },
    {
      id: 3,
      title: "SBI PO Preliminary Result 2024",
      category: "Banking",
      examName: "Probationary Officer Preliminary Examination",
      resultDate: "2025-01-08",
      description: "State Bank of India PO preliminary examination result declared",
      totalCandidates: "18,50,000",
      qualified: "45,000",
      cutoff: "General: 42.75, OBC: 38.50, SC: 35.25, ST: 32.00",
      status: "Preliminary",
      downloadLink: "#",
      officialLink: "https://sbi.co.in"
    },
    {
      id: 4,
      title: "Railway RRB NTPC Result 2024",
      category: "Railway",
      examName: "Non-Technical Popular Categories",
      resultDate: "2025-01-05",
      description: "Railway RRB NTPC CBT-1 result has been announced",
      totalCandidates: "1,25,78,000",
      qualified: "2,50,000",
      cutoff: "General: 78.50, OBC: 73.25, SC: 65.75, ST: 60.50",
      status: "CBT-1",
      downloadLink: "#",
      officialLink: "https://rrbcdg.gov.in"
    },
    {
      id: 5,
      title: "IBPS PO Mains Result 2024",
      category: "Banking",
      examName: "Probationary Officer Mains Examination",
      resultDate: "2025-01-12",
      description: "IBPS PO Mains examination result published",
      totalCandidates: "15,842",
      qualified: "4,252",
      cutoff: "General: 65.25, OBC: 60.75, SC: 55.50, ST: 50.25",
      status: "Mains",
      downloadLink: "#",
      officialLink: "https://ibps.in"
    },
    {
      id: 6,
      title: "CISF Constable Result 2024",
      category: "Defence",
      examName: "Constable Recruitment Examination",
      resultDate: "2025-01-03",
      description: "CISF Constable written examination result declared",
      totalCandidates: "8,50,000",
      qualified: "25,000",
      cutoff: "General: 85.50, OBC: 82.25, SC: 78.00, ST: 75.50",
      status: "Written",
      downloadLink: "#",
      officialLink: "https://cisfrectt.in"
    }
  ];

  const categories = ["all", "Civil Services", "SSC", "Banking", "Railway", "Defence"];

  const filteredResults = results.filter(result => {
    const matchesSearch = result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.examName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || result.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Exam Results</h1>
          <p className="text-muted-foreground text-lg">
            Check the latest government exam results and cut-off marks
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search results..."
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

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredResults.map((result) => (
            <Card key={result.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">
                    {result.category}
                  </Badge>
                  <Badge variant="default">
                    {result.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {result.title}
                </CardTitle>
                <p className="text-muted-foreground font-medium">
                  {result.examName}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {result.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Result Date: {new Date(result.resultDate).toLocaleDateString()}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium">Total Candidates: </span>
                      <span>{result.totalCandidates}</span>
                    </div>
                    <div>
                      <span className="font-medium">Qualified: </span>
                      <span className="text-green-600 font-semibold">{result.qualified}</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Cut-off Marks: </span>
                    <p className="text-xs mt-1 p-2 bg-muted rounded">
                      {result.cutoff}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
                  <Button size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download Result
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Official Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No results found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;