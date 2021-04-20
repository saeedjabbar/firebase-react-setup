import firebase from "firebase/app"

export const signIn = aync (email, password) => {
    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
        throw new Error('Error Signing In');
        console.log(e);
    }
}