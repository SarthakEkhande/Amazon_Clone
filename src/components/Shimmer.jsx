import React from 'react'
// import About from './About'


const CardShimmer = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-img stroke animate"></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate "></div>
        <div className="shimmer-details stroke animate "></div>
      </div>
    );
  };
  
const Shimmer = () => {
    return (
      <div> 
     
     <div className="flex flex-row">
      <div className="m-4 p-4">
         <input type="text" className="border border-solid border-black"/>
         <button className="px-4 py-1 bg-green-300 m-4  rounded-lg">Search</button>
      </div>
      <div>
        <div className="m-2 p-2 flex items-center">
         <button className='px-5 py-1 bg-gray-200 rounded-lg'>Top Rated Restaurant</button>
         <label className="p-4">Username:</label>
         <input className="border border-solid border-black p-2" />
       </div>
       </div>
    </div>
      
        <div>
     
          <div className="relative top-10 flex flex-wrap w-full max-w-screen-lg  justify-center left-48">   
          <div className=" shadow-lg justify-between rounded-full p-4 m-4 left-10 w-[100px] h-[100px] bg-grey  bg-gray-200 relative  "></div>
          <div className=" shadow-lg justify-between rounded-full p-4 m-4 left-10 w-[100px] h-[100px] bg-grey  bg-gray-200 relative  "></div>
          <div className=" shadow-lg justify-between rounded-full p-4 m-4 left-10 w-[100px] h-[100px] bg-grey  bg-gray-200 relative  "></div>
          <div className=" shadow-lg justify-between rounded-full p-4 m-4 left-10 w-[100px] h-[100px] bg-grey  bg-gray-200 relative  "></div>
          <div className=" shadow-lg justify-between rounded-full p-4 m-4 left-10 w-[100px] h-[100px] bg-grey  bg-gray-200 relative  "></div>
          <div className=" shadow-lg justify-between rounded-full p-4 m-4 left-10 w-[100px] h-[100px] bg-grey  bg-gray-200 relative  "></div>
   
     </div>
      <div className="shimmer-container">
        {new Array(20).fill(0).map((element, index) => {
          return <CardShimmer key={index} />;
        })}
      </div>
      </div>
      </div>
    );
  };
  export default Shimmer;