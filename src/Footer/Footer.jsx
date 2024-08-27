import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { MdMarkEmailUnread } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
const Footer = () => {
    return (
        <div className="">
          
           <footer className="footer footer-center bg-gray-300  text-black rounded p-10  text-xl pt-4">
           <a className="link link-hover text-4xl text-yellow-600 font-bold flex"><GiFamilyHouse className=''/> Dream House</a>
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Login</a>
  
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
      <FcGoogle className='text-3xl' />
      </a>
      <a>
      <SiGithub   className='text-3xl'/>
      </a>
      <a>
      <MdMarkEmailUnread  className='text-3xl' />
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer> 
        </div>
    );
};

export default Footer;