import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, MapPin, Briefcase, IndianRupee, Filter, List as ListIcon, LayoutGrid, Eye, CheckCircle } from "lucide-react";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [appliedJobs, setAppliedJobs] = useState<Record<number, boolean>>({});

  const markApplied = (jobId: number) => {
    setAppliedJobs((prev) => ({ ...prev, [jobId]: true }));
  };

  const jobs = [
    {
      id: 1,
      title: "Junior Engineer (Civil)",
      department: "SSC",
      organization: "Staff Selection Commission",
      description: "Recruitment for Junior Engineer posts in various government departments",
      lastDate: "2025-03-20",
      posts: "1200",
      location: "All India",
      salary: "₹35,400 - ₹1,12,400",
      qualification: "Diploma in Civil Engineering",
      experience: "Fresh Graduate",
      type: "Permanent",
      status: "Active"
    },
    {
      id: 2,
      title: "Sub Inspector",
      department: "Police",
      organization: "Delhi Police",
      description: "Sub Inspector recruitment in Delhi Police Force",
      lastDate: "2025-03-15",
      posts: "857",
      location: "Delhi",
      salary: "₹35,400 - ₹1,12,400",
      qualification: "Graduate",
      experience: "0-2 Years",
      type: "Permanent",
      status: "Active"
    },
    {
      id: 3,
      title: "Assistant Manager",
      department: "Banking",
      organization: "Bank of Baroda",
      description: "Assistant Manager (Credit) recruitment in Bank of Baroda",
      lastDate: "2025-02-28",
      posts: "600",
      location: "Pan India",
      salary: "₹48,170 - ₹1,68,300",
      qualification: "Post Graduate",
      experience: "2-5 Years",
      type: "Permanent",
      status: "Active"
    },
    {
      id: 4,
      title: "Station Master",
      department: "Railway",
      organization: "Indian Railways",
      description: "Station Master recruitment in various railway zones",
      lastDate: "2025-03-25",
      posts: "2500",
      location: "All Zones",
      salary: "₹35,400 - ₹1,12,400",
      qualification: "Graduate",
      experience: "Fresh Graduate",
      type: "Permanent",
      status: "Active"
    },
    {
      id: 5,
      title: "Forest Guard",
      department: "Forest",
      organization: "Forest Department",
      description: "Forest Guard recruitment in various state forest departments",
      lastDate: "2025-03-12",
      posts: "800",
      location: "Multiple States",
      salary: "₹25,500 - ₹81,100",
      qualification: "12th Pass",
      experience: "Fresh Graduate",
      type: "Permanent",
      status: "Active"
    },
    {
      id: 6,
      title: "Medical Officer",
      department: "Health",
      organization: "AIIMS",
      description: "Medical Officer recruitment in All India Institute of Medical Sciences",
      lastDate: "2025-04-01",
      posts: "150",
      location: "Delhi",
      salary: "₹56,100 - ₹1,77,500",
      qualification: "MBBS",
      experience: "0-3 Years",
      type: "Permanent",
      status: "Active"
    }
  ];

  const departments = ["all", "SSC", "Police", "Banking", "Railway", "Forest", "Health"];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Latest Government Jobs</h1>
          <p className="text-muted-foreground text-lg">
            Discover the latest government job openings across various departments
          </p>
        </div>

        {/* Search, Filter and View Toggle */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept === "all" ? "All Departments" : dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end">
            <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "list" | "grid")}> 
              <TabsList>
                <TabsTrigger value="list">
                  <ListIcon className="w-4 h-4 mr-2" /> List View
                </TabsTrigger>
                <TabsTrigger value="grid">
                  <LayoutGrid className="w-4 h-4 mr-2" /> Tile View
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Views */}
        {viewMode === "list" ? (
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Job Title</TableHead>
                    <TableHead className="min-w-[140px]">Deadline</TableHead>
                    <TableHead className="min-w-[120px]">Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredJobs.map((job, index) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-base font-medium text-foreground hover:underline cursor-pointer">
                            {job.title}
                          </span>
                          <span className="text-sm text-muted-foreground">{job.organization}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{new Date(job.lastDate).toLocaleDateString()}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={job.status === "Active" ? "default" : "destructive"}>{job.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" /> View
                          </Button>
                          {appliedJobs[job.id] ? (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" disabled>
                              <CheckCircle className="w-4 h-4 mr-2" /> Applied
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" onClick={() => markApplied(job.id)}>
                              <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Apply
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">
                      {job.department}
                    </Badge>
                    <Badge variant={job.status === "Active" ? "default" : "destructive"}>
                      {job.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">
                    {job.title}
                  </CardTitle>
                  <p className="text-muted-foreground font-medium">
                    {job.organization}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground line-clamp-2">
                    {job.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>Deadline: {new Date(job.lastDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span>Posts: {job.posts}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <IndianRupee className="w-4 h-4 text-primary" />
                        <span>{job.salary}</span>
                      </div>
                      <div>
                        <span className="font-medium">Qualification: </span>
                        <span>{job.qualification}</span>
                      </div>
                      <div>
                        <span className="font-medium">Experience: </span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <Badge variant="outline">{job.type}</Badge>
                    {appliedJobs[job.id] ? (
                      <Button className="bg-green-600 hover:bg-green-700 text-white" disabled>
                        <CheckCircle className="w-4 h-4 mr-2" /> Applied
                      </Button>
                    ) : (
                      <Button variant="outline" onClick={() => markApplied(job.id)}>
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Apply
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;