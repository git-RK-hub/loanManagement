import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin, userLogout, getRegForm } from "../store/actions";
import RegistrationForm from "./RegistrationForm";
import Loader from "./Loader";

// Login form
export const LoginForm = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { loading, userInfo, error } = user;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  const showRegisterFormHandler = () => {
    dispatch(getRegForm());
  };

  const logoutHandler = () => {
    dispatch(userLogout());
  };

  return (
    <div className="form">
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={submitHandler} className="login-form">
          {error && <div className="errorDiv">{error}</div>}
          {userInfo && (
            <>
              <div className="welcome">Welcome, {userInfo.name}</div>
              <div className="button" id="logoutBtn" onClick={logoutHandler}>
                Logout
              </div>
            </>
          )}
          {!userInfo && (
            <>
              <div className="input-box">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="underline"></div>
                <label>
                  <span>Email</span>
                </label>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="underline"></div>

                <label>
                  <span>Password</span>
                </label>
              </div>
              <button className="button" id="loginBtn">
                Login
              </button>
              {!userInfo && (
                <div
                  className="btnToRegister"
                  onClick={showRegisterFormHandler}
                >
                  <p>New User ?</p>
                </div>
              )}
            </>
          )}
        </form>
      )}
    </div>
  );
};

const Login = (props) => {
  const user = useSelector((state) => state.user);
  const { showRegForm } = user;
  return (
    <section className="login-container" id="login">
      <div className="login-container__text">
        <div className="text">
          <h1>
            GET PERSONAL LOANS FASTER WITH OUR <span>SIMPLE APPLICATION </span>
            PROCESS
          </h1>
          <p>
            Availability of personal loans for salaried individual depend on job
            stability, income, age, work experience, and CIBIL score.
          </p>
        </div>
      </div>
      {showRegForm ? <RegistrationForm /> : <LoginForm />}
    </section>
  );
};

export default Login;
