import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const login = async (dispatch, user, path) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(path, user);
    if(res.status == 200) {
      cookies.set('username', user.username, { path: '/' })
      console.log('a', cookies.get('username')); 
      window.location.href = "/";
    } else {
      
    }  
    // console.log(res.status)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
