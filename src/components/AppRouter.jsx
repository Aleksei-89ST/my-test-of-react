import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
export default AppRouter;
