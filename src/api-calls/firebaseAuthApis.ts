import { Dispatch } from './../types/authContext.types';
import { logInWithEmailAndPassword, registerWithEmailAndPassword } from "../services/authService";
import {toast} from "react-toastify";

export type Navigate = (value: string) => void

const loginUser = async(email: string, password: string, dispatch: Dispatch, navigate: Navigate) => {
    try {
        const response = await logInWithEmailAndPassword(email, password);
        const user: any = response?.user;
        if(user) {
            localStorage.setItem("token", user.accessToken);
            localStorage.setItem("user", user.uid);
            dispatch({
                type: "Signin", 
                payload: {
                    user: user.uid, 
                    token: user.accessToken
                }})
            toast.success("Successfully logged in")    
            navigate("/")
        }
    }catch (error: any) {
        const errorMsg = error.message
          .match(/\/(\S+)[)]./i)[1]
          .replace(/-/g, " ")
          .toUpperCase();
        toast.error(`${errorMsg}`)
    }
}
const signupUser = async(name: string, email : string, password: string, dispatch: Dispatch, navigate: Navigate) => {
    try {
        const response = await registerWithEmailAndPassword(name, email, password);
        const user: any = response?.user;
        if(user) {
            localStorage.setItem("token", user.accessToken);
            localStorage.setItem("user", user.uid);
            dispatch({
                type: "Signup", 
                payload: {
                    user: user.uid, 
                    token: user.accessToken
                }})
            toast.success("Successfully created account")
            navigate("/signin");
        }
    }catch (error: any) {
        const errorMsg = error.message
          .match(/\/(\S+)[)]./i)[1]
          .replace(/-/g, " ")
          .toUpperCase();
        toast.error(`${errorMsg}`)
    }
};

export {loginUser, signupUser}