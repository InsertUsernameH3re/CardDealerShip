import { initializeFirebase } from "./firebaseInit.js"
import { doc, deleteDoc } from "firebase/firestore";

export async function deleteUserData(user) {
    const db = initializeFirebase()

    await deleteDoc(doc(db, "users", user));
}
