import { Outlet } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins  ">
                <div className="App">
      <ToastContainer />
    </div>

            <Outlet></Outlet> 
           
             
        </div>
    );
};

export default Root;