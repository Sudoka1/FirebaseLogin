import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../firebase.settings";

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth(firebaseApp); //Identifizierung bei Firebase

export const SignInWithGooglePopup = async () => {
  await signInWithPopup(auth, provider);
};