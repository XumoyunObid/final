export interface SubCategoryType {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    id: number;
    image: string;
    title: string;
    parent: {
      id: number;
      image: string;
      title: string;
    };
  }>;
}

const GetSubCategories = async (): Promise<SubCategoryType> => {
  try {
    const res = await fetch("http://135.181.108.207/api/subcategory/");
    if (!res.ok) {
      throw new Error("Failed to fetch sub categories");
    }
    const data = await res.json();
    return data as SubCategoryType;
  } catch (error) {
    throw new Error("Failed to get sub categories!");
  }
};

export default GetSubCategories;
