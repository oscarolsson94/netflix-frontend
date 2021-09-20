import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_ADMIN_URL,
});

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("auth/login", user);
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
