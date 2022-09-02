import { AuthAction , InitialAuthState} from './authReducer.types';
type UserDetailsObj = {
    name: string,
    email: string
}

export type Dispatch = React.Dispatch<AuthAction>

export type AuthContextType = {
    state: InitialAuthState,
    dispatch: Dispatch,
    userDetails: UserDetailsObj,
    setUserDetails: React.Dispatch<React.SetStateAction<UserDetailsObj>>
}