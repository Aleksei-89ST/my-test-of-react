import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";

const AppRouter = () => {
  const isAuth = true;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route} element={route.element} path={route.path} />
      ))}
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route} element={route.element} path={route.path} />
      ))}
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};
export default AppRouter;
