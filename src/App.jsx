import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Pages from "./routes/Pages";

import ImageSlider from "./components/ImageSlider";
import Articles from "./routes/Articles";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
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
        navClassName={toggleMenu}
        asideClassName={toggleMenu}
      />
      <main>
        {/* <Routes>
          {Pages.map(page => (
            <Route
              key={page.id}
              path={page.path}
              element={page.component}
              exact={page.exact}
            />
          ))}
        </Routes> */}
        <ImageSlider articles={Articles.slice(0, 3)} />
      </main>
      <Footer />
    </>
  );
};

export default App;
