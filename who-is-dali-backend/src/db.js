import { initializeApp } from 'firebase/app';
import {getFirestore, doc, setDoc, collection, getDocs} from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyDcuXwU2gZG5amWnUReFJ93jpAtllq-vBQ",
    authDomain: "who-is-dali.firebaseapp.com",
    projectId: "who-is-dali",
    storageBucket: "who-is-dali.appspot.com",
    messagingSenderId: "1058360983456",
    appId: "1:1058360983456:web:9fd9ae35d060a5531daec5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

/**
 * add or updates a user in the database
 * @param userName unique user ID
 * @param userInfo all user info excluding userID
 * @returns {Promise<void>}
 */
export const setUser = async (userName, userInfo) => {
    const docReference = doc(db, "users", userName);
    await setDoc(docReference, userInfo, {merge: true});
};


const usersCollection = collection(db, "users");

/**
 * returns a JSON array of user objects. each object includes username as a field.
 * @returns {Promise<*[]>} JSON array of user objects
 */
export const getUsers = async () => {
    const users = [];
    const querySnapshot = await getDocs(usersCollection);
    querySnapshot.forEach((doc) => {
        if (doc.exists()){
            users.push({...doc.data(), username: doc.id});
        }
    });
    return users;
};