import axios from 'axios';
import { LOGIN, SIGNUP } from '../constants/actions';
import { SIGNUP_URL, LOGIN_URL } from '../constants/services';
import { UserType } from '../types/typeUser';


export const login = (username: string, password: string) => async dispatch => {
    try {
        const res = await axios.post(LOGIN_URL, { username, password });
        dispatch({ type: LOGIN, payload: res.data });
    } catch (e) {
        throw(e);
    }
};

export const signout = () => async dispatch => {

};

export const signup = (user: UserType) => async dispatch => {
  try {
      const res = await axios.post(SIGNUP_URL, { user });
      localStorage.setItem('auth:token', res.accessToken)

      dispatch({ type: SIGNUP, payload: user });
  } catch (e) {
      throw(e);
  }
};
