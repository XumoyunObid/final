import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GetCategories from "@/service/GetCategories";

const SearchSelect = async () => {
  const categories = await GetCategories()
  
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="All categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.results.map((item)=>(
          <SelectItem key={item.id} value={item.title}>{item.title}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SearchSelect;
