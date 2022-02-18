import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import Cookies from 'js-cookie';

export const login = async (dispatch, user, path) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(path, user);
    if(res.status == 200) {
      Cookies.set('username', res.body.username)
      window.location.href = "/";
    }         
    // console.log(res.status)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
