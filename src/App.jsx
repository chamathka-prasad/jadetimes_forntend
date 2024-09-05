import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer"
import PagesRoutes from "./routes/Pages";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleToggleStop = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <Header handleToggle={handleToggle} />
      <Aside
        handleToggle={handleToggle}
        handleToggleStop={handleToggleStop}
        navClassName={toggleMenu && "visible translate-x-0"}
        asideClassName={toggleMenu && "visible opacity-100"}
      />
      <Routes>
        {PagesRoutes.map(page => (
          <Route
            key={page.id}
            path={page.path}
            element={page.component}
            exact={page.exact}
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
