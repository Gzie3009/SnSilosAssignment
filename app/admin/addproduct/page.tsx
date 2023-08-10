'use client'
import Axios from '@/app/utils/API/axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
type Props = {}

export default function AddProductPage({}: Props) {
    const router =useRouter()
    const [product,setProduct]=useState({
        title:"",
        price:"",
        description:"",
        image:"",
        category:""
    })
    const handleInputChange=(name:string,value:string)=>{
        setProduct({...product,[name]:value})
    }
    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        if(!product.title || !product.price || !product.description || !product.image)
        {
            toast.error("Enter Details First")
            return
        }
        const {data}=await Axios.post("/products",{
            ...product
        })
        if(data){
            toast.success("Product Successfully created")
            router.push("/admin")
        }
    }

  return (
    <>
        <div className='w-full grid place-items-center text-black pb-20'>
            <div className='w-1/2'>
                <h1 className='text-center pt-10 pb-5 text-3xl font-bold'>Add a new Product</h1>
                <form className='flex flex-col'>
                    <input className='bg-white py-2 my-2 w-full border border-black focus:outline-none rounded px-5' placeholder='Write Product Title' value={product.title} onChange={(e)=>handleInputChange(e.target.name,e.target.value)} name='title' type='text' />
                    <textarea className='bg-white py-2 my-2 w-full border border-black focus:outline-none rounded px-5' placeholder='Write Product Description' value={product.description} onChange={(e)=>handleInputChange(e.target.name,e.target.value)} name='description' />
                    <input className='bg-white py-2 my-2 w-full border border-black focus:outline-none rounded px-5' placeholder='Write Product Price' value={product.price} onChange={(e)=>handleInputChange(e.target.name,e.target.value)} name='price' type='text' />
                    <input className='bg-white py-2 my-2 w-full border border-black focus:outline-none rounded px-5' placeholder='Put Image Link' value={product.image} onChange={(e)=>handleInputChange(e.target.name,e.target.value)} name='image' type='text' />
                    <input className='bg-white py-2 my-2 w-full border border-black focus:outline-none rounded px-5' placeholder='Write Category Name' value={product.category} onChange={(e)=>handleInputChange(e.target.name,e.target.value)} name='category' type='text' />
                    <button onClick={(e)=>handleSubmit(e)} className='w-full bg-indigo-500 rounded hover:opacity-70 text-white py-3 active:scale-90'>Create Product</button>
                </form>
            </div>
        </div>
    </>
  )
}