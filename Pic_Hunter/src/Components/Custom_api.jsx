import ShimmerUI from "./ShimmerUI";
import React, { useEffect, useState } from "react";

export default function Custom_api() {
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // to check if API is still loading or not

  // function to fetch pics
  async function fetchImages() {
    const API_key = `iu4-I3CVHf3DfoWASsTBJsVnUDvtI4yVD6RjlSuwgUs`;
    const arr = [];

    for (let i = 0; i < 9; i++) {
      const url = `https://api.unsplash.com/photos/random?client_id=${API_key}`;
      const data = await fetch(url);
      const json = await data.json();
      const image_url = json.urls.regular;
      arr.push(image_url);
    }

    setImageUrls(arr);
    setIsLoading(false);
  }

  // to run API once only
  useEffect(() => {
    fetchImages();
  }, []); // Empty dependency array to run once when the component mounts

  // conditional redering of API or shimmer UI if isloaded true show shimmer UI else show fetched pics
  return isLoading ? (
    <ShimmerUI />
  ) : (
    <div className="mx-auto w-[1080px] grid grid-cols-3 gap-4 mt-8">
      {imageUrls.map((imageUrl, index) => (
        <img
          className="w-[250px] h-[250px]"
          src={imageUrl}
          key={index}
          alt={`Image ${index}`}
        />
      ))}
    </div>
  );
}
