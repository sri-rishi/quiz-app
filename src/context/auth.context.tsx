import React, {createContext, useContext, useEffect, useState} from "react";
import { AuthContextType } from "../types/authContext.types";
import {
    query,
    collection,
    db, 
    where, 
    getDocs
} from "../firebase";
import { logInWithEmailAndPassword, registerWithEmailAndPassword } from "../services/authService";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    const [token, setToken] = useState(tokenFromLocalStorage);
    const userFromLocalStorage = localStorage.getItem("user")
    const [userFromLocal, setUserFromLocal] = useState(userFromLocalStorage);
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: ""
    });

    useEffect(() => {
        if(token && userFromLocal) {
            (async () => {
                try {
                    const q = query(collection(db, "users"), where("uid","==", userFromLocal));
                    const querySnapShot = await getDocs(q);
                    querySnapShot.forEach(doc => {
                        const userDetailObj: any = doc.data();
                        setUserDetails(userDetailObj)
                    })
                }catch(error) {
                    console.error(error)
                }
            })()
        }
    }, [userFromLocal, token]);

    const loginUser = async(email: string, password: string) => {
        try {
            const response = await logInWithEmailAndPassword(email, password);
            const user: any = response?.user;
            if(user) {
                localStorage.setItem("token", user.accessToken);
                localStorage.setItem("user", user.uid);
                setUserFromLocal(user.uid);
                setToken(user.accessToken);
            }
        }catch (error) {
            console.log(error)
        }
    }
    const signupUser = async(name: string, email : string, password: string) => {
        try {
            const response = await registerWithEmailAndPassword(name, email, password);
            const user: any = response?.user;
            if(user) {
                localStorage.setItem("token", user.accessToken);
                localStorage.setItem("user", user.uid);
                setToken(user.accessToken);
                setUserFromLocal(user.uid);
            }
        }catch (error) {
            console.error(error)
        }
    } 
    return (
        <AuthContext.Provider value={{loginUser, signupUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};