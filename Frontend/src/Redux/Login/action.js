import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL, // add this
} from "./actionType";

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `https://backend-mhwg.onrender.com/api/v1/user/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response?.data?.message });
  }
};

// Register
export const register =
  (name, mobileNumber, email, password) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `https://backend-mhwg.onrender.com/api/v1/user/register`,
        { name, mobileNumber, email, password },
        config
      );

      // Dispatch success
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });

      // Optional return for UI usage
      return { authenticated: true };
    } catch (error) {
      // Dispatch fail
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response?.data?.message || "Registration failed",
      });

      // Optional return for UI usage
      return { error: error.response?.data?.message || "Registration failed" };
    }
  };
