import React from 'react'
import { useState } from 'react';
import './UserForm.scss'
import FunIcon from "../FunIcon";
import HorizontalLine from '../HorizontalLine';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function UserForm() {

  const [loginForm, setLoginForm] = useState(true)

  const changeFormHandler = () => {
    setLoginForm(!loginForm)
  }

  return (
    <div className="user-form d-flex justify-content-between align-items-center my-4">
      <div className="user-form-left d-flex flex-column justify-content-center align-items-start p-2">
        <img src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
      </div>
      <div className="user-form-right d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <FunIcon />
          <h1 className="ms-2 mb-0">PetsPlay</h1>
        </div>
        <h2>{loginForm ? "Sign in" : "Sign up"}</h2>
        <p>Let your pet live its best life</p>

        <HorizontalLine lineColor="dark-green"/>

        {loginForm ? (<LoginForm />) : (<RegistrationForm />)}

        <p className="mt-3 mb-0">{loginForm ? "Not a member?" : "Already a member?"} <span className="text-click" onClick={changeFormHandler}>{loginForm ? "Sign up" : "Sign in"} now</span></p>
      </div>
    </div>
  )
}

export default UserForm;
