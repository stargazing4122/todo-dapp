import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRegisterWithEmailPasswordName } from '../../actions/authActions'
import useForm from '../../hooks/useForm'
import { isFormValidRegister } from '../../utils/isFormValidOnRegister'

const RegisterScreen = () => {
  const initialForm = {
    email: '',
    password: '',
    password2: '',
    name: '',
  }
  //hooks
  const {formValues, handleInput} = useForm(initialForm) ;
  const {email, password, password2, name} = formValues;
  const dispatch = useDispatch();

  //functions
  const handleRegister = (e) => {
    e.preventDefault();
    if(isFormValidRegister(email, password, password2, name)){
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }

  }
  return (
    <>
    <form className="auth-form" onSubmit={handleRegister}>
      <span className="auth-form__icon">
        <i className="fa-solid fa-user-plus"></i>
      </span>
      
      <h3 className="auth-form__title">REGISTER</h3>
      <input 
        type="email" 
        placeholder="Email" 
        className="auth-form__input"
        name="email"
        value={email}
        onChange={handleInput}
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="auth-form__input"
        name="password"
        value={password}
        onChange={handleInput}
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        className="auth-form__input"
        name="password2"
        value={password2}
        onChange={handleInput}
      />
      <input 
        type="text" 
        placeholder="Name" 
        className="auth-form__input"
        name="name"
        value={name}
        onChange={handleInput}
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
