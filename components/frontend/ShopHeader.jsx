"use client";
import React from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import {User } from "lucide-react";
import HelpModal from "./HelpModal";
import CartCount from "./CartCount";
import UserAvatar from "../backoffice/UserAvatar";
import { MobileNavBar } from "../MobileNavBar";
import { usePathname } from "next/navigation";
import MobileCart from "../MobileCart";


export default function ShopHeader({ user , allCategories , backgroundColor  }) {
  const pathName=usePathname()
  if(pathName.startsWith("/search")){
    return null
  }
  return (
   <div className="bg-white pb-2 dark:bg-slate-700">
     <div className="">
      <div className="flex items-center justify-between lg:max-w-6xl mx-auto px-4 gap-8">
        {/* Logo */}
        <div className="flex items-center lg:gap-0 md:gap-0 gap-2" >
        <MobileNavBar allCategories={allCategories}/>
        <Link  className="flex items-center lg:gap-0 md:gap-0 gap-2"href="/">
          <Image src={logo} alt="kyaja logo" className="lg:w-[4rem] w-[3rem] h-[3rem] lg:h-[4rem] mt-4" />
          <div className="flex flex-col">
            <span className="font-black text-xl uppercase text-[#282828] lg:block md:block hidden">Kyaja</span>
          </div>
        </Link>
        </div>
       
        {/* SEARCH */}
        <div className="flex-grow lg:block md:block hidden">
          <SearchForm backgroundColor={backgroundColor }/>
        </div>
        <div className="gap-8 lg:flex items-center md:flex  hidden">
          {!user ? (
            <Link
              href="/login?q=dashboard"
              className="flex items-center space-x-1 text-[#5b5b5d] dark:text-slate-100 font-semibold"
            >
              <User />
              <span>Account</span>
            </Link>
          ) : (
            <UserAvatar user={user} />
          )}

          <HelpModal />
          <CartCount backgroundColor={backgroundColor}/>
        </div>
        <div className="flex lg:hidden md:hidden gap-3 items-center justify-center">

         {/* <Link href="/search/#">
         <Search className="w-6 h-6 text-gray-800" />
         </Link> */}

         <button>
         {!user ? (
            <Link
              href="/login?q=dashboard"
              className="flex items-center space-x-1 text-[#5b5b5d] dark:text-slate-100 font-semibold"
            >
              <User />
              <span className="hidden">Account</span>
            </Link>
          ) : (
            <UserAvatar user={user} />
          )}
         </button>

         <MobileCart />

        </div>
      </div>
    </div>
     <div className="lg:hidden md:hidden block">
      <div className="flex items-center justify-between lg:max-w-6xl mx-auto px-4 gap-8">
        {/* SEARCH */}
        <div className="flex-grow lg:block md:block block">
          <SearchForm backgroundColor={backgroundColor }/>
        </div>
      </div>
    </div>
   </div>
  );
}
