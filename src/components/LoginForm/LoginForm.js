import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import "./LoginForm.css";

const LoginForm = () => {
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const token = sessionStorage.getItem("token");
  const history = useNavigate();

  const demoRedirect = (path) => {
    history(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Loader Start
    setLoading(true);

    console.log("kedy");

    //THIS IS THE PART WHERE YOU UPDATE ACCORDING TO API

/*     const opts = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    fetch("http://127.0.0.1:8080/alfresco/s/api/login", opts)
      .then((res) => {
        if (res.status === 200) {
          if (showError === true) {
            setShowError(false);
          }
          return res.json();
        } else {
          if (showError === false) {
            setShowError(true);
          }
          setLoading(false); // Loader stops
          throw new Error("Promise Chain Cancelled");
        }
      })
      .then((data) => {
        // Token gets stored
        sessionStorage.setItem("token", data.data.ticket);
        setLoading(false);
        demoRedirect("/demo");
      })
      .catch((error) => {
        console.error("There's an error", error);
      }); */
  };

  return (
    <form onSubmit={handleSubmit}>
      {token && token !== "" && token !== undefined ? (
        <Navigate to="/demo" />
      ) : (
        <h3>Login</h3>
      )}
      {showError && (
        <h4 className="alert-text">Invalid Username or Password!</h4>
      )}
      <Input
        type="text"
        id="username"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        type="password"
        id="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        text="Continue"
        type="submit"
        buttonType="btn"
        onSubmit={handleSubmit}
      />
      {loading && <Loader />}
      <h4>To continue, enter an admin username and password.</h4>
    </form>
  );
};

export default LoginForm;
