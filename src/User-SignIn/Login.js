import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

function Login() {
  const [enterName, setEnteredName] = useState("");
  const [enterEmail, setEnteredEmail] = useState("");
  const [enterPassword, setEnteredPassword] = useState("");
  const [isSaving, setIsSaving] = useState(true);

  const inputName = useRef("");
  const inputEmail = useRef("");
  const inputPassword = useRef("");

  useEffect(() => {
    saveData(userDetails);
  });

  if (inputName && inputEmail && inputPassword === "") {
    return;
  }

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const userDetails = {
    Name: inputName.current.value,
    Email: inputEmail.current.value,
    Password: inputPassword.current.value,
  };

  const saveData = (userDetails) => {
    // setIsSaving(true);
    fetch(
      "https://react-http-postrequest-507d4-default-rtdb.firebaseio.com/User-Login-detail.json",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application-json",
        },
      }
    );
    setIsSaving(false);
  };

  const submitHandler = (event) => {
    event.prevetDefault();

    setEnteredName("");
    setEnteredPassword("");
    setEnteredEmail("");
  };

  return (
    <>
      <form className="login" onSubmit={submitHandler}>
        {isSaving ? (
          <p>Your Data Is Saving</p>
        ) : (
          <div className="login__form">
            <div>
              <h2>Welcome to Login</h2>
            </div>
            <div className="input">
              <div>
                <label htmlFor="name">User Name : </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter User Name"
                  value={enterName}
                  ref={inputName}
                  onChange={nameInputHandler}
                />
              </div>
              <div>
                <label htmlFor="mail">User E-mail : </label>
                <input
                  id="mail"
                  type="email"
                  placeholder="Enter User Email"
                  value={enterEmail}
                  ref={inputEmail}
                  onChange={emailInputHandler}
                />
              </div>
              <div>
                <label htmlFor="password">User Password : </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter User Password"
                  value={enterPassword}
                  ref={inputPassword}
                  onChange={passwordInputHandler}
                />
              </div>
            </div>
            <button>Submit</button>
          </div>
        )}
      </form>
      <Link
        to="/"
        style={{ marginLeft: "10px", position: "absolute", top: "60px" }}
      >
        Home
      </Link>
    </>
  );
}
export default Login;

// async function loadData() {
//     const data = await fetch(
//       "https://react-http-postrequest-507d4-default-rtdb.firebaseio.com/User-Login-detail.json",
//       {
//         method: "POST",
//         body: JSON.stringify(userDetails),
//         headers: {
//           "Content-Type": "application-json",
//         },
//       }
//     );
//     const responce = await data.json();
//     console.log(responce);
//   }
