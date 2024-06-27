import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { decrementquantity, deleteItem, incrementQuantity, resetCart } from '../redux/amazonslice';
import { emptyCart } from '../assets/index';
import { Link } from 'react-router-dom';


const AddtoCart = () => {
    const dispatch=useDispatch()
    const Products=useSelector((state)=>state.amazon.Products)
    // import {motion} from "framer-motion"
    const[totalPrice,settotalPrice]=useState("")
    console.log(Products);
    useEffect(()=>{
        let Total=0;
        Products.map((item)=>{
            Total+=item.price * item.quantity;
            return settotalPrice(Total.toFixed(2))


        },[Products])
    })
  return (
    <div className='w-full bg-gray-100 p-4'>
        {Products.length===0 ? (
            <div initial={{}} className='flex justify-center items-center gap-4 py-10'>
                <div>
                    <img className='w-80 rounded-lg mx-auto' src={emptyCart} alt='emptycart'/>
                </div>
                <div className='w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg'>
                <h1 className='font-titleFont text-xl font-bold'>Your Cart is Empty</h1>
                <Link to="/">
                <button className='w-full font-titleFont text-base bg-gradient-to-tr from-yellow-500 to-yellow-200 hover:to-yellow-600 border-yellow-500 hover:border-yellow-700  *:
          active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3 p-4'>Continue Shopping</button>
                </Link>
                </div>
             
             
            </div>
        ):
      <div className='container mx-auto h-auto  grid grid-cols-5 gap-8 '>
         <div className='w-full h-full bg-white px-4 col-span-4 '>
            <div className='font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3'>
                <h2 className='text-3xl font-semibold'>Shpping Cart</h2>
                <h4 className='text-xl font-semibold'>SubTitle</h4>
            </div>
            <div>
               {Products && Products.map((product) => (
                 <div key={product.id} className='w-full border-[1px]  border-b-gray-300 p-4 flex items-center gap-6'>
                  <div className='w-full flex items-center justify-between gap-6 '>
                  <div className='w-1/5'>
                   <img className='w-full h-44 object-contain' src={product.image} alt={product.title} />
                   </div>
                   <div className='w-3/5'>
                    <h2 className='font-semibold text-lg'>{product.title}</h2>
                    <p className=' text-sm'>{product.description.substring(0,200)}...</p>
                    <p className='text-base '>Unit Price <span className='font-semibold'>${product.price}</span></p>
                    <div className='bg-[#f0f2f2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md'>
                        <p cl>Qty:</p>
                        <p onClick={()=>dispatch(decrementquantity(product.id))} className='cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300'>-</p>
                        <p>{product.quantity}</p>
                        <p onClick={()=>{dispatch(incrementQuantity(product.id))}} className='cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300'>+</p>
                    </div>
                    <button onClick={()=>dispatch(deleteItem(product.id))} className='bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300'>Delete Item</button>
                   </div>
                   <div>
                       <p className='text-lg font-titleFont font-semibold'>${product.price * product.quantity}</p>
                   </div>
                  </div>
                 </div>
      ))}
      
            </div>

            <div className='w-full py-2'>
                <button onClick={()=>{dispatch(resetCart())}} className='w-56 font-titleFont text-base bg-gradient-to-tr bg-red-500 to-red-200 hover:to-red-600 border-red-500 hover:border-yellow-700  *:
          active:from-red-400 red:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Clear cart</button>
            </div>
         </div>
         <div className='w-full h-52 flex-col items-center p-4 bg-white col-span-1 justify-center'>
             <div>
                <p className='flex gap-2 items-start text-sm'><span><CheckCircleIcon className='bg-white text-green-500 rounded-full'/>Your Order Qualifies free Shipping</span></p>
             </div>
             <div>
                <p className='font-semibold px-14 py-1 gap-2 flex items-center justify-between'>Total: <span className='text-lg font-bold '>${totalPrice}</span></p>
             </div>
             <button className='w-full font-titleFont text-base bg-gradient-to-tr from-yellow-500 to-yellow-200 hover:to-yellow-600 border-yellow-500 hover:border-yellow-700  *:
          active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Procced to Buy</button>

         </div>
      </div>
     }
    </div>
  )
}

export default AddtoCart
