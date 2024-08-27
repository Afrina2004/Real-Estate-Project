import { MdShareLocation } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Banner from '../../assets/contact.jpg';
import Navbar from "../Shared/Navbar/Navbar";
import Footer from '../../Footer/Footer';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    
    
    return (
        <div className='bg-gray-400'>
            <div><Navbar></Navbar></div>
            <div>
            <Helmet>
                <title>Dream House | ContactUs</title>
            </Helmet>
           </div>
            <div>
        <img src={Banner} className='w-full' />
        </div>
            <p className='text-2xl text-center text-black p-2 mt-2 ' > - Get In Touch -</p>
             <h2 className = '  text-5xl text-black text-center p-2 font-bold'>Our Contact Information</h2> 
             <div className='p-6'>
    <div className="card card-compact mt-6 max-w-md mx-auto md:max-w-2xl bg-black ">
  <div className='flex'><h1 className='text-white text-2xl mt-10'><MdShareLocation  className=' ml-2 w-[100px] h-[80px]'/>
  </h1>
  <div className="card-body">
    <h2 className="card-title text-3xl text-white">Our Address</h2>
<p className=' text-white text-2xl'>2690 Hiltona Street Victoria

</p>
    <p className='  text-white text-2xl'>Road, New York, Canada

</p>
</div>
  </div>
</div>
</div> 
    <div className='p-6'>
    <div className="card card-compact  mt-6 max-w-md mx-auto md:max-w-2xl bg-black">
  <div className='flex'><h1 className='text-white text-2xl mt-10'><FaPhoneAlt className='w-[100px] h-[80px] ml-3'/>
  </h1>
  <div className="card-body">
    <h2 className="card-title text-3xl text-white">Phone Number</h2>
<p className=' text-white text-2xl'>+01##########

</p>
    <p className='  text-white text-2xl'>+01##########

</p>
</div>
  </div>
  </div>
</div>
<div className='p-6'>
    <div className="card card-compact  mt-6 max-w-md mx-auto md:max-w-2xl bg-black">
  <div className='flex'><h1 className='text-white text-2xl mt-6'><MdEmail className='w-[100px] h-[100px] ml-3'/>
  </h1>
  <div className="card-body">
    <h2 className="card-title text-3xl text-white">Email Address</h2>
<p className=' text-white text-2xl'>.........@gmail.com

</p>
    <p className='  text-white text-2xl'>.........@gmail.com

</p>
</div>
  </div>
  </div>
</div>
<div>
  <Footer></Footer>
</div>

</div>
    );
};

export default ContactUs;