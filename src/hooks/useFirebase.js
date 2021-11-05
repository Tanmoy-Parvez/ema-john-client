import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth()

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {
                setError(error.message);
            });
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then((idToken) => {
                        localStorage.setItem("idToken", idToken);
                    })
                setUser(user);
            }
        });
        return unsubscribe;
    }, []);

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;