import { createSelector } from "reselect";

const userInfo = (state) => state.login;

export const userData = createSelector(userInfo, (data) => data.get("users"));
