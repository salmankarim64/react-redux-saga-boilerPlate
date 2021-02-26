import * as type from "../reducers/types";

export function getLogin(users) {
  return {
    type: type.LOGIN,
    payload: users,
  };
}
