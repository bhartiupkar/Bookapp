import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


export default function Freebook() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const filteredData = list.filter((data) => data.category === "Free")
  console.log(filteredData);
  return (
    <>
      <div className=' margin-top-300px max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-bold text-xl pd-2'>
            Free offered books
          </h1>
          <p>I am Upkar Bharti. I am from Patna, Bihar. Currently, I am pursuing Bachelor of Technology in Computer Science and Engineering at IIT Dhanbad. Before my undergraduate degree </p>

        </div>

        <div >
          <Slider {...settings}>
            {filteredData.map((item)=>
            <Cards key={item.id} item={item} />
          )}
          </Slider>
        </div>
      </div>
    </>
  )
}

