import React from "react";

const RegisterForm = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecords = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    setRecords(...records, newRecords);
    console.log(records);
    setUserRegistration({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
