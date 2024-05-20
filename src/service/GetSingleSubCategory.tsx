export interface SubCategoryType {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    id: number;
    is_available: boolean;
    title: string;
    images: {
      image: string;
      image_id: number
    }[];
    product: number;
    attribute_value: [];
    other_detail: string;
    price: number;
    price_with_discount: null;
    quantity: number;
    userPrice: number,
    userCount: number
  }>;
}

const GetSingleSubCategory = async (id:number): Promise<SubCategoryType> => {
  try {
    const res = await fetch(`http://135.181.108.207/product_variant/?product__category=${id}`, {
      next: {revalidate: 10}
    });
    if (!res.ok) {
      throw new Error("Failed to fetch sub categories");
    }
    const data = await res.json();
    return data as SubCategoryType;
  } catch (error) {
    throw new Error("Failed to get sub categories!");
  }
};

export default GetSingleSubCategory;
