import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializedAuthentication from "../Firebase/firebase.init";

initializedAuthentication();
const useFirebase = () => {
    const[user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // ---------google sign in------------
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // ---------sign out------------
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    // ---------observe weather user auth state change or not------------
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;