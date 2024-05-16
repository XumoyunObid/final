import React from "react";
import logo from "/public/images/logo.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Search from "../Search/Search";
import Link from "next/link";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import LargeSearch from "../Search/LargeSearch";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="pb-[20px]">
      <div className="container">
        <div className="flex items-center justify-between py-6 ">
          <Link href="/"><Image src={logo} alt="Logo" width={140} /></Link>
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-2">
              <TfiHeadphoneAlt className="text-[36px]" />
              <div className="flex flex-col">
                <p>Hotline Free:</p>
                <h4>+998(91)476-66-21</h4>
              </div>
            </div>
            <LargeSearch />
          </div>
          <Navbar/>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <FaBars />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={"left"}
                className="py-10 flex flex-col gap-4 px-0"
              >
                <Search />
                <ul className="flex flex-col items-start">
                  <li className="py-3 border-t w-full pl-5">
                    <Link
                      href="/"
                      className=" uppercase font-medium text-sm hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="py-3 border-t w-full pl-5">
                    <Link
                      href="/"
                      className=" uppercase font-medium text-sm hover:text-primary"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="py-3 border-t w-full pl-5">
                    <Link
                      href="/"
                      className=" uppercase font-medium text-sm hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="py-3 border-t w-full pl-5">
                    <Link
                      href="/"
                      className=" uppercase font-medium text-sm hover:text-primary"
                    >
                      Pages
                    </Link>
                  </li>
                  <li className="py-3 border-t w-full pl-5">
                    <Link
                      href="/"
                      className=" uppercase font-medium text-sm hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="py-3 border-t border-b w-full pl-5 uppercase font-medium text-sm hover:text-primary">
                    You recently viewed
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <ul className="hidden lg:flex items-center border-t gap-8">
          <li className="py-3">
            <Link
              href="/"
              className=" uppercase font-medium text-sm hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li className="py-3">
            <Link
              href="/shop"
              className=" uppercase font-medium text-sm hover:text-primary"
            >
              Shop
            </Link>
          </li>
          <li className="py-3">
            <Link
              href="/"
              className=" uppercase font-medium text-sm hover:text-primary"
            >
              Blog
            </Link>
          </li>
          <li className="py-3">
            <Link
              href="/"
              className=" uppercase font-medium text-sm hover:text-primary"
            >
              Pages
            </Link>
          </li>
          <li className="py-3">
            <Link
              href="/"
              className=" uppercase font-medium text-sm hover:text-primary"
            >
              Contact
            </Link>
          </li>
          <li className="py-3 uppercase font-medium text-sm hover:text-primary">
            You recently viewed
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
