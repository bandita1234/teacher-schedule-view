import React, { useState } from "react";
import "../css/main.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // console.log(form.username);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Use this for correct login
    const correctUsername = "johndoe";
    const correctPassword = "123456";

    if (
      form.username === correctUsername &&
      form.password === correctPassword
    ) {

      navigate("/schedule");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div className="signup_main">
        <div className="signup_container">
          <div className="header">LOGIN</div>
          <div className="inputbox">
            <input
              type="text"
              name="username"
              id=""
              required
              autoComplete="off"
              value={form.username}
              onChange={(e) => handleChange(e)}
            />
            <span>Username</span>
            <hr />
          </div>
          <div className="inputbox">
            <input
              type="password"
              name="password"
              id=""
              required
              value={form.password}
              onChange={(e) => handleChange(e)}
            />
            <span>Password</span>
            <hr />
          </div>
          <div className="btn_div">
            <button
              style={{ marginTop: "30px" }}
              className="signup_btn"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
