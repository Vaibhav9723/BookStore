// import list from '../../public/list.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from 'axios';
import { useEffect, useState } from 'react';

    
const Freebooks = () => {

    const [book,setBook] = useState([]);
    useEffect(()=>{
      const getBook = async()=>{
        try {
          const res = await axios.get("http://localhost:4001/book")
          setBook(res.data.filter((val) => val.category === "Free"))
        } catch (error) {
          console.log("Error : ",error)
        }
      }
        getBook();
    },[])

    // const filterdata = list.filter((val) => val.category === "Free")
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
            <h1 className='text-xl font-semiblod py-2'>Free Offered Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo excepturi doloremque ab nam illum obcaecati aliquid veritatis, neque accusamus totam repellendus inventore ea, rem, dolorum illo blanditiis consequatur laborum!</p>
        </div>
        <div>
            <Slider {...settings}>
                {
                    book.map((item)=>{
                            return <Cards item={item} key={item.id}/>
                    })
                }

        </Slider>
        </div>
    </div>
    </>
  )
}

export default Freebooks