import { initializeFirebase } from "./firebaseInit.js"
import { updateUserData } from "./updateUserData.js"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as fs from 'fs';
import { arrayUnion } from "firebase/firestore";

export async function uploadUsersImages(user, img) {
    
    fs.readFile(img, async (err, data) => {
        if (err) {
        console.error(err);
        return;
        }
        
        const imgName = new Date().getTime()
        const db = initializeFirebase()

        const storage = getStorage();
        const storageRef = ref(storage,"images/" + user + "/" + imgName);
        const metadata = {
            contentType: 'image/jpeg',
            owner: user
        };

        // Upload the file and metadata
        const uploadTask = await uploadBytes(storageRef, data, metadata);
        const url = await getDownloadURL(storageRef);

        const datas = {
            images: arrayUnion(url)
        } 

        await updateUserData(user, datas)

        return url
    });
    
} 
