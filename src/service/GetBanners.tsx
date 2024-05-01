export interface BannersType {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    image: string;
    title: string;
    created_at: string;
    updated_at: string;
    description: string | null;
  }[];
}

const GetBanners = async (): Promise<BannersType[]> => {
  try {
    const res = await fetch("http://135.181.108.207/banner/");
    if (!res.ok) {
      throw new Error("Failed to fetch banners");
    }
    const data = await res.json();
    return data as BannersType[];
  } catch (error) {
    throw new Error("Failed to get banners!");
  }
};

export default GetBanners;
