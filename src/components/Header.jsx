import React, { useState } from 'react'
import { logo } from '../assets/index'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderBottom from './HeaderBottom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { GiEternalLove } from "react-icons/gi";

import { getAuth, signOut } from "firebase/auth";
import { favitem1, userSignOut } from '../redux/amazonslice';
// import { userInfo } from 'os';

// const handlelogout=()=>{
//   console.log('dome');
// }

const Header = () => {
  const auth = getAuth();
  const dispatch=useDispatch()

  const Products=useSelector((state)=>state.amazon.Products)
  
  const UserInfo=useSelector((state)=>state.amazon.userInfo)
  const favitem = useSelector((state) => state.amazon.favitem);
  // console.log(UserInfo);

  // console.log(Products);

    const[showAll,setshowAll]=useState(false)

    // console.log(showAll);


    const handlelogout=()=>{
      console.log('done');
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log("logout suiccess");
        dispatch(userSignOut())

      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    }
    
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
         <div className='headerHover hidden mdl:inline '>
            <LocationOnIcon/>
            <p className='text-sm text-lightText font-light flex flex-col'>
                Deliver To{" "}
                 <span className='text-left font-semibold -mt-1 text-whiteText'>Pune</span></p>
         </div>

       {/* Deliver End Here */}

       {/* Search Start Here */}
           <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>
           <span onClick={()=>{setshowAll(!showAll)}} className='w-14 h-full flex bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont justify-center rounded-tl-md rounded-bl-md items-center '>All <span className=''><ArrowDropDownIcon/>
            {
                showAll && (
                    <div>
                        <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden border-[1px]
                         border-amazon_blue text-black p-4 flex-col gap-1 z-50  m-4 font-serif font-bold bg-gray-200 
                        '>
                            <li className='py-2'>Mobile Phones</li>
                            <li className='py-2'>Smartwatches</li>
                            <li className='py-2'>Wireless Headphones</li>
                            <li className='py-2'>Digital Tvs</li>
                            <li className='py-2'>Computers</li>
                            <li className='py-2'>Freeze</li>
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
       <Link to='/signin'>
         <div className=' flex-col items-start justify-center headerHover'>
          {
            UserInfo ? (
             
                <p className='text-sm text-gray-100  font-medium'>
                 
                 <img className='h-8 w-8 rounded-2xl' src={UserInfo.image}/>
                 </p>
             
            ) :(
              <p className='text-sm text-gray-100  font-medium'>
                Hello Sign In 
              </p>
            )
          }
         {/* <p className='text-sm mdl:text-xs text-white mdl:text-amazon_light font-light '>Hello, Sign in</p> */}
         <p className='text-sm font-semibold -mt-1 text-whiteText  '>Accounts & Lists <span><ArrowDropDownIcon/></span></p>
         </div>
         </Link>
       
       {/* Signin End Here */}

        {/* Orders Start Here */}

        <div className='hidden lgl:flex flex-col items-start justify-center headerHover'>
            <p className='text-xs text-amazon_light font-light '>Returns</p>
            <p className='text-sm font-semibold -mt-1 text-whiteText'> & Orders</p>
        </div>
        {/* Orders Ends Here */}
      
     {/*} fav starts here*/}
     <Link to='/fav'>
      <div className='flex items-start justify-center relative headerHover'>
        <GiEternalLove />
        <p className='text-xs font-semibold mt-3 text-white'>
          Fav
          <span className='absolute rounded-full flex justify-center items-center p-1 h-4 bg-[#f3a847] text-amazon_blue text-xs top-0 left-6 font-semibold'>
            {favitem.length > 0 ? favitem.length : 0}
          </span>
        </p>
      </div>
    </Link>
     
     {/*} fav ends here*/}

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
          
           {UserInfo && (
          <div onClick={handlelogout}
            
            className="flex flex-col justify-center items-center headerHover relative"
          >
            <LogoutIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
              Log out
            </p>
          </div>
        )}
          


        </div>
        <HeaderBottom/>   
    </div>
  )
}

export default Header
