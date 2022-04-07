import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Loading from "../../components/Loading/Loading";

const Login = lazy(() => import("../../views/Public/Login/Login"));
const Register = lazy(() => import("../../views/Public/Resgister/Register"));
const Error404 = lazy(() => import("../../components/Error404/Error404"));

const Public = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Public;
