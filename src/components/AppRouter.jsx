import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import About from "../pages/About";
// import Error from "../pages/Error";
// import Login from "../pages/Login";
// import PostIdPage from "../pages/PostIdPage";
// import Posts from "../pages/Posts";
import { privateRoutes } from "../router/routes";

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map(route => 
        <Route key={route} element={route.element} path={route.path} />
        )}
    {/* <Route path="/posts" element={<Posts />} />
    <Route path="/about" element={<About />} />
    <Route path="/posts/:id" element={<PostIdPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Error />} /> */}
    <Route path="/" element={<Navigate to="/error" />} />
  </Routes>
  );
};
export default AppRouter;
