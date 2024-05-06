import Banner from "./_components/Banner/Banner";
import CategoryList from "./_components/category-list/category-list";
import ServicesList from "./_components/services/ServicesList";
import SubCategoryList from "./_components/sub-category-list/SubCategoryList";
import SubBannerList from "./_components/subbanners/SubBannerList";

export default function Home() {
  return (
    <div className="bg-[#F5F6F9]">
      <div className="container pt-8">
      <Banner/>
      <CategoryList/>
      <SubBannerList/>
      <ServicesList/>
      <SubCategoryList/>
      </div>
    </div>
  );
}
