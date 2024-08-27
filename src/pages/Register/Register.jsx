import Navbar from '../Shared/Navbar/Navbar';
import { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { createUser } = useContext(AuthContext);

   
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const accepted = e.target.terms.checked;

       
        setRegisterError('');

        
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case character.');
            return;
        } else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lower case character.');
            return;
        } else if (!accepted) {
            setRegisterError('Please accept our terms and conditions!');
            return;
        }

       
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(result.user);

               
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                .then(() => {
                   
                    toast.success('Registration successful!');
                });
            })
            .catch(error => {
                
                if (error.code === 'auth/email-already-in-use') {
                    setRegisterError('This email is already in use. Please use a different email.');
                } else {
                    setRegisterError(error.message);
                }
                console.error(error);
            });
    };

    return (
        <div className="">
            <Navbar />
            <div>
            <Helmet>
                <title>Dream House | Register</title>
            </Helmet>
           </div>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl my-12 text-center  font-bold  mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input className="mb-4 w-full border py-2 px-4" type="text" name="name" placeholder="Your Name" required />
                    
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input className="mb-4 w-full border py-2 px-4" type="email" name="email" placeholder="Email Address" required />
                    
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="mb-4 relative border">
                        <input
                            className="w-full py-2 px-4"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            required
                        />
                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    
                    <label className="label">
                        <span className="label-text">Profile Photo URL</span>
                    </label>
                    <input className="mb-4 w-full border py-2 px-4" type="text" name="photo" placeholder="Profile Photo URL" />
                    
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a href="#">Terms and Conditions</a></label>
                    </div>
                    
                    <input className="btn btn-secondary mb-4 w-full" type="submit" value="Register" />
                </form>
                {registerError && <p className="text-red-700">{registerError}</p>}
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
