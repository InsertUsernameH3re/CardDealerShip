import { initializeFirebase } from "./firebaseInit.js"
import { getDoc, doc } from "firebase/firestore";

export async function getAllUserData(ref) {
  const db = initializeFirebase()

  //Sets reference to a specific set of data
  const reference = doc(db, "users", ref)

  //Gets all data from the specified user
  const querySnapshot = await getDoc(reference);
  const data = querySnapshot.data()
  return data
}
