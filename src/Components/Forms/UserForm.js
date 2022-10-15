import React from 'react'
import { useState } from 'react';
import './UserForm.scss'
import FunIcon from "../FunIcon";
import HorizontalLine from '../HorizontalLine';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function UserForm() {

  let [formType, setFormType] = useState("login")
  let [formAction, setFormAction] = useState("Sign in")
  let [formOption, setFormOption] = useState("Sign up")
  let [formStatus, setFormStatus] = useState("Not a member?")

  const changeFormHandler = () => {
    if (formType === "login") {
      formType = setFormType("register")
      formAction = setFormAction("Sign up")
      formOption = setFormOption("Sign in")
      formStatus = setFormStatus("Already a member?")
    } else {
      formType = setFormType("login")
      formAction = setFormAction("Sign in")
      formOption = setFormOption("Sign up")
      formStatus = setFormStatus("Not a member?")
    }
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
        <h2>{formAction}</h2>
        <p>Let your pet live its best life</p>

        <HorizontalLine lineColor="dark-green"/>

        {formType === "login" ? (
          <LoginForm />
        ) : (
          <RegistrationForm />
        )}

        <p className="mt-3 mb-0">{formStatus} <span className="text-click" onClick={changeFormHandler}>{formOption} now</span></p>
      </div>
    </div>
  )
}

export default UserForm;
