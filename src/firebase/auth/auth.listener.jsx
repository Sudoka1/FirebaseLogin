import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "../firebase.settings";

const auth = getAuth(firebaseApp);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};