import Banner from "./_components/Banner/Banner";
import { CategoryList } from "./_components/category-list/category-list";

export default function Home() {
  return (
    <div className="bg-[#F5F6F9]">
      <div className="container pt-8 flex">
        <div className="w-1/4">
          <CategoryList/>
        </div>
      <Banner/>
      </div>
    </div>
  );
}
