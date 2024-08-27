import { useState, useEffect } from "react";
import Estate from '../Estate/Estate';
import Banner from "../Shared/Banner/Banner";



const EstateCard = () => {
    const [estate,setEstate] = useState([]);
      const [dataLength,setDataLength] = useState(4);

      useEffect( () =>{
        fetch('card.json')
        .then(res => res.json())
        .then(data => setEstate(data));
    },[])

    return (
        <div>
           <div><Banner></Banner></div>
            <div className='p-4'>
           
          <h2 className = 'text-5xl text-white text-center p-2 font-bold'>Estate Section</h2> 
          <p className='text-2xl text-center text-white p-2 mt-2' >We are a real estate firm with over 20 years of expertise, and our main goal is to provide amazing locations to our partners and clients.</p>
        <p className='text-center p-2 text-xl'></p>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
            {
                estate.slice(0, dataLength).map(estate => <Estate key={estate.id}  estate={estate}></Estate>)
                }                
          <div>
           </div>
          </div></div>
          <div className='items-center text-center'>
          <div className={ dataLength === estate.length && 'hidden'}> 
            <button onClick={() =>setDataLength(estate.length)}
            className='btn btn-warning'>See All</button>
          </div></div>
          </div>
        
    );
};

export default EstateCard; 


