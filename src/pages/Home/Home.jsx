import Navbar from "../Shared/Navbar/Navbar"
import Footer from '../../Footer/Footer';
import EstateCard from '../EstateCard/EstateCard';
import { Helmet } from 'react-helmet';

const Home = () => {
    
    return (
        <div>
            <div>
            <Helmet>
                <title>Dream House | Home</title>
            </Helmet>
           </div >
        <div className='bg-gray-700 space-y-14'>
           
           <div ><Navbar></Navbar></div>
           <div className='text-3xl text-center text-white p-2 mt-2 font-bold'>The Most Flexible WordPress Theme For Real Estate</div>
            <EstateCard></EstateCard>
              
            <Footer></Footer>    
            </div></div>
        
    );
};

export default Home;