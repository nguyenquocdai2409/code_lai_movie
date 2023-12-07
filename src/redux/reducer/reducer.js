import { USER_LOGIN } from "../constant/constant";

const initialState = {
  userLogin: JSON.parse(localStorage.getItem("USER_LOGIN")),
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      state.userLogin = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
