import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

// https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/
const Login = () => {
  // States for registration
  const { loginStatus, setLoginStatus } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      setError(true);
    } else {
      // Verify user is in the database
      const users = fetch(
        `http://ec2-44-203-197-80.compute-1.amazonaws.com:8080/api/users/username?username=${name}`
      )
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          return json;
        });

      // var foundUser = false;
      const verifyCredentials = () => {
        users.then((a) => {
          if (a.password === password) {
            console.log("Logging in!");
            setLoginStatus("true");
            localStorage.setItem("user", a.idUser);
            setError(false);
            setSubmitted(true);
            navigate("/");
          } else {
            console.log("Failed to log in!");
            setError(true);
          }
        });
      };
      verifyCredentials();

      

      // setLoginStatus("true");
      // console.log("Logging in!");
      // localStorage.setItem("user", 4);

      // Route change to home
      
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User successfully logged in!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Login Failed!</h1>
      </div>
    );
  };

  return (
    <div className="regform">
      <div>
        <h1>User Login</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Username</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
