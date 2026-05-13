import { useState } from "react";
import { categories } from "../data/mockData";
export default function CategoryBar(){
  const [active, setActive] = useState("All");
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-3 mt-14 bg-[#0f0f0f] sticky top-14 z-40">
      {categories.map((cat) =>(
        <button
          key={cat}
        onClick={() => setActive(cat)}
          className={`whitespace-nowrap px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
           active === cat
              ? "bg-white text-black"
              : "bg-[#272727] text-white hover:bg-[#3d3d3d]"
          }`}
        >
         {cat}
       </button>
   ))}
   </div>
);
}