import { initializeFirebase } from "./firebaseInit.js"
import { doc, setDoc} from "firebase/firestore";

export async function addUserData(user, data) {
    const db = initializeFirebase()

    const reference = await setDoc(doc(db, "users", user), data);
    console.log(reference)
}