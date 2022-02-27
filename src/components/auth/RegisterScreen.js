import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <>
    <form className="auth-form">
      <span className="auth-form__icon">
        <i className="fa-solid fa-user-plus"></i>
      </span>
      
      <h3 className="auth-form__title">REGISTER</h3>
      <input 
        type="email" 
        placeholder="Email" 
        className="auth-form__input"
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="auth-form__input"
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        className="auth-form__input"
      />
      <input 
        type="text" 
        placeholder="Name" 
        className="auth-form__input"
      />
      <button 
        type="submit"
        className="btn btn--secondary"
        disabled={false}
      >Sing up
      </button>

      <div className="auth-register">
        <h4 className="auth-register__title">Already registered?</h4>
        <Link className="auth-register__link" to="/auth/login">Sing in</Link>
      </div>
    </form>
    </>
  )
}

export default RegisterScreen
