import {signOut} from "firebase/auth";
import {auth} from "../firebase/firebase.ts";
import {signInWithEmailAndPassword} from "firebase/auth";
import {createUserWithEmailAndPassword} from "firebase/auth";


export async function logIn(email: string, password: string) {
    const { user } = await signInWithEmailAndPassword(auth, email, password)

    if (user) {
        localStorage.setItem("loginTimestamp", Date.now().toString());
    }

    return user
}



export const logOut = async (
) => {
    try {
        await signOut(auth);
        console.log("Logged out successfully!");
    } catch (error) {
        console.error("Logout failed: ", error);
    }
};


export async function signUp(email: string, password: string) {
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    return credentials.user

}