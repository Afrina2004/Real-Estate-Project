import { Link, NavLink } from "react-router-dom";
import { GiFamilyHouse } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log("Signed out successfully");
            })
            .catch(error => {
                console.error("Error signing out: ", error);
            });
    };

    const navLinks = (
        <>
            <li><NavLink to="/" className='text-white'>Home</NavLink></li>
            <li><NavLink to="/contact" className='text-white'>Contact Us</NavLink></li>
            {user ? (
                <>
                    <li><NavLink to="/user-profile" className='text-white'> User Profile</NavLink></li>
                 </>
            ) : (
              
                <li><NavLink to="/login" className='text-white'>Login</NavLink></li>
               
                
            )}
        </>
    );

    if (loading) {
        return (
            <div className="navbar bg-gray-700">
                <div className="navbar-start">
                    <a className="text-4xl text-yellow-600 font-bold flex items-center">
                        <GiFamilyHouse className='mr-2' /> Dream House
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="loader">Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="navbar bg-gray-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className=" text-3xl text-yellow-600 font-bold flex text-center">
                    <GiFamilyHouse className='' /> Dream House
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center">
                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="User profile" className='bg-white' />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleSignOut} className="btn btn-warning ml-4">Sign Out</button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-warning">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
