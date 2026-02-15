import Banner from "@/Components/Home/Banner/Banner";
import Products from "@/Components/Home/Products";
import Image from "next/image";

export default function Home() {
  return (
  <div className="space-y-20">
    {/* Banner */}
   <section>
    <Banner/>
   </section>
   {/* Products */}
   <section>
    <Products/>
   </section>
  </div>
  );
}
