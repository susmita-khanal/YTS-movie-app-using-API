import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  // const [RegisterOpen, setRegisterOpen] = useState(false);
  //   const handleClose = () => {
  //     props.setIsModalOpen(false);
  //   };

  const onSubmits = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  return (
    <>
      <form onSubmit={onSubmits}>
        <div className="username">
          <i className="icon fas fa-user"></i>
          <input
            className="input"
            type="text"
            placeholder="UserName or Email"
            // autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <i className="icon fas fa-lock"></i>
          <input
            className="input"
            type="password"
            placeholder="password"
            // autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div className="login-button">Login</div> */}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {allEntry?.map((elem) => {
        return (
          <>
            <p>{elem.email}</p>
            <p>{elem.password}</p>
          </>
        );
      })}
    </>
  );
};

export default LoginForm;
