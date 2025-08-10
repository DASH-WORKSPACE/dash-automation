import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchSection = () => {
  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for exams, notifications, jobs..."
              className="pl-12 py-6 text-lg bg-search-bg shadow-lg border-2 focus:border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;