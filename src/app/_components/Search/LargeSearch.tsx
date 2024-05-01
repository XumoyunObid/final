import React from "react";
import SearchSelect from "../Select/Select";
import { Input } from "@/components/ui/input";

const LargeSearch = () => {
  return (
    <div className="flex items-center bg-primary rounded-full p-[2px] gap-2 max-w-[600px] h-[52px]">
      <div className="flex items-center bg-white rounded-tl-full rounded-bl-full pl-2 py-1">
        <SearchSelect/>
          <Input placeholder="Search products..." className="border-0 bg-transparent mr-[150px]" />
      </div>
      <button className="bg-transparent px-4">Search</button>
    </div>
  );
};

export default LargeSearch;
