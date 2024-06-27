import React, { useState } from 'react'
import { logo } from '../assets/index'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderBottom from './HeaderBottom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = () => {

  const Products=useSelector((state)=>state.amazon.Products)
  console.log(Products);

    const[showAll,setshowAll]=useState(false)

    console.log(showAll);
  return (
    <div className='w-full sticky top-0 z-50' >
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
       {/* Image Start Here */}
         <Link to="/">
         <  div className='headerHover '>
            <img className='w-24 mt-2' src={logo}  alt='logo'/>
           </div>
         </Link>
       {/* Image End Here */}

       {/* Deliver Start Here */}
         <div className='headerHover hidden mdl:inline flex'>
            <LocationOnIcon/>
            <p className='text-sm text-lightText font-light flex flex-col'>
                Deliver To{" "}
                 <span className='text-sm font-semibold -mt-1 text-whiteText'>Pune</span></p>
         </div>

       {/* Deliver End Here */}

       {/* Search Start Here */}
           <div className='h-10 rounded-md hidden lgl:flex flex-grow relative '>
           <span onClick={()=>{setshowAll(!showAll)}} className='w-14 h-full flex bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont justify-center rounded-tl-md rounded-bl-md items-center '>All <span className=''><ArrowDropDownIcon/>
            {
                showAll && (
                    <div>
                        <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px]
                         border-amazon_blue text-black p-2 flex-col gap-1 z-50
                        '>
                            <li>Mobile Phones</li>
                            <li>Smartwatches</li>
                            <li>Wireless Headphones</li>
                            <li>Digital Tvs</li>
                            <li>Computers</li>
                        </ul>
                    </div>
                )
            }
           </span></span>
           <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text'/>
           <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] text-amazon_blue cursor-pointer rounded-tr
           -md rounded-br-md'><SearchIcon/></span>
           </div>
      
       {/* Search End Here */}

       {/* Signin Start Here */}
         <div className='hidden lgl:flex flex-col items-start justify-center headerHover'>
         <p className='text-sm mdl:text-xs text-white mdl:text-amazon_light font-light '>Hello, Sign in</p>
         <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex'>Accounts & Lists <span><ArrowDropDownIcon/></span></p>
         </div>
       
       {/* Signin End Here */}

        {/* Orders Start Here */}

        <div className='flex flex-col items-start justify-center headerHover'>
            <p className='text-xs text-amazon_light font-light '>Returns</p>
            <p className='text-sm font-semibold -mt-1 text-whiteText'> & Orders</p>
        </div>
        {/* Orders Ends Here */}

         {/* carts Starts Here */}
            <Link to='cart'>
                
              <div className='flex items-start justify-center headerHover relative' >
                 <ShoppingCartIcon/>
                 <p className='text-xs font-semibold mt-3 text-whiteText'>Cart <span className='absolute rounded-full flex justify-center items-center p-1 h-4 bg-[#f3a847] text-amazon_blue text-xs top-0 left-6 font-semibold'>
                  {Products.length > 0  ? Products.length : 0}
                  </span></p>
              </div>


            </Link>
           {/* carts Ends Here */}
          
          
          


        </div>
        <HeaderBottom/>
    </div>
  )
}

export default Header
