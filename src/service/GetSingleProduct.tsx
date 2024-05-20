export interface ProductType {
  attribute_value: {}[];
    images: {
      image: string;
      image_id:number;
    }[];
    id: number;
    is_available: boolean;
    other_detail: string;
    price: string;
    price_with_discount: string | null;
    product: number;
    quantity: number;
    title: string;
    userPrice:string;
    userCount:number;
}

const GetSingleProduct = async (id:number): Promise<ProductType> => {
  try {
    const res = await fetch(`http://135.181.108.207/product_variant/${id}/`);
    const data = await res.json();
    return data as ProductType;
  } catch (error) {
    throw new Error("Failed to get products!");
  }
};

export default GetSingleProduct;
