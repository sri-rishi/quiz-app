import { 
    addDoc, 
    auth, 
    collection, 
    createUserWithEmailAndPassword, 
    db, 
    getDocs, 
    GoogleAuthProvider, 
    query, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    where, 
    signOut
} from "../firebase";

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async() => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if(docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            })
        }
    }catch (error) {
        console.error(error);
    }
}

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
    signInWithGoogle, 
    logInWithEmailAndPassword,
    registerWithEmailAndPassword, 
    logout
}