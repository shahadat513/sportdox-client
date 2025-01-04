import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            setLoading(false)

            return () => {
                unsubscribe()
            }
            
        })
    }, [])


    const manageProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setLoading(false);
                return userCredential;
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const handleLogOut = () => {
        signOut(auth)
    }

    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        handleLogOut,
        manageProfile
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
