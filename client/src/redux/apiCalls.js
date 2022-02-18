import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user, path) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(path, user);
    if(res.status == 200) {
      window.location.href = "/";
    }         
    // console.log(res.status)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
