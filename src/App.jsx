import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

import Pages from "./routes/Pages";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  }

  function stopHandleToggle(event) {
    event.stopPropagation();
  }

  return (
    <>
      <Header handleToggle={handleToggle} />
      <Aside
        handleToggle={handleToggle}
        stopHandleToggle={stopHandleToggle}
        isNav={toggleMenu}
        isAside={toggleMenu}
      />
      <main>
        <Routes>
          {Pages.map((page) => (
            <Route
              key={page.id}
              path={page.path}
              element={page.component}
              exact={page.exact}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
