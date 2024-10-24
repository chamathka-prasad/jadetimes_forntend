import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Pages from "./routes/Pages";
import ScrollToTop from "./components/ScrollToTop";

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
      <Aside handleToggle={handleToggle} stopHandleToggle={stopHandleToggle} isNav={toggleMenu} isAside={toggleMenu} />
      <main className="2xl:overflow-x-hidden">
        <Suspense fallback>
          <ScrollToTop />
          <Routes>
            {Pages.map((page) => (
              <Route key={page.id} path={page.path} element={page.component} exact={page.exact} />
            ))}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
