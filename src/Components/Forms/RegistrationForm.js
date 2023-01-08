import React from 'react';
import axios from "axios";
import { useState } from 'react';
import SubmitButton from '../SubmitButton';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RegistrationForm() {
  const [passwordShown, setPasswordShown] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const showPassword = () => {
    setPasswordShown(!passwordShown)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value)
  }

  const notify = (type, message) => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    }
  }

  const submitRegistrationForm = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/registrations", {
      "user": {
        "email": email,
        "password": password,
        "password_confirmation": passwordConfirmation
      }
    }).then(res => {
      if (res.data.user_logged_in === true) {
        setUserLoggedIn(true)
        setEmail("")
        setPassword("")
        setPasswordConfirmation("")
        notify('success', res.data.message)
      } else {
        setUserLoggedIn(false)
        notify('error', res.data.message)
      }
    }).catch(error => {
      setUserLoggedIn(false)
      notify('error', "Oops, something went wrong. Please refresh and try again.")
    })
  }

  return (
    <>
      <form
        className="d-flex flex-column justify-content-start align-items-center"
        onSubmit={submitRegistrationForm}
      >

        <div className="form-group mb-3">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <div className="d-flex justify-content-between align-items-center">
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              required
              onChange={handleEmailChange}
            />
            <FontAwesomeIcon icon={faAt} size="lg" className="p-1" />
          </div>
        </div>

        <div className="form-group mb-3">
          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <div className="d-flex justify-content-between align-items-center">
            <input
              type={passwordShown ? 'text' : 'password'}
              className="form-control"
              id="password"
              value={password}
              required
              onChange={handlePasswordChange}
            />
            <FontAwesomeIcon
              icon={faEye}
              size="lg"
              className="active-icon p-1"
              onClick={showPassword}
            />
          </div>
        </div>

        <div className="form-group mb-3">
          <label className="mb-2" htmlFor="password_confirmation">
            Password Confirmation
          </label>
          <div className="d-flex justify-content-between align-items-center">
            <input
              type="password"
              className="form-control"
              id="password_confirmation"
              value={passwordConfirmation}
              required
              onChange={handlePasswordConfirmationChange}
            />
            <FontAwesomeIcon icon={faLock} size="lg" className="p-1" />
          </div>
        </div>

        <SubmitButton />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
        />
    </>
  )
}

export default RegistrationForm
