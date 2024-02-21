import { USER_LOGIN } from "../actions/login.action";

const initialState = {};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    default:
      return state;
  }
}
