import React, { ReactNode } from "react";
import ServiceCard from "./ServiceCard";
import { FaRegAddressCard, FaRegCreditCard } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHandCoinsBold } from "react-icons/pi";
import { BsChatRightDots } from "react-icons/bs";


const data = [
  {
    id: 1,
    title: "FREE DELIVERY",
    description: "For all orders over $120",
    icon: <TbTruckDelivery />,
  },
  {
    id: 2,
    title: "SAFE PAYMENT",
    description: "100% secure payment",
    icon: <FaRegCreditCard />,
  },
  {
    id: 3,
    title: "SHOP WITH CONFIDENCE",
    description: "If goods have problems",
    icon: <PiHandCoinsBold />,
  },
  {
    id: 4,
    title: "24/7 HELP CENTER",
    description: "Dedicated 24/7 support",
    icon: <BsChatRightDots />,
  },
  {
    id: 5,
    title: "FRIENDLY SERVICES",
    description: "30-day satisfaction guarantee",
    icon: <FaRegAddressCard />,
  },
];

const ServicesList = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 bg-white gap-4 p-6">
      {data.map((item) => (
        <ServiceCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ServicesList;
