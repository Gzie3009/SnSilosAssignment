"use client";
import Axios from "@/app/utils/API/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

type Props = {
  category: string;
};

export default function CategoryCard({ category }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchProductFromCategory = async () => {
    const { data } = await Axios.get(`/products/category/${category}`);
    console.log(data);
    setProducts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProductFromCategory();
  }, []);

  return (
    <>
      <div>
        <div className="border-b border-black px-5 pt-5 pb-1 capitalize text-3xl font-bold">
          {category}
        </div>
        <div className="container px-5 py-24 mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Skeleton />
            </div>
          ) : (
            <>
              <div className="flex flex-wrap -m-4 gap-y-2">
                {products &&
                  products.map((product, index) => {
                    return (
                      <>
                        <ProductCard key={index} title={product.title} price={product.price} category={product.category} image={product.image} id={product.id} rate={product.rating.rate} count={product.rating.count}/>
                      </>
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
