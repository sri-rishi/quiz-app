import React, {createContext, useContext, useEffect, useReducer, useState} from "react";
import { authReducer, initialAuthState} from "../reducers/authReducer";
import { AuthContextType } from "../types/authContext.types";
import {
    query,
    collection,
    db, 
    where, 
    getDocs
} from "../firebase";


const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: ""
    });

    const [state, dispatch] = useReducer(authReducer, initialAuthState);

    useEffect(() => {
        if(state.tokenFromLocal && state.userFromLocal) {
            (async () => {
                try {
                    const q = query(collection(db, "users"), where("uid","==", state.userFromLocal));
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
    }, [state.userFromLocal, state.tokenFromLocal]);
    return (
        <AuthContext.Provider value={{
            state, 
            dispatch, 
            userDetails, 
            setUserDetails, 
        }}>
            {children}
        </AuthContext.Provider>
    )
}



const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};