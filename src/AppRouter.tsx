import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import React from "react";

const AppRouter = () => {
  return (
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/about'} element={<AboutMe />} />
              <Route path={'/projects'} element={<Projects />} />
          </Routes>
  );
};

export default AppRouter;