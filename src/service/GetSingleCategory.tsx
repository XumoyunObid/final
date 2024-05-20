interface CategoryType {
  count: number;
  next: string;
  previous: null;
    id: number;
    title: string;
    image: string;
    children: {
      image: string;
      id: number;
      title: string;
    }[];
}

const GetSingleCategory = async (id:number): Promise<CategoryType> => {
  try {
    const res = await fetch(`http://135.181.108.207/category/${id}`, {
      next: {revalidate: 10}
    });
    if (!res.ok) {
      throw new Error("Failed to fetch sub categories");
    }
    const data = await res.json();
    return data as CategoryType;
  } catch (error) {
    throw new Error("Failed to get sub categories!");
  }
};

export default GetSingleCategory;
