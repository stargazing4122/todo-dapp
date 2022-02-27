import { types } from "../types/types";
import {auth, googleAuthProvider} from '../firebase/config'; 
import Swal from "sweetalert2";
import { uiRemoveLoading, uiSetLoading } from "./uiActions";

/* SYNCHRONOUS ACTIONS */
export const authLogin = (uid, name) => ({
  type: types.authLogin,
  payload: {
    uid,
    name,
  }
});

const authLogout = () => ({
  type: types.authLogout,
})

/* ASYNCHRONOUS ACTIONS */

export const startGoogleLogin = () => {
  return ( dispatch ) => {
    dispatch(uiSetLoading());
    auth.signInWithPopup(googleAuthProvider)
      .then( ({ user }) => {
        dispatch(authLogin(user.uid, user.displayName));
      })
      .catch(e => {
        console.log(e);
        Swal.fire('Error', e.message, 'error');
      })
      .finally( () => {
        dispatch(uiRemoveLoading());
      })
  }
} 

export const startLoginEmailPassword = (email, password) => {
  return ( dispatch) => {
    dispatch(uiSetLoading());

    auth.signInWithEmailAndPassword( email, password )
      .then( ({ user }) => {
        dispatch(authLogin(user.uid, user.displayName));
        Swal.fire('Sesión iniciada', 'Credenciales correctas', 'success');
      })
      .catch( e => {
        console.log(e);
        Swal.fire('Error', e.message, 'error');
      })
      .finally( () => {
        dispatch(uiRemoveLoading());
      })
  }
}

export const startRegisterWithEmailPasswordName = ( email, password, name) => {
  return ( dispatch ) => {
    auth.createUserWithEmailAndPassword( email, password)
      .then ( async({ user })=> {
        await user.updateProfile({ displayName: name});
        dispatch(authLogin(user.uid, user.displayName));
        Swal.fire('Registro exitoso', 'Sesión iniciada', 'success');
      })
      .catch( e => {
        console.log(e);
        Swal.fire('Error', e.message, 'error');
      })
  }
}

export const startLogout = () => {
  return ( dispatch ) => {
    auth.signOut()
      .then( () => {
        dispatch( authLogout() );
        Swal.fire('Sesión cerrada', 'Logout', 'success');
      })
      .catch(e => {
        console.log(e);
        Swal.fire('Error', e.message, 'error');
      })
  }
}
