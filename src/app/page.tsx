import dynamic from "next/dynamic";

const Brands = dynamic(()=> import("./_components/Brands/Brands"), {ssr: false})

const ThirdSubBannerList = dynamic(()=> import("./_components/subbanners/ThirdSubBanner"), {ssr: false})

const Clothing = dynamic(()=> import("./_components/Clothing/Clothing"),
 {ssr: false}
)
const RecentProducts = dynamic(
  () => import("./_components/RecentProducts/RecentProducts"),
  { ssr: false }
);
const Banner = dynamic(() => import("./_components/Banner/Banner"), {
  ssr: false,
});
const TopDeals = dynamic(() => import("./_components/TopDeals/TopDeals"), {
  ssr: false,
});
const CategoryList = dynamic(
  () => import("./_components/category-list/category-list"),
  { ssr: false }
);
const ServicesList = dynamic(
  () => import("./_components/services/ServicesList"),
  { ssr: false }
);
const SubCategoryList = dynamic(
  () => import("./_components/sub-category-list/SubCategoryList"),
  { ssr: false }
);
const SubBannerList = dynamic(
  () => import("./_components/subbanners/SubBannerList"),
  { ssr: false }
);
const SecondSubBanner = dynamic(
  () => import("./_components/subbanners/SecondSubBanner"),
  { ssr: false }
);
const Computers = dynamic(()=> import("./_components/Computers/Computers"), 
{ssr: false}
);
 const HouseHold = dynamic(()=> import("./_components/HouseHold/HouseHold"), {ssr: false})

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
          <TopDeals />
          <RecentProducts />
        </div>
        <SecondSubBanner />
        <Computers/>
        <HouseHold/>
        <Clothing/>
        <ThirdSubBannerList/>
        <Brands/>
      </div>
    </div>
  );
}
