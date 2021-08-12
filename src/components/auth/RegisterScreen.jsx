import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startRegisterWithEmailPassword } from "../../actions/authActions";
import { deleteError, setError } from "../../actions/uiActions";
import useForm from "../../hooks/useForm";

import { Toaster } from "react-hot-toast";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ui);

  const [formValues, handleChange] = useForm({
    name: "Luis Vazquez",
    email: "luvazpa@gmail.com",
    password: "123456",
    password2: "123456",
  });
  const { name, email, password, password2 } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid())
      dispatch(startRegisterWithEmailPassword(email, password, name));
  };

  const isFormValid = () => {
    if (validator.isEmpty(name)) {
      dispatch(setError("Name is required"));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    }
    if (validator.isEmpty(password)) {
      dispatch(setError("Password is required"));
      return false;
    }
    if (password.trim().length < 6) {
      dispatch(setError("Password must have at least 6 characters"));
    }
    if (password.trim() !== password2.trim()) {
      dispatch(setError("Password must to be equals"));
      return false;
    }
    dispatch(deleteError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <Toaster />

      <form onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          autoComplete="off"
          onChange={handleChange}
          value={name}
        />
        <input
          className="auth__input"
          type="email"
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
        <input
          className="auth__input"
          type="password"
          name="password2"
          id="password2"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={password2}
        />
        <button
          className="btn btn-primary btn-block mb-5"
          type="submit"
          disabled={state.isLoading}
        >
          Register
        </button>

        <Link className="link" to="/auth/login">
          Already register
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
