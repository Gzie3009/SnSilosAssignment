"use client";

import Axios from "@/app/utils/API/axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "@/components/Home/categories/Skeleton";
import ProductCard from "@/components/admin/ProductCard";

type Product = {
  id: number ;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type Props = {};

export default function CartSlider({}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAllProducts = async () => {
    try {
      const { data } = await Axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <h1 className="relative text-black text-2xl w-full text-center py-10 border-y border-black">
        All Product
        <Link href={"/admin/addproduct"} className="absolute top-3 right-2 z-20 h-20 w-20 rounded-full grid place-items-center hover:bg-white text-white hover:text-black border border-black font-bold bg-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Link>
      </h1>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 pb-10 gap-5 py-5">
          <Skeleton />
        </div>
      ) : (
        <div className="text-black flex flex-wrap -m-4 gap-y-2 py-10 px-5">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
              id={product.id}
              showControls={true}
            ></ProductCard>
          ))}
        </div>
      )}
    </>
  );
}
