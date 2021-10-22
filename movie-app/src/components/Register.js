import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import "react-toastify/dist/ReactToastify.css";

const getLocalItems = () => {
  let lists = localStorage.getItem("lists");
  if (lists) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const Register = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [records, setRecords] = useState(getLocalItems());

  const validator = React.useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const Submits = (e) => {
    e.preventDefault();
    const formValid = validator.current.allValid();
    const newRecords = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    // console.log(records);
    // console.log(records);

    if (formValid) {
      setRecords([...records, newRecords]);
      setUserRegistration({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
      toast.success("login successfully", {
        position: "top-right",
        hideProgressBar: false,
      });
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };
  //add data to localstorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(records));
  }, [records]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="register">
        <form onSubmit={Submits}>
          <div className="register-username">
            <i className="icon fas fa-user"></i>
            <input
              className="input"
              type="text"
              placeholder="Username"
              name="username"
              value={userRegistration.username}
              onChange={handleInput}
            />
            <div style={{ textAlign: "center" }}>
              {validator.current.message(
                "username",
                userRegistration.username,
                "required|min:6"
              )}
            </div>
          </div>

          <div className="register-email">
            <i class="icon fas fa-envelope-square"></i>
            <input
              className="input"
              type="text"
              placeholder="E-Mail(no confirmation needed)"
              name="email"
              value={userRegistration.email}
              onChange={handleInput}
            />
            <div style={{ textAlign: "center" }}>
              {validator.current.message(
                "email",
                userRegistration.email,
                "required|email"
              )}
            </div>
          </div>

          <div className="register-password">
            <i className="icon fas fa-lock"></i>
            <input
              className="input"
              type="password"
              placeholder="password"
              name="password"
              value={userRegistration.password}
              onChange={handleInput}
            />
            <div style={{ textAlign: "center" }}>
              {validator.current.message(
                "password",
                userRegistration.password,
                "required|min:6"
              )}
            </div>
          </div>

          <div className="register-confirm-password">
            <i className="icon fas fa-lock"></i>
            <input
              className="input"
              type="password"
              placeholder="confirm-password"
              name="confirmpassword"
              value={userRegistration.confirmpassword}
              onChange={handleInput}
            />
            <div style={{ textAlign: "center" }}>
              {validator.current.message(
                "confirmpassword",
                userRegistration.confirmpassword,
                "required|min:6"
              )}
            </div>
          </div>

          <p className="paragraph">
            <i>
              By clicking Register, you agree to our
              <Link className="terms">Terms and Conditions</Link>
            </i>
          </p>
          <button type="submit" className="Register-button">
            Register
          </button>
        </form>
      </div>
      {/* {records?.map((elem) => {
        return (
          <>
            <p>{elem.username}</p>
            <p>{elem.email}</p>
            <p>{elem.password}</p>
            <p>{elem.confirmpassword}</p>
          </>
        );
      })} */}
    </>
  );
};

export default Register;
