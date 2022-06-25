import { doc, updateDoc } from "firebase/firestore";
import { initializeFirebase } from "./firebaseInit.js"

export async function updateUserData(user, data) {
    
    const db = initializeFirebase()

    const reference = doc(db, "users/", user);

    await updateDoc(reference, data);
}
