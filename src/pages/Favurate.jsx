import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { addTocart, decrementquantity, deleteItem, incrementQuantity, removefavitem, resetCart, resetfavitem } from '../redux/amazonslice';
import AddtoCart from './AddtoCart';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
Link

const Favurate = () => {
    const favitem = useSelector((state) => state.amazon.favitem);
    const Products = useSelector((state) => state.amazon.Products);
    const dispatch=useDispatch()
    console.log(favitem);
  return (
    <div className="w-full bg-gray-100 p-4">
      {favitem.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-10">
          <div>
            {/* <img className="w-80 rounded-lg mx-auto" src={emptyCart} alt="emptycart" /> */}
          </div>
          <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold m-2">Your FavList is Empty</h1>
            <Link to="/">
              <button className="w-full p-4 font-titleFont text-base bg-gradient-to-tr from-yellow-500 to-yellow-200 hover:to-yellow-600 border-yellow-500 hover:border-yellow-700 duration-200 py-1.5 rounded-md mt-3">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container mx-auto h-auto grid grid-cols-1   gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4 ">
            <div className="font-titleFont flex items-center justify-center border-b-[1px] border-b-gray-400 py-3 ">
              <h2 className="text-3xl font-semibold   ">Fav list</h2>
              {/* <h4 className="text-xl font-semibold">Subtotal</h4> */}
            </div>
            <div>
              {favitem.map((product) => (
                <div key={product.id} className="w-full border-[1px] border-b-gray-300 p-4 flex flex-col lg:flex-row items-center gap-6">
                  <div className="w-full flex items-center justify-between gap-6">
                    <div className="w-1/3 lg:w-1/5">
                      <img className="w-full h-44 object-contain" src={product.image} alt={product.title} />
                    </div>
                    <div className="w-full lg:w-3/5">
                      <h2 className="font-semibold text-lg">{product.title}</h2>
                      <p className="text-sm">{product.description.substring(0, 200)}...</p>
                      <p className="text-base">
                        Unit Price <span className="font-semibold">${product.price}</span>
                      </p>
                      
                      <div className='flex justify-between'>
                        
                      
                      <button onClick={()=>{dispatch(addTocart({
                          id:product.id,
                          title:product.title,
                          description:product.description,
                          price:product.price,
                          category:product.category,
                          image:product.image,
                          quantity:1
                      }))}} className="mx-5 bg-green-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-green-700 active:bg-red-900 duration-300">
                       Add to cart
                      </button>
                      <button onClick={() => dispatch(removefavitem(product.id))} className="flex  justify-center w-auto bg-red-300 rounded-full p-2 text-2xl py-2 hover:p-3  text-white mt-2 hover:bg-red-500 active:bg-red-900 duration-300">
                      <MdDelete className='text-red-900 ' />
                      </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-titleFont font-semibold">${product.price * product.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full py-2">
              <button onClick={() => dispatch(resetfavitem())} className="w-56 font-titleFont text-base bg-gradient-to-tr bg-red-500 to-red-200 hover:to-red-600 border-red-500 hover:border-yellow-700 duration-200 py-1.5 rounded-md mt-3">
                Clear FavList
              </button>
            </div>
          </div>
         
        </div>
      )}
    </div>
  )
}

export default Favurate
