import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthContextComponent = ({children}) => {
    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(true)

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup()
    }

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (fullName,photo,) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: fullName,
            photoURL:photo,
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubcribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                console.log(currentUser);
                setUser(currentUser)
                setLoading(false)
            }
        })
        return () => unSubcribe()
    },[])

    const info = { user , createUser , signIn , logOut , loading , updateUser }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextComponent;