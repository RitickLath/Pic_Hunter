import React from "react";

const shimmerArr = Array.from({ length: 9 });

export default function ShimmerUI() {
  return (
    <div className="w-[1080px] mx-auto mt-8">
      <div className=" grid grid-cols-3 gap-4">
        {shimmerArr.map((_, index) => (
          <div key={index} className="w-[250px] h-[250px] bg-gray-400"></div>
        ))}
      </div>
    </div>
  );
}
