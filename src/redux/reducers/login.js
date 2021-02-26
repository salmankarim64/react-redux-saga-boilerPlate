import * as type from "./types";

const initialState = {};

export default function login(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return {
        state,
      };
  }
}
