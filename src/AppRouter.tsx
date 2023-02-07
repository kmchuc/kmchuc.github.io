import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import React from "react";

const AppRouter = () => {
  return (
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/about'} element={<AboutMe />} />
              <Route path={'/projects'} element={<Projects />} />
              <Route path={'/contact'} element={<Contact />} />
          </Routes>
  );
};

export default AppRouter;