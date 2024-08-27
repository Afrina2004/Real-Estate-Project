import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { Helmet } from 'react-helmet';

const Login = () => {
    const { signIn, auth } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        setLoading(true);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setLoading(false);
                toast.success('Login successful!', {
                    position: "top-center",
                    autoClose: 3000,
                });
                navigate(location.state?.from?.pathname || '/');
            })
            .catch(error => {
                setLoading(false);
                const errorCode = error.code;
                if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
                    toast.error('Invalid email or password. Please try again.', {
                        position: "top-center",
                        autoClose: 3000,
                    });
                } else {
                    toast.error('Something went wrong. Please try again later.', {
                        position: "top-center",
                        autoClose: 3000,
                    });
                }
                console.error('Login error:', error);
            });
    };

    const handleGoogleLogin = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setLoading(false);
                const loggedUser = result.user;
                setUser(loggedUser);
                toast.success('Google login successful!', {
                    position: "top-center",
                    autoClose: 3000,
                });
                navigate(location.state?.from?.pathname || '/');
            })
            .catch(error => {
                setLoading(false);
                toast.error('Google login failed. Please try again.', {
                    position: "top-center",
                    autoClose: 3000,
                });
                console.error('Google login error:', error);
            });
    };

    const handleGithubLogin = () => {
        setLoading(true);
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setLoading(false);
                const loggedUser = result.user;
                setUser(loggedUser);
                toast.success('GitHub login successful!', {
                    position: "top-center",
                    autoClose: 3000,
                });
                navigate(location.state?.from?.pathname || '/');
            })
            .catch(error => {
                setLoading(false);
                toast.error('GitHub login failed. Please try again.', {
                    position: "top-center",
                    autoClose: 3000,
                });
                console.error('GitHub login error:', error);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                toast.success('Signed out successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                });
            })
            .catch(error => {
                toast.error('Sign out failed. Please try again.', {
                    position: "top-center",
                    autoClose: 3000,
                });
                console.error('Sign out error:', error);
            });
    };

    return (
        <div>
            <Navbar />
            <Helmet>
                <title>Dream House | Login</title>
            </Helmet>

            <div>
                <h2 className="text-3xl my-10 text-center font-bold">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>

                <div className="my-6 text-center">
                    {user ? (
                        <div>
                            <button onClick={handleSignOut} className="btn btn-secondary">Sign Out</button>
                            <div>
                                <h2>User: {user.displayName}</h2>
                                <p>Email: {user.email}</p>
                                <img src={user.photoURL} alt="profile" className="rounded-full" />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <button onClick={handleGoogleLogin} className="btn btn-outline mx-2" disabled={loading}>
                                <FcGoogle /> {loading ? 'Logging in...' : 'Google login'}
                            </button>
                            <button onClick={handleGithubLogin} className="btn btn-outline mx-2" disabled={loading}>
                                <SiGithub /> {loading ? 'Logging in...' : 'GitHub login'}
                            </button>
                        </div>
                    )}
                </div>

                <p className="text-center mt-4">Don't have an account? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;