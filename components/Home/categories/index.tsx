"use client";

import Axios from "@/app/utils/API/axios";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import CategoryCard from "./CategoryCard";
const CategorySection = () => {
  const [categories, setCategories] = useState<string[]>([""]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchAllCategories = async () => {
    const { data } = await Axios.get("/products/categories");
    setCategories(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <>
      <h1 className="text-black text-2xl w-full text-center py-5 border-y border-black">
        Top Categories
      </h1>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 pb-10 gap-5 py-5">
          <Skeleton />
        </div>
      ) : (
        <div className="text-black px-5">
          {categories &&
            categories.map((category, index) => {
              
              return (
                <CategoryCard key={index} category={category}/>
              );
            })}
        </div>
      )}
    </>
  );
};

export default CategorySection;
