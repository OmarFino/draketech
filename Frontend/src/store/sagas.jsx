import { fork, all } from "redux-saga/effects";

import loginSaga from "../services/authSaga";

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
}
