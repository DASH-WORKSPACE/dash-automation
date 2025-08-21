import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const SearchSection = () => {
  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
            <Input
              type="text"
              placeholder="Search for exams, notifications, jobs..."
              className="pl-12 pr-20 py-6 text-lg bg-search-bg shadow-lg border-2 focus:border-primary rounded-full"
            />
            <Button 
              className="absolute right-2 h-10 w-10 rounded-full bg-primary hover:bg-primary/90 text-white shadow-md"
              size="sm"
            >
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;