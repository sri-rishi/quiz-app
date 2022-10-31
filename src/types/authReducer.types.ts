
export type InitialAuthState = {
    tokenFromLocal: string | null,
    userFromLocal: string | null
}

export type AuthAction = 
{
    type: "Signin"
    payload: {
        user: string,
        token: string
    }
}
|
{
   type: "Signup",
   payload: {
    user: string,
    token: string,
   }
}
|
{
    type: "Logout"
}