import Axios from "@/app/utils/API/axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

type CartItem = {
  productId: number;
  quantity: number;
};
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?:number
};
export default function CartSlider({}: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const fetchAllCartItems = async () => {
    try {
      const { data } = await Axios.get("/carts/6");
      setCartItems(data.products);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const fetchProductDetails = async (productId:number) => {
    try {
      const response = await Axios.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product details:", error);
      return null;
    }
  };

  const fetchAllProductDetails = async () => {
    const productDetails = await Promise.all(
      cartItems.map(async (item) => {
        const details = await fetchProductDetails(item.productId);
        if (details) {
          return {
            ...details,
            quantity: item.quantity,
          };
        }
        return null;
      })
    );

    setCartProducts(productDetails.filter((details) => details !== null));
  };

  useEffect(() => {
    fetchAllCartItems();
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      fetchAllProductDetails();
    }
  }, [cartItems]);
  return (
    <li>
      <div className="drawer drawer-end text-black">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-3/4 lg:w-1/2 h-full text-black bg-white">
            <li className="border-b border-black">
              <h1 className="text-xl md:text-2xl w-full">Your Cart</h1>
            </li>
            {cartProducts.map((product, index) => (
              <li key={index} className="border-b border-black">
                <div>
                  <img
                    className="h-32 w-32"
                    width={20}
                    height={20}
                    alt={`${product.title}'s image`}
                    src={product.image}
                  ></img>{" "}
                  <p>
                    {product.title}{" "}
                    <p className="font-bold">Quantity: {product.quantity}</p>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
