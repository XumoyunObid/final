import React, { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: Props) => {
  return (
    <div className="flex items-center gap-2 lg:[&:not(:last-child)]:border-r">
      <div className="flex items-center justify-center">
        <span className="text-primary text-4xl">
          {icon}
        </span>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
