import { InitialAuthState, AuthAction } from "../types/authReducer.types";

const localStorageToken = localStorage.getItem("token");
const localStorageUser = localStorage.getItem("user");
const initialAuthState: InitialAuthState = {
    tokenFromLocal: localStorageToken,
    userFromLocal: localStorageUser
}

const authReducer = (state = initialAuthState, action: AuthAction) : InitialAuthState => {
    switch(action.type) {
        case "Signin": 
            return {
                ...state,
                tokenFromLocal: action.payload.token,
                userFromLocal: action.payload.user
            }

        case "Signup":
            return {
                ...state,
                tokenFromLocal: action.payload.token,
                userFromLocal: action.payload.user
            } 
        
        case "Logout": 
            return {
                ...state,
                tokenFromLocal: "",
                userFromLocal: ""
            }
    }
}

export {initialAuthState, authReducer};