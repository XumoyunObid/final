import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface Props {
  img: string;
  title: string;
}

const CategoryCard = ({ img, title }: Props) => {
  return (
    <Card className="lg:w-[285px] h-[155px] shadow-sm">
      <CardContent className="flex items-center gap-2 p-4 text-wrap">
        <div className="flex items-center justify-center w-1/2">
          <img src={img} className="object-contain w-[120p] h-[120px]" />
        </div>
        <h1 className="w-1/2">{title}</h1>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
