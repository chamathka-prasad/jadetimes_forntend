import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import pages from "./routes/pages";

import useYouTubeShorts from "./hooks/useYouTubeShorts";

const App = () => {
  // useYouTubeShorts();
  return (
    <>
      <Header />
      <main className="text-neutral-900 2xl:overflow-x-hidden">
        <Suspense fallback={<div>Loading...</div>}>
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
    </>
  );
};

export default App;
