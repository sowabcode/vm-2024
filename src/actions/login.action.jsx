import axios from "axios";

const VM_AUTH = import.meta.env.VITE_VM_AUTH;

export const USER_LOGIN = "USER_LOGIN";

export const userLogin = (loginData) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${VM_AUTH}/user/login`, loginData);
      dispatch({ type: USER_LOGIN, payload: result.data });
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
};
