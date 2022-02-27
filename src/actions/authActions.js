import { types } from "../types/types";
import {auth, googleAuthProvider} from '../firebase/config';  
/* SYNCHRONOUS ACTIONS */
const authLogin = (uid, name) => ({
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
    auth.signInWithPopup(googleAuthProvider)
      .then( ({ user }) => {
        dispatch(authLogin(user.uid, user.displayName));
      })
      .catch(e => {
        console.log(e);
      })
  }
} 