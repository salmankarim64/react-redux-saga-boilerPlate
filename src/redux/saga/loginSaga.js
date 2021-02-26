import { call, put, takeEvery } from "redux-saga/effects";

import * as api from "../api";

function* checkLogin(params) {
  try {
    const data = yield call(api.getLogin());
    yield put({ type: "LOGIN_SUCCESS", data });
  } catch (error) {
    yield put({ type: "LOGIN_FAIL", message: error });
  }
}

function* loginSaga() {
  yield takeEvery("LOGIN", checkLogin);
}

export default loginSaga;
