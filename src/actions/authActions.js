import { types } from "../types/types";

/* SYNCHRONOUS ACTIONS */
export const authLogin = (uid, name) => ({
  type: types.authLogin,
  payload: {
    uid,
    name,
  }
});

export const authLogout = () => ({
  type: types.authLogout,
})