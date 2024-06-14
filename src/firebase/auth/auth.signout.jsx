import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../firebase.settings";

const auth = getAuth(firebaseApp);

export const SignoutUser = () => signOut(auth);