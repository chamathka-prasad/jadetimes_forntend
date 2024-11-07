import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Login from "./components/Login";

import pages from "./routes/pages";

import useOpen from "./hooks/useOpen";

const App = () => {
  const [isMenu, handleMenuOpen, handleMenuClose] = useOpen();
  const [isLogin, handleLoginOpen, handleLoginClose] = useOpen();

  return (
    <>
      <Header handleMenuOpen={handleMenuOpen} handleLoginOpen={handleLoginOpen} />
      <Aside handleMenuClose={handleMenuClose} handleLoginOpen={handleLoginOpen} isMenu={isMenu} />
      <main className="2xl:overflow-x-hidden">
        <Suspense fallback>
          <Routes>
            {pages.map((page) => (
              <Route key={page.id} path={page.path} element={page.component}>
                {page.subpages && page.subpages.map((subpage) => <Route key={subpage.id} path={subpage.path} element={subpage.component} />)}
              </Route>
            ))}
          </Routes>
        </Suspense>
      </main>
      <Footer />
      {isLogin && <Login handleLoginClose={handleLoginClose} />}
    </>
  );
};

export default App;
