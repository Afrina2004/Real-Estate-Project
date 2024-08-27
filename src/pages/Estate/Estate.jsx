import { Link } from 'react-router-dom';
import { BiSolidArea } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";


const Estate = ({estate}) => {
      const {id,image,estate_title,segment_name,description,price,status,area,location,facilities,title,description2,rating} = estate;
    
    return (
        <div>
             <div className='p-2'>
          <div className="card card-compact shadow-xl ">
         <div>
        <figure className=" pt-12 "> 
        <img src = {image} alt='estate' className='h-[400px] w-[500px] rounded'/>
  </figure></div>
  <div className="card-body   ">
   <div className=' space-y-3'>
    <div className='text-2xl bg-white  rounded-xl text-center font-bold text-black'>ID-{id}</div>
    <div className='space-y-4 '> <p className='text-xl text-yellow-500'>{segment_name}</p>
    <p className='text-2xl font-bold text-orange-600 flex'><IoHomeOutline className='text-4xl text-white mr-2'/> {status}</p>
    </div>
   
   <h2 className='card-title text-3xl  text-white font-bold'>{estate_title}</h2>
    
   <p className='text-xl text-white mt-3 '> {description}</p>
            <p className='text-xl text-white'><strong>Facilities :</strong> {facilities.join(', ')}</p>
            <div className='flex justify-between  '>   <p className='text-2xl mt-4  text-white font-bold  flex'> <BiSolidArea className='text-3xl mr-1' />{area}</p>
         <p className='text-3xl font-extrabold  text-white mt-4'> {price}</p></div>
          
            <p className='text-xl font-bold flex text-white'><strong><FaLocationDot className='text-2xl mr-2' /></strong> {location}</p> 
    <p className ='border-b-2 mt-2'></p>
   <div>
        <Link to = {`/estate/${id}`}><button className="btn btn-warning  bg-white rounded-3xl text-black mt-2">View Property</button></Link>
    </div>
    </div></div>
  </div>
  </div>
  
        </div>
    );
};

export default Estate;