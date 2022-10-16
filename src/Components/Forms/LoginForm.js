import React from 'react'
import SubmitButton from '../SubmitButton'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LoginForm() {
  return (
    <form
      className="d-flex flex-column justify-content-start align-items-center"
      action=""
    >
      <div className="form-group mb-4">
        <label className="mb-2" htmlFor="email">
          Email
        </label>

        <div className="d-flex justify-content-between align-items-center">
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
          />
          <FontAwesomeIcon icon={faAt} size="lg" className="p-1" />
        </div>
      </div>

      <div className="form-group mb-4">
        <label className="mb-2" htmlFor="password">
          Password
        </label>
        <div className="d-flex justify-content-between align-items-center">
          <input
            type="password"
            className="form-control"
            id="password"
            required
          />
          <FontAwesomeIcon icon={faLock} size="lg" className="p-1" />
        </div>
      </div>

      <SubmitButton />
    </form>
  )
}

export default LoginForm
