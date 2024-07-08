import React from 'react'
import { useSelector } from 'react-redux'

const MainProducts = () => {
    const products=useSelector(state=>state.amazon.Products)
    console.log(products);
    const data=products
  return (
    <div>
       <div className="container mx-auto h-auto  lg:grid-cols-5 gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4">
          
            <div>
              {products.map((product) => (
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
                      
                     
                    </div>
                    <div>
                      <p className="text-lg font-titleFont font-semibold">${product.price.toFixed(2) * product.quantity.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
      
        </div>
        <div>

        </div>
    </div>
  )
}

export default MainProducts
