import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import GradeIcon from '@mui/icons-material/Grade';
import { useDispatch } from 'react-redux';
import { addTocart, favitem1 } from '../redux/amazonslice';
import { GiEternalLove } from "react-icons/gi";
import Shimmer from '../components/Shimmer';


const Products = () => {

  const dispatch=useDispatch()  
  // const data = useLoaderData();
  // console.log(data);
  // const productsdata=data.data
  // console.log(productsdata);
  const [productsdata,setproductsdata]=useState()
    useEffect(()=>{
        async function productsdata(){
            let data=await axios.get("https://fakestoreapiserver.vercel.app/amazonproducts")
            console.log(data.data);
            setproductsdata(data.data)
        }
        productsdata()
     
  
    },[<header/>])

    // const data=useLoaderData()
    // console.log(data);
      
  //   if (!productsdata) {
  //     return <Shimmer />;
  // }
    
  return (
    <div >
      {/* <h1>Products</h1> */}
      <div className='max-w-screen-2xl mx-auto  grid grid-cols-1 md:grid-cols-1 xl:grid-cols-4   gap-6 xl:gap-10 px-4'>
        {productsdata && productsdata.map((Product,index) => (
          <div key={Product.id} className='bg-white h-auto hover:scale-105 border-[1px] border-gray-200 rounded-2xl py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative '>
          {/* <li key={index}>{Product.id}</li> */}
          <div className='w-full h-auto flex items-center justify-center px-4'>
          <div  className='cursor-pointer bg-green-400 rounded-full p-2 text-red-500 text-2xl capitalize italic absolute top-4 left-3  py-2' onClick={()=>{dispatch(favitem1({
            id:Product.id,
            title:Product.title,
            description:Product.description,
            price:Product.price,
            category:Product.category,
            image:Product.image,
            quantity:1
          }))}} ><GiEternalLove /> </div>
          <Link to={`/product/${Product.id}`}>
             <img className='w-52 h-64 object-contain ' key={index}src={Product.image}/>
             </Link>
             <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500 py-2'>{Product.category}</span>
          </div>
            <div className='px-4'>
            <div className='flex items-center justify-between'>
            <h2 className='font-titleFont tracking-wide text-lg text-gray-950 font-bold '>{Product.title.substring(0,20)}</h2>
            <p className='text-sm text-gray-600 font-semibold'>$ {Product.price}</p>
          </div>
          <div>
            <p className='text-sm mb-1'>{Product.description.substring(0,100)}...</p>
            <div className='text-gray-500 font-bold text-left flex items-center gap-2'>
               < GradeIcon/>
                {Product.rating.rate}
            </div>
          </div>
          

          <button onClick={()=>{dispatch(addTocart({
            id:Product.id,
            title:Product.title,
            description:Product.description,
            price:Product.price,
            category:Product.category,
            image:Product.image,
            quantity:1
          }))}} className='w-full font-titleFont text-base bg-gradient-to-tr bg-yellow-400  hover:to-yellow-600 border-yellow-500 hover:border-yellow-700  *:
           duration-200 py-1.5 rounded-md mt-3'>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
