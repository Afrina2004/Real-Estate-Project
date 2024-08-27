import { useLoaderData } from 'react-router-dom';
import  {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide1 from '../../assets/house.jpg';
import Slide2 from '../../assets/house2.jpg';
import Slide3 from '../../assets/house3.jpg';
import { FcRating } from "react-icons/fc";
import backgroundImage from '../../assets/home.jpg'
import Navbar from "../Shared/Navbar/Navbar";
import Footer from '../../Footer/Footer';
import { Helmet } from 'react-helmet';

const EstateDetails = () => {
  const divStyle = {
    width: 'full',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

     const estate2 = useLoaderData();
     const navigate = useNavigate();
     navigate(-1);
  const {id} = useParams();
 const idInt = parseInt(id);
  const estate = estate2.find (estate => estate.id === idInt)
   console.log(estate);
  
  return (
       <div  className='bg-gray-400 '>
        <Navbar></Navbar>
        <div>
            <Helmet>
                <title>Dream House | EstateDetails</title>
            </Helmet>
           </div>
        <div className='space-y-8'>
          <div  className=" w-full mb-8 md:mb-20  max-w-7xl mx-auto  " style={divStyle}>
          <section className=" min-h-screen flex flex-col text-center justify-center items-center space-y-4"><h1 className=" text-6xl text-white font-bold ">{estate.estate_title}</h1>
          <h1 className=" text-2xl text-white flex  ">Home <GoArrowRight className='mt-2 mr-2 ml-2' /> {estate.estate_title}</h1>
          </section>
          </div>
       
<div className=''>
    <Link to='/'> <a className='link link-primary mt-6 text-black  text-2xl p-8'> Go Back</a></Link>
    </div> 
    <div>
    <div class="max-w-md md:max-w-4xl mx-auto overflow-hidden ">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img className="h-80 w-full object-cover md:h-full md:w-80" src={estate.image} alt="Modern building architecture"/>
    </div>
    <div class="p-8">
      <div class="uppercase  text-4xl text-black font-bold">{estate.title}</div>
      <p class="mt-2 text-white text-2xl">{estate.description2}</p>
    </div>
  </div>
</div>
    </div>
    <div className='mt-6'>
    <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={Slide1} className='w-full ' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} className='w-full' />
        </SwiperSlide>
      </Swiper>
    </div>
    <div className=''>
    <div className='p-6'>
    <div className="card card-compact mt-6 max-w-md mx-auto md:max-w-2xl bg-gray-200 shadow-2xl">
  
  <div className="card-body">
    <h2 className=" text-center font-bold text-3xl">{estate.estate_title} </h2>
   <div className='bg-black text-center justify-center items-center rounded-2xl mt-4 h-[48px] w-[auto] '> <p className='text-white text-center mt-1  text-2xl'>Property Rating</p></div>
    <p className='flex justify-center items-center text-black text-center font-bold text-4xl p-2'>{estate.rating}<FcRating className='text-center mt-1 ml-2  ' /> <FcRating className='text-center mt-1 ' /> <FcRating className='text-center mt-1 ' /> <FcRating className='text-center mt-1 '/> <FcRating className='text-center mt-1 '/></p>
  </div> 
</div>
    </div> </div>
    <div className='my-12'>
      <Footer></Footer>
    </div></div>
    </div>
       
   );
 };

 export default EstateDetails;