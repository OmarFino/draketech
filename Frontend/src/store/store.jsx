import { logger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import RootSaga from "./sagas";
import rootReducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const Middlewares = () => {
  let middleware = [sagaMiddleware];
  if (true === true) middleware = [sagaMiddleware, logger];
  return middleware;
};

const Store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: Middlewares(),
});

export default Store;

sagaMiddleware.run(RootSaga);
