import React from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <>
    <form className="auth-form">
      <span className="auth-form__icon">
        <i className="fa-solid fa-user-large"></i>
      </span>
      
      <h3 className="auth-form__title">LOGIN</h3>
      <input 
        type="text" 
        placeholder="Username o email" 
        className="auth-form__input"
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="auth-form__input"
      />
      <button 
        type="submit"
        className="btn btn--secondary"
        disabled={false}
      >Login Now
      </button>

      <div 
        className="google-btn"
      > 
        <div className="google-icon-wrapper">
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
        </div>
        <p className="btn-text">
            <b>Sign in with google</b>
        </p>
      </div>

      <div className="auth-register">
        <h4 className="auth-register__title">Not a member?</h4>
        <Link className="auth-register__link" to="/auth/register">Create account</Link>
      </div>
    </form>
    </>
  )
}

export default LoginScreen
