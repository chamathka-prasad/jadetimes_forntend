import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Pages from "./routes/Pages";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu() {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  }

  return (
    <>
      <Header onToggleMenu={handleToggleMenu} />
      <Aside onToggleMenu={handleToggleMenu} isToggleMenu={toggleMenu} />
      <main className="2xl:overflow-x-hidden">
        <ScrollToTop />
        <Routes>
          {Pages.map((page) => (
            <Route key={page.id} path={page.path} element={<Suspense fallback={<div>Loading...</div>}>{page.component}</Suspense>} exact={page.exact} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
