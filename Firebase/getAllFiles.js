import { getStorage, ref, listAll } from "firebase/storage";
import { initializeFirebase } from "./firebaseInit.js"

const db = initializeFirebase()
const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, "images");

// Find all the prefixes and items.
await listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
        
    });
    res.items.forEach((itemRef) => {
      // All the items under listRef.
        console.log(itemRef)
        
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });