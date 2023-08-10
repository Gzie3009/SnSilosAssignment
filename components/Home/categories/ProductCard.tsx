
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id: number;
  title: string;
  image: string;
  category: string;
  price: string | number;
  rate:string | number;
  count:string | number;
};

export default function ProductCard({
  id,
  title,
  image,
  category,
  price,
  rate,
  count
}: Props) {
  return (
    <Link
      href={`/products/${id}`}
      className="group lg:w-1/4 md:w-1/2 p-4 w-full border border-black lg:border-transparent hover:border-black rounded flex flex-col justify-between"
    >
      <div>
        <div className="block relative h-48 rounded overflow-hidden">
          <Image
            alt={`${title}s image`}
            className="object-center w-full h-full block object-scale-down mix-blend-multiply"
            src={image}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {title}
          </h2>
          <p className="mt-1 flex justify-between">
            <p className="font-black">${price}</p>
            <p className="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 text-yellow-400 mr-2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            {rate} | {count}
            </p>
          </p>
        </div>
      </div>

      <button className="visible lg:invisible group-hover:visible bg-black text-white py-2 rounded active:scale-90 transition-transform duration-300">
        View Product
      </button>
    </Link>
  );
}
