import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Pages from "./pages/Pages";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Membership from "./pages/Membership";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import News from "./pages/News";
import PagesHome from "./pages/PagesHome";
import Sports from "./pages/Sports";
import Innovation from "./pages/Innovation";

const App = () => {
  return (
    <>
      <Header />
      <main className="text-neutral-900 2xl:overflow-x-hidden">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/search" element={<Search />} />
            <Route path="/news" element={<PagesHome item="1" />}>
              <Route index element={<News />} />
              <Route path=":page" element={<Pages />} />
            </Route>
            <Route path="/sports" element={<PagesHome item="3" />}>
              <Route index element={<Sports />} />
              <Route path=":page" element={<Pages />} />
            </Route>
            <Route path="/innovation" element={<PagesHome item="7" />}>
              <Route index element={<Innovation />} />
              <Route path=":page" element={<Pages />} />
            </Route>
            <Route path="/:page" element={<Pages />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:product" element={<Product />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
