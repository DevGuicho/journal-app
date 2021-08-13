import React from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../actions/authActions";

import useForm from "../../hooks/useForm";

const LoginScreen = () => {
  const [formValues, handleChange] = useForm({
    email: "luvazpa@gmail.com",
    password: "123456",
  });

  const dispatch = useDispatch();
  const state = useSelector((state) => state.ui);
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <Toaster />
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleLogin}
      >
        <input
          className="auth__input"
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          autoComplete="off"
          onChange={handleChange}
          value={email}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          id="password"
          placeholder="**********"
          onChange={handleChange}
          value={password}
        />
        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={state.isLoading}
        >
          Login
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>Login With social network</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/auth/register">
          Create new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
