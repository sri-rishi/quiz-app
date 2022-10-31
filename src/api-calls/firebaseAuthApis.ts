import { Dispatch } from './../types/authContext.types';
import { logInWithEmailAndPassword, registerWithEmailAndPassword } from "../services/authService";

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
            navigate("/")
        }
    }catch (error) {
        console.log(error)
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
            navigate("/signin");
        }
    }catch (error) {
        console.error(error)
    }
};

export {loginUser, signupUser}