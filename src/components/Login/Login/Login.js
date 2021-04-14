import React, { useContext } from "react";
import { UserContext } from "../../../App";
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import LoginBg from "../../../images/login-bg.png";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;

        const { displayName, email } = result.user;
        const singedInUser = {
          name: displayName,
          email,
        };
        setLoggedInUser(singedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  return (
    <section className="container mt-5 ">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <form action="">
            <div className="mb-3">
              <label htmlFor="">User Name</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <p>
              <small>log in here</small>
            </p>
            <button type="submit" className="btn btn-danger text-white" disabled>
              log in
            </button>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-brand text-white mt-5"
          >
            Google Sign in
          </button>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
