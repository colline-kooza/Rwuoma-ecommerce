
import ProductCard from "./ProductCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getAllProducts } from "@/actions/products";
import { getSingleStyle } from "@/actions/styles";

export default async function TopOffers() {
  const products = await getAllProducts();

  const topProducts = products.filter((item) => item.type == "topdeals");
  const singleStyle= await getSingleStyle()
  const backgroundColor =  singleStyle.primaryColor || "#f68b1e";
  
  return (
   <div className="flex flex-col gap-6 w-full min-h-[50vh] bg-white mt-5">

    <div style={{backgroundColor}} className="flex items-center justify-between  p-4">
      
      <h2 className="text-[#ffff] font-bold lg:tracking-normal lg:text-lg text-lg flex items-center gap-1 pt-4">Payweek Deals | Top Offers

      </h2>
     
      <div className="lg:block md:block hidden">
      <Link className="text-[#ffff] font-bold lg:text-sm text-xs flex items-center gap-1" href="/more/topdeals">SEE ALL
      <ChevronRight className="w-5 h-5"/>
      </Link>
     </div>

    </div>

    <div  className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-5 px-3 gap-5 lg:pb-6 pb-4 lg:px-4">
      {topProducts?.splice(0,15).map((product) => (
        <ProductCard key={product.id} product={product} addToCart={false} />
      ))}
    </div>
   </div>
  );
}
