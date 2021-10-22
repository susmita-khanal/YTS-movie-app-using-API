//this component is for modal

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";
import LoginForm from "./LoginForm";

import { Modal } from "react-bootstrap";
import "./Login.css";

const Login = (props) => {
  const [fragment, setFragment] = useState("login");
  // console.log(props);
  const handleClose = () => {
    props.setIsModalOpen(false);
  };

  const loadFragment = () => {
    switch (fragment) {
      case "login":
        return <LoginForm />;
      case "register":
        return <Register />;
      default:
        return null;
    }
  };
  // const onSubmits = (e) => {
  //   e.preventDefault();
  //   const newEntry = { email: email, password: password };
  //   setAllEntry([...allEntry, newEntry]);
  //   console.log(allEntry);
  // };

  return (
    <>
      <Modal
        size="lg"
        className="loginregistermodal"
        show={props.isModalOpen}
        onClose={handleClose}
        backdrop={true}
        onHide={() => props.setIsModalOpen(false)}
      >
        {/* <Register
          registerOpen={RegisterOpen}
          setRegisterOpen={setRegisterOpen}
        /> */}

        <div className="login">
          <div className="login-register">
            <div className="login-heading" onClick={() => setFragment("login")}>
              <div className="link">Login</div>
            </div>
            <div
              className="register-heading"
              onClick={() => setFragment("register")}
            >
              <div className="link">Register</div>
            </div>
          </div>
          <div>{loadFragment()}</div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
