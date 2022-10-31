import { AuthAction , InitialAuthState} from './authReducer.types';
type UserDetailsObj = {
    name: string,
    email: string
}

export type SetUserDetails = React.Dispatch<React.SetStateAction<UserDetailsObj>>

export type Dispatch = React.Dispatch<AuthAction>

export type AuthContextType = {
    state: InitialAuthState,
    dispatch: Dispatch,
    userDetails: UserDetailsObj,
    setUserDetails: SetUserDetails
}