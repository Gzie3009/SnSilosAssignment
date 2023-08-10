import Axios from "@/app/utils/API/axios";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

type Props = {
  id?: number;
  title: string;
  image: string;
  category: string;
  price: string | number;
  showControls:boolean
};

export default function ProductCard({
  id,
  title,
  image,
  category,
  price,
  showControls
}: Props) {
    async function handleDeleteProduct(id: number | undefined){
        const {data}=await Axios.delete(`/products/${id}`)
        if(data){
            toast.success("Product Deleted Successfully")
        }
    }

  return (
    <div className="relative group lg:w-1/4 md:w-1/2 p-4 w-full border border-black lg:border-transparent hover:border-black rounded flex flex-col justify-between">
      <div>
        <div className="block relative h-48 rounded overflow-hidden">
          <img
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
          </p>
        </div>
      </div>
      {showControls?<div className="absolute top-2 right-2">
        <div className="dropdown bg-white rounded-lg">
          <label tabIndex={0} className="btn m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52"
          >
            <li>
                <Link href={`/admin/updateproduct?id=${id}`}>Modify Product</Link>
            </li>
            <li>
                <button onClick={()=>handleDeleteProduct(id)}>Delete Product</button> 
            </li>
          </ul>
        </div>
      </div>:<></>}
    </div>
  );
}
