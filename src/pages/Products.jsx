import axios from 'axios'
import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import GradeIcon from '@mui/icons-material/Grade';

const Products = () => {
  const data = useLoaderData();
  console.log(data);
  const productsdata=data.data
  console.log(productsdata);
    // useEffect(()=>{
    //     async function productsdata(){
    //         let data=await axios.get("https://fakestoreapiserver.vercel.app/amazonproducts")
    //         console.log(data.data);
    //     }
    //     productsdata()
  
    // },[])

    // const data=useLoaderData()
    // console.log(data);
  return (
    <div>
      {/* <h1>Products</h1> */}
      <div className='max-w-screen-2xl mx-auto  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-6 xl:gap-10 px-4'>
        {productsdata && productsdata.map((Product,index) => (
          <div key={Product.id} className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative '>
          {/* <li key={index}>{Product.id}</li> */}
          <div className='w-full h-auto flex items-center justify-center px-4'>
             <img className='w-52 h-64 object-contain ' key={index}src={Product.image}/>
             <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500 py-2'>{Product.category}</span>
          </div>
            <div className='px-4'>
            <div className='flex items-center justify-between'>
            <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-medium'>{Product.title.substring(0,20)}</h2>
            <p className='text-sm text-gray-600 font-semibold'>$ {Product.price}</p>
          </div>
          <div>
            <p className='text-sm mb-1'>{Product.description.substring(0,100)}...</p>
            <div className='text-yellow-500'>
                <GradeIcon/>
                <GradeIcon/>
                <GradeIcon/>
                <GradeIcon/>
            </div>
          </div>
          <button className='w-full font-titleFont text-base bg-gradient-to-tr from-yellow-500 to-yellow-200 hover:to-yellow-600 border-yellow-500 hover:border-yellow-700  *:
          active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
