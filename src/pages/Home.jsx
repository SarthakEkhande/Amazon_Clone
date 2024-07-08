import React from 'react'
import Banner from '../components/home/Banner'
import Products from './Products'

const Home = () => {
  return (
    <div>
      <Banner/>
     <div className='w-full -mt-14 lg:-mt-36 py-10'>
     <Products/>
    
     </div>
    </div>
  )
}

export default Home
