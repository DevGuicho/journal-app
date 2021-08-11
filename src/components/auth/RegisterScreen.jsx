import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          className="auth__input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          id="password"
          placeholder="**********"
        />
        <input
          className="auth__input"
          type="password2"
          name="password2"
          id="password2"
          placeholder="Confirm Password"
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
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
