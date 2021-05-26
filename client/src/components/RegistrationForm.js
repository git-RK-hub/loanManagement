import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideRegForm, userRegister, userLogout } from "../store/actions";
import Loader from "./Loader";

const RegistrationForm = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [contact, setContact] = useState("");
  let [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { loading, userInfo, error } = user;

  const hideRegisterationFormHandler = () => {
    dispatch(hideRegForm());
  };
  const logoutHandler = () => {
    dispatch(userLogout());
  };
  const registerUserHandler = (event, obj) => {
    event.preventDefault();
    dispatch(userRegister(obj));
  };

  return (
    <div className="form">
      {loading ? (
        <Loader />
      ) : (
        <form
          onSubmit={(event) =>
            registerUserHandler(event, {
              name,
              email,
              password,
              contact,
              address,
            })
          }
          className="register-form"
        >
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
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <div className="underline"></div>
                <label>
                  <span>Name</span>
                </label>
              </div>
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
                  type="text"
                  name="email"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
                <div className="underline"></div>
                <label>
                  <span>Contact no.</span>
                </label>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <div className="underline"></div>
                <label>
                  <span>Address</span>
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
              <button className="button" id="regBtn">
                Register
              </button>
              <div
                className="btnToLogin"
                onClick={hideRegisterationFormHandler}
              >
                <p>Login</p>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
