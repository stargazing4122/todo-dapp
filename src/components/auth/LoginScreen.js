import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/authActions';
import useForm from '../../hooks/useForm';
import { isFormValidOnLogin } from '../../utils/isFormValidOnLogin';

const LoginScreen = () => {
  const initialForm = {
    email: '',
    password: '',
  }
  //hooks
  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui );
  const {formValues, handleInput} = useForm(initialForm);
  const {email, password} = formValues;

  //functions
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if(isFormValidOnLogin(email, password)){
      dispatch(startLoginEmailPassword( email, password));
    }
  }
  return (
    <>
    <form className="auth-form" onSubmit={handleLogin}>
      <span className="auth-form__icon">
        <i className="fa-solid fa-user-lock"></i>
      </span>
      
      <h3 className="auth-form__title">LOGIN</h3>
      <input 
        type="text" 
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
      <button 
        type="submit"
        className="btn btn--secondary"
        disabled={loading}
      >
        {
          !loading
            ? 'Login Now'
            : 'Cargando...'
        }
        
      </button>

      <div 
        className="google-btn"
        onClick={handleGoogleLogin}
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
