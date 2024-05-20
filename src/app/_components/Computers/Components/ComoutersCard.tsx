import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { SubCategoryType } from "@/service/GetSingleSubCategory";

interface Props {
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
}

const ComputersCard = (props: Props) => {
  const img = props.images[0].image
  return (
    <Card className="lg:w-[353px] h-[160px] shadow-sm bg-white">
      <CardContent className="flex items-center gap-2 p-4 text-wrap">
        <div className="flex items-center justify-center w-1/2">
          <img src={img} className="object-contain w-[120p] h-[120px]" />
        </div>
        <div className="w-1/2">
        <h1 className="text-primary">{props.title}</h1>
        <span className="font-semibold text-xl">$ {props.price}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComputersCard;
