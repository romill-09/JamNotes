import { useNavigate, Link } from "react-router-dom";
import "../css/signup.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const SignUp = () => {
  const navigate = useNavigate();

  const logGoogleUser = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User logged in successfully");
      navigate("/");
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  return (
    <div className="signup-container">
      <Link to="/signup">
        <div className="signUplogo">
          <img src="JamNotes.png" alt="Logo" />
        </div>
      </Link>

      <div className="bt">
        <button onClick={logGoogleUser}>Sign In With Google</button>
      </div>
    </div>
  );
};

export default SignUp;
