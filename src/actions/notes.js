import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";



export const startNewNote = () => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        // console.log(uid)

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        // Add a new document in collection "cities"
        await setDoc(doc(db, `notes`, uid), newNote);

    }
}