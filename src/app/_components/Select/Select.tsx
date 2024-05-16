import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchSelect = () => {
  
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="All categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="categories">Categories</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SearchSelect;
