export interface ProductTypes {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    attribute_value: {}[];
    images: {}[];
    id: number;
    is_available: boolean;
    other_detail: string;
    price: string;
    price_with_discount: string | null;
    product: number;
    quantity: number;
    title: string;
  }[];
}

const GetProducts = async (): Promise<ProductTypes> => {
  try {
    const res = await fetch("http://135.181.108.207/product_variant/");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data as ProductTypes;
  } catch (error) {
    throw new Error("Failed to get products!");
  }
};

export default GetProducts;
