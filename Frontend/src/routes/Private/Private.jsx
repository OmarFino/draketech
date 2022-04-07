import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Loading from "../../components/Loading/Loading";
import Layouting from "../../components/Layout/Layout";

const Products = lazy(() => import("../../views/Private/Products/Products"));
const Error404 = lazy(() => import("../../components/Error404/Error404"));

const Private = () => (
  <BrowserRouter>
    <Layouting>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Layouting>
  </BrowserRouter>
);

export default Private;
