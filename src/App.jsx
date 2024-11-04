import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

import Pages from "./routes/Pages";

import useOpen from "./hooks/useOpen";

const App = () => {
  const [isMenu, handleMenuOpen, handleMenuClose] = useOpen();

  return (
    <>
      <Header handleMenuOpen={handleMenuOpen} />
      <Aside handleMenuClose={handleMenuClose} isMenu={isMenu} />
      <main className="2xl:overflow-x-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {Pages.map((page) => (
              <Route key={page.id} path={page.path} element={page.component}>
                {page.subpages && page.subpages.map((subpage) => <Route key={subpage.id} path={subpage.path} element={subpage.component} />)}
              </Route>
            ))}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
