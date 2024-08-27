import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import Navbar from "../Shared/Navbar/Navbar";

const UserProfile = () => {
    const { user, updateUserProfile, updateUserEmail } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [email, setEmail] = useState(user?.email || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setEmail(user.email || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!/^https?:\/\//i.test(photoURL)) {
            toast.error('Please enter a valid URL for the profile photo.');
            setLoading(false);
            return;
        }

        try {
            await updateUserProfile(name, photoURL);

            if (email !== user.email) {
                await updateUserEmail(email);
                toast.info('A verification email has been sent to your new email address. Please verify it before logging in with the new email.');
            } else {
                toast.success('Profile updated successfully!');
            }
        } catch (error) {
            toast.error('Failed to update profile: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="">
            <Navbar />
            <Helmet>
                <title>Dream House | User Profile</title>
            </Helmet>
            <h2 className="text-3xl text-center font-bold my-10 mb-8">User Profile</h2>
            <form onSubmit={handleUpdateProfile} className="mx-auto w-1/2">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    className="mb-4 w-full border py-2 px-4"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                />
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    className="mb-4 w-full border py-2 px-4"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                />

                <label className="label">
                    <span className="label-text">Profile Photo URL</span>
                </label>
                <input
                    className="mb-4 w-full border py-2 px-4"
                    type="text"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    placeholder="Profile Photo URL"
                    required
                />

                <button className="btn btn-primary w-full" type="submit" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Profile'}
                </button>
            </form>
        </div>
    );
};

export default UserProfile;
