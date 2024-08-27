import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile as firebaseUpdateProfile, updateEmail as firebaseUpdateEmail, sendEmailVerification } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth).finally(() => setLoading(false));
    };

    const updateUserProfile = async (name, photoURL) => {
        if (auth.currentUser) {
            await firebaseUpdateProfile(auth.currentUser, { displayName: name, photoURL });
        } else {
            throw new Error("No user is currently signed in.");
        }
    };

    const updateUserEmail = async (email) => {
        if (auth.currentUser) {
            await firebaseUpdateEmail(auth.currentUser, email);
            await sendEmailVerification(auth.currentUser); 
        } else {
            throw new Error("No user is currently signed in.");
        }
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        auth,
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        updateUserEmail,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {loading ? <div className="loader">Loading...</div> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
