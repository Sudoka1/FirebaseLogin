import { useContext, useEffect } from "react";
import { UserContext } from "../../context/User.context.jsx";
import { SignInWithGooglePopup } from "./../../firebase/auth/auth.googlePopup.jsx";
import { SignoutUser } from "../../firebase/auth/auth.signout.jsx";

export function HeroView() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const loginHandler = () => {
    SignInWithGooglePopup();
  };

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Hello {currentUser ? currentUser.displayName : "Unknown"}
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            {currentUser ? (
              <button onClick={SignoutUser} className="btn btn-warning">
                Logout
              </button>
            ) : (
              <button onClick={loginHandler} className="btn btn-primary">
                Sign In Google
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}