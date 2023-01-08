import React from 'react'
import './SubmitButton.scss'

function SubmitButton(props) {
  return (

    <button
      type={props.type}
      className={'d-flex justify-content-center align-items-center shadow-lg'}
      id="submit-button"
      disabled={props.disabled}
    >
      Submit
    </button>
  )
}

export default SubmitButton
