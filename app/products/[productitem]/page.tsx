"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Axios from "@/app/utils/API/axios";
import { toast } from "react-toastify";
type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

type Props = {
  params: {
    productitem: string;
  };
};
const ProductScreen = ({ params }: { params: { productitem: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const fetchProductDetails = async () => {
    const { data } = await Axios.get(`/products/${params.productitem}`);
    setProduct(data);
    setLoading(false);
  };
  const handleAddToCartClick = () => {
    toast.success("Item Added To Cart");
    setAddedToCart(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProductDetails();
  }, []);

  return (
    <>
      {loading ? (
        <div className="p-10">
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            {product && (
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <Image
                  alt="ecommerce"
                  className="lg:w-1/2 w-full h-auto object-contain object-center rounded mix-blend-multiply"
                  src={product.image}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {product.category}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {product.title}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <span className="text-gray-600 ml-3 flex items-center">
                        {" "}
                        {product.rating.rate}{" "}
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 text-yellow-400 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>{" "}
                        | {product.rating.count} Reviews
                      </span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p className="leading-relaxed">{product.description}</p>

                  <div className="flex mt-5">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${product.price}
                    </span>
                    {addedToCart ? (
                      <button className="cursor-pointer flex w-3/4 justify-center ml-auto text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded">
                        <input
                          id="my-drawer-4"
                          type="checkbox"
                          className="drawer-toggle"
                        />
                        <div className="drawer-content grid place-items-center hover:cursor-pointer w-full h-full">
                          <label
                            htmlFor="my-drawer-4"
                            className="drawer-button flex gap-2 w-full h-full justify-center items-center"
                          >
                            View Cart
                          </label>
                        </div>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToCartClick()}
                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-3/4 justify-center"
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default ProductScreen;
