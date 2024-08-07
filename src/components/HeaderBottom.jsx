import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from "framer-motion"
import { useSelector } from 'react-redux';
// import { userInfo } from 'os';

const HeaderBottom = () => {
  const UserInfo=useSelector((state)=>state.amazon.userInfo)
    const ref=useRef();
    const[Sidebar,setsidebar]=useState(false)
    // useEffect(()=>{
    //     document.body.addEventListener("click",(e)=>{
    //         // console.log(e.target);
    //         if(e.target.contains(ref.current)){
    //             setsidebar(false)
    //         }
    //     })

    // },[])

  return (
    <div className='w-full px-4 h-[36px] bg-black text-white flex items-center'>
      <ul className='flex items-center gap-2 text-sm tracking-wide' >
        <li onClick={()=>{setsidebar(true)}} className='headerHover items-center gap-1'><MenuIcon/>All</li>
        <li className='headerHover  items-center gap-1 hidden md:inline-flex'>Todays deals</li>
        <li className='headerHover  items-center gap-1 hidden md:inline-flex'>Customer Servive</li>
        <li className='headerHover  items-center gap-1 hidden md:inline-flex'>Digital Content & Devices</li>
        <li className='headerHover  items-center gap-1 hidden md:inline-flex'>Programs & Features</li>
        <li className='headerHover  items-center gap-1 hidden md:inline-flex'>Shop by Department</li>
      </ul>

      {
        Sidebar &&(
            <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                <div className='w-full h-full relative'>
                    <motion.div ref={ref} initial={{x:-500,opacity:1}} animate={{x:0, opacity:1}} transition={{duration:.2}} className='w-[80%] md:w-[350px] h-full bg-white border border-black '>
                        <div className='w-full bg-amazon_blue text-white py-2 px-6 flex items-center gap-4'>
                          
                           {
            UserInfo ? (
             
                <p className='text-sm text-gray-100  font-medium flex items-center gap-4'>
                <img className='h-8 w-8 rounded-2xl' src={UserInfo.image}/>
                   {UserInfo.email}
                 </p>
             
            ) :(
              <p className='text-xs text-lightText font-light'>
                 <AccountCircleIcon/>
                Hello Sign In
              </p>
            )
          }
                        </div> 
                        <ul className='p-4 m-4 font-serif font-bold bg-gray-200 '>
                            <li className='py-2'>Home Appliances</li>
                            <li className='py-2'>Digital Content and Devices</li>
                            <li className='py-2'>Shop by Category</li>
                            <li className='py-2'>Digital Content and Devices</li>
                            <li className='py-2'>Home Appliances</li>
                            <li className='py-2'>Shop by Category</li>
                            <li className='py-2'>Home Appliances</li>
                            <li className='py-2'>Shop by Category</li>
                        </ul>
                          <span onClick={()=>{setsidebar(false)}} className='cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300'>
                    <CloseIcon/>
                    </span>
                    </motion.div>
                  
                   
                </div>
            </div>
        )
      }
    </div>
  )
}

export default HeaderBottom
