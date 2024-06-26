import axios from 'axios'
import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

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
      <h1>Products</h1>
      <ul>
        {productsdata && productsdata.map((Product,index) => (
          <>
          <li key={index}>{Product.id}</li>
          {/* <img key={index}{...Product.image}/> */}
          </>
        ))}
      </ul>
    </div>
  )
}

export default Products
