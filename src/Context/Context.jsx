import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';


export const ApiContext= createContext()

const ContextProvider = ({children}) => {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    
    
    console.log(userData)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password )
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth)
    }
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser,updatedData)
    }

    //google sing in
    
    const provider= new GoogleAuthProvider()
    const googleSingUp = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
       const unSubscribe= onAuthStateChanged(auth, (currentUser) => {
           setUserData(currentUser)
           setLoading(false)

        })
        return () => {
            unSubscribe()
        } 
    },[])


    useEffect(() => {
        fetch("/event.json")
            .then(res => res.json())
            .then(data => {
                setEventData(data)
                
            })
    }, [])

    const ApiData = {
        eventData,
        loading,
        setLoading,
        createUser,
        userData,
        setUserData,
        loginUser,
        logOutUser,
        updateUser,
        googleSingUp
    }

    return <ApiContext value={ApiData}>{ children}</ApiContext>
};

export default ContextProvider;