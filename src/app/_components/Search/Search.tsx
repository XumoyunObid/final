import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Search = () => {
  return (
    <div className="flex items-center border py-2 border-primary mx-4">
      <Input type="text" placeholder="Search Products..." className="border-0 ring-0"/>
      <Button type="submit" className="bg-transparent text-black font-normal">Search</Button>
    </div>
  );
};

export default Search;
