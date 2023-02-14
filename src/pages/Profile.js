import React from "react";
import { useState, useEffect } from "react";

import Axios from "axios";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  setUserFirstName,
  setUserLastName,
  setLogout,
} from "../features/user/userSlice";

import { useForm } from "react-hook-form";
import Account from "components/Account";

const User = () => {
  const loginInfos = useSelector((state) => state.user.loginInfos);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updatingName, setUpdatingName] = useState("false");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { register, handleSubmit } = useForm();

  const userData = [
    {
      title: "Argent Bank Checking (x8349)",
      balance: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      balance: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      balance: "$184.30",
      description: "Current Balance",
    },
  ];

  const accountCard = () => {
    return userData.map((data) => {
      const title = data.title;
      const balance = data.balance;
      const description = data.description;

      return (
        <Account
          key={title}
          title={title}
          balance={balance}
          description={description}
        ></Account>
      );
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Receive user data on first login:
  const getUserData = () => {
    Axios.post("http://localhost:3001/api/v1/user/profile", loginInfos, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setFirstName(response.data.body.firstName);
        dispatch(setUserFirstName(response.data.body.firstName));
        setLastName(response.data.body.lastName);
        dispatch(setUserLastName(response.data.body.lastName));
      })
      .catch(function (error) {
        console.error("Token incorrect.");
        console.log(error);
      });
  };

  let name = firstName + " " + lastName + "!";

  const handleChangeUserName = (data) => {
    const name = data.name;
    const lastname = data.lastname;

    setFirstName(name);
    dispatch(setUserFirstName(name));

    setLastName(lastname);
    dispatch(setUserLastName(lastname));

    updateUser(name, lastname);
    setUpdatingName(!updatingName);
  };

  const updateUser = (name, lastname) => {
    const user = {
      firstName: name,
      lastName: lastname,
    };

    Axios.put("http://localhost:3001/api/v1/user/profile", user, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <main className="main bg-dark">
      <form className="form" onSubmit={handleSubmit(handleChangeUserName)}>
        <h1>
          Welcome back
          <br />
          {name}
        </h1>
        <div className="inputs">
          <div className="input-wrapper">
            <input
              type="text"
              id="username"
              placeholder="name"
              {...register("name")}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              id="lastname"
              placeholder="lastname"
              {...register("lastname")}
              required
            />
          </div>
        </div>
        <button className="sign-in-button profile">Edit Name</button>
      </form>
      {accountCard()}
    </main>
  );
};

export default User;
