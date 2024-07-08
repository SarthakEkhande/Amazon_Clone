import React, { useState } from 'react'
import Slider from "react-slick";
import { bannerImgOne,bannerImgTwo, bannerImgThree, bannerImgFour,bannerImgFive } from '../../assets';


const Banner = () => {
    const [doActive,setdoActive]=useState(0)

    var settings = {
        dots: true,
        infinite: true,
        autoplay : true,
        slidesToShow: 1,
        slidsToScroll:1,
        arrows: false,
        beforeChange:(prev,next)=>{
            setdoActive(next);

        },
        appendDots: dots => (
            <div
              style={{
                position:"absolute",
                top:"70%",
                left:"45%",
                transform:"translate(-50%,-50%)",
                width:"210px"
              }}
            >
              <ul style={{ 
                width:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between"
               }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "40px",
                border: "1px blue #f3a847",
                height:"40px",
                borderRadius:"80%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                color:"yellow",
                background:"black",
                padding:"8px 0",
                cursor:"pointer"
              }}
            >
              {i + 1}
            </div>
          )
      };
  return (
    <div className='w-full h-full relative'>
        <div>
        <Slider {...settings}>
             <div>
               <img src={bannerImgOne} alt='bannerimgone'/>
             </div>
             <div>
               <img src={bannerImgTwo} alt='bannerimgone'/>
             </div>
             <div>
               <img src={bannerImgThree} alt='bannerimgone'/>
             </div>
             <div>
               <img src={bannerImgFour} alt='bannerimgone'/>
             </div>
             <div>
               <img src={bannerImgFive} alt='bannerimgone'/>
             </div>
        
        </Slider>
        </div>
    </div>
  )
}

export default Banner
