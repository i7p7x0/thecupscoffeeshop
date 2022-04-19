import { AUTHENTICATION } from "../actions/Authentication";

const initialState = {
  isLoggedIn: false,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      state = {
        isLoggedIn: action.isLoggedIn,
      };
      break;
    default:
      break;
  }
  return state;
};
