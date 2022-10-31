import { 
    addDoc, 
    auth, 
    collection, 
    createUserWithEmailAndPassword, 
    db, 
     
    signInWithEmailAndPassword,  
    signOut
} from "../firebase";

const logInWithEmailAndPassword = async(email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
}

const registerWithEmailAndPassword = async(name: string, email: string, password: string) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    if(user) {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    }

    return response;
}

const logout = () => {
    signOut(auth)
}

export {
    logInWithEmailAndPassword,
    registerWithEmailAndPassword, 
    logout
}