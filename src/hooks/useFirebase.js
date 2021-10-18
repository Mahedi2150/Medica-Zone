import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Components/Login/Firebase/Firebase.init';




initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user.displayName);
                setUser(result.user)
            })
            .catch(error => {
                setUser(error.message)
            })
    }
    const logOut = () => {

        signOut(auth)
            .then(() => { })
            .catch((error) => {
            });
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }

        });
        return () => unsubscribed;
    }, [])
    return {
        user,
        signInUsingGoogle,
        logOut

    }

}
export default useFirebase