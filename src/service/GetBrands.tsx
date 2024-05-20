export interface BrandsType {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    id: number;
    image: string;
    title: string;
    children: Array<{
      id: number;
      image: string;
      title: string;
    }>;
  }>;
}

const GetBrands = async (): Promise<BrandsType> => {
  try {
    const res = await fetch("http://135.181.108.207/brand/");
    if (!res.ok) {
      throw new Error("Failed to fetch brands");
    }
    const data = await res.json();
    return data as BrandsType;
  } catch (error) {
    throw new Error("Failed to get brands!");
  }
};

export default GetBrands;
