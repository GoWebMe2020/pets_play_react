import React from 'react'
import { useState } from 'react'
import SubmitButton from '../SubmitButton';
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RegistrationForm() {

  const [passwordShown, setPasswordShown] = useState(false);

  const showPassword = () => {
    console.log("Eye clicked")
    setPasswordShown(!passwordShown)
  }

  return (
    <form className="d-flex flex-column justify-content-start align-items-center" action="">
      <div className="form-group mb-3">
        <label className="mb-2" htmlFor="email">Email</label>
        <div className="d-flex justify-content-between align-items-center">
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
          <FontAwesomeIcon icon={faAt} size="lg" className='p-1'/>
        </div>
      </div>

      <div className="form-group mb-3">
        <label className="mb-2" htmlFor="password">Password</label>
        <div className="d-flex justify-content-between align-items-center">
          <input type={passwordShown ? "text" : "password"} className="form-control" id="password" required/>
          <FontAwesomeIcon icon={faEye} size="lg" className='active-icon p-1' onClick={showPassword} />
        </div>
      </div>

      <div className="form-group mb-3">
        <label className="mb-2" htmlFor="password_confirmation">Password Confirmation</label>
        <div className="d-flex justify-content-between align-items-center">
          <input type="password" className="form-control" id="password_confirmation" required/>
          <FontAwesomeIcon icon={faLock} size="lg" className='p-1'/>
        </div>
      </div>

      <SubmitButton />

    </form>
  )
}

export default RegistrationForm
