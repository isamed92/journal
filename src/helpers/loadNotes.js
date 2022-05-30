import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase-config"



export const loadNotes = async (uid) => {


    const ref = collection(db, `${uid}/journal/notes`)

    const notesSnap = await getDocs(ref)

    const notes = []

    notesSnap.forEach(snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()

        })
    })
    

    return notes
}