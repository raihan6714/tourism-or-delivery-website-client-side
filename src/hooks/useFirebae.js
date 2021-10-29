import firebaseAuthencation from "../components/Shared/Login/firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


firebaseAuthencation();


const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const SignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUsers(result.user);
            })
            .finally(() => setIsLoading(false));

    }
    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user);
            } else {
                setUsers({});
            }
            setIsLoading(false);
        });
        return () => unsubcribed;
    }, [isLoading]);

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    return {
        SignInWithGoogle,
        users,
        isLoading,
        logOut
    }

}
export default useFirebase;