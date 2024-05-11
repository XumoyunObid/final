import Banner from "./_components/Banner/Banner";
import TopDeals from "./_components/TopDeals/TopDeals";
import RecentProducts from "./_components/RecentProducts/RecentProducts";
import CategoryList from "./_components/category-list/category-list";
import ServicesList from "./_components/services/ServicesList";
import SubCategoryList from "./_components/sub-category-list/SubCategoryList";
import SubBannerList from "./_components/subbanners/SubBannerList";
import SecondSubBanner from "./_components/subbanners/SecondSubBanner";

export default function Home() {
  return (
    <div className="bg-[#F5F6F9]">
      <div className="container pt-8">
          <Banner />
          <CategoryList />
        <ServicesList />
        <SubBannerList />
        <SubCategoryList />
        <div className="flex flex-col lg:flex-row gap-5">
        <TopDeals/>
        <RecentProducts/>
        </div>
        <SecondSubBanner/>
      </div>
    </div>
  );
}
