import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { setUserToken, setLoginInfos } from "../features/user/userSlice";
import { useForm } from 'react-hook-form'
import "../style/SignIn.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm()
  const submitForm = (data) => {
    Axios.post("http://localhost:3001/api/v1/user/login", data)
      .then((response) => {
        dispatch(setLoginInfos(data));
        dispatch(setUserToken(response.data.body.token));
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        console.error("Cet identifiant ou ce mot de passe est inconnu, veuillez réessayer.");
      });
  }

  return (
    <React.Fragment>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username"
                {...register('email')}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register('password')}
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
};

export default SignIn;
