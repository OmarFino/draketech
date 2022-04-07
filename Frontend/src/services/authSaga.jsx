import { put, takeLatest, all } from "redux-saga/effects";

import { loginPending, loginSuccess, loginFailed } from "./authSlice";

import { DATA_USERS } from "../helpers/dummy";
import { message } from "antd";
import axios from 'axios';
import qs from 'qs';


function* fakeLogin({ payload }) {
   axios.get('http://localhost:4000/login/login',{
    body: {
       emailUser:payload.email, 
       password:payload.password
    }
  })
   .then((response) => {
     console.log("aaaa")
     console.log(response)
   })
   .catch((error) => {
     console.log(error);
     console.log(payload.email)
  });


  const validUser = data.find(
    (e) => e.emailUser === payload.email && e.password === payload.password
  );
  console.log(validUser);
  if (validUser) {
    message.success("Inicio de sesión exitoso");
    yield put(loginSuccess({ token: validUser.token, user: validUser.user }));
  } else {
    message.error("No existe ese usuario, en nuestra base de datos");
    yield put(
      loginFailed({ error: "No existe ese usuario, en nuestra base de datos" })
    );
  }
}

function* ActionWatcher() {
  yield takeLatest(loginPending, fakeLogin);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}
