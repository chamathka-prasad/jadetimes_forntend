import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

// const Home = lazy(() => new Promise((res) => setTimeout(() => res(import("./pages/Home")), 3000)));
const Home = lazy(() => import("./pages/Home"));
const Membership = lazy(() => import("./pages/Membership"));
const Search = lazy(() => import("./pages/Search"));
const PagesHome = lazy(() => import("./pages/PagesHome"));
const News = lazy(() => import("./pages/news/News"));
const IsraelGazaWar = lazy(() => import("./pages/news/IsraelGazaWar"));
const UkraineRussiaWar = lazy(() => import("./pages/news/UkraineRussiaWar"));
const Usa = lazy(() => import("./pages/news/Usa"));
const Europe = lazy(() => import("./pages/news/Europe"));
const Australia = lazy(() => import("./pages/news/Australia"));
const Africa = lazy(() => import("./pages/news/Africa"));
const Asia = lazy(() => import("./pages/news/Asia"));
const Business = lazy(() => import("./pages/Business"));
const Sports = lazy(() => import("./pages/sports/Sports"));
const Wwe = lazy(() => import("./pages/sports/Wwe"));
const Cricket = lazy(() => import("./pages/sports/Cricket"));
const Travel = lazy(() => import("./pages/Travel"));
const Culture = lazy(() => import("./pages/Culture"));
const Entertainment = lazy(() => import("./pages/Entertainment"));
const Innovation = lazy(() => import("./pages/innovation/Innovation"));
const Technology = lazy(() => import("./pages/innovation/Technology"));
const Political = lazy(() => import("./pages/Political"));
const Universe = lazy(() => import("./pages/Universe"));
const Fashion = lazy(() => import("./pages/Fashion"));
const Health = lazy(() => import("./pages/Health"));
const Opinion = lazy(() => import("./pages/opinion/Opinion"));
const Editorials = lazy(() => import("./pages/opinion/Editorials"));
const AdvertiseWithUs = lazy(() => import("./pages/AdvertiseWithUs"));
const TalkToUs = lazy(() => import("./pages/TalkToUs"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PrivacyPolicies = lazy(() => import("./pages/PrivacyPolicies"));
const Careers = lazy(() => import("./pages/Careers"));
const CookiesPolicies = lazy(() => import("./pages/CookiesPolicies"));
const Faq = lazy(() => import("./pages/Faq"));
const Shop = lazy(() => import("./pages/Shop"));
const PostsHome = lazy(() => import("./pages/PostsHome"));
const Post = lazy(() => import("./pages/Post"));
const Team = lazy(() => import("./pages/Team"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <>
      <Header />
      <main className="text-neutral-900 2xl:overflow-x-hidden">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/search" element={<Search />} />
            <Route path="/news" element={<PagesHome item="1" />}>
              <Route index element={<News />} />
              <Route path="/news/israel-gaza-war" element={<IsraelGazaWar />} />
              <Route path="/news/ukraine-russia-war" element={<UkraineRussiaWar />} />
              <Route path="/news/usa" element={<Usa />} />
              <Route path="/news/europe" element={<Europe />} />
              <Route path="/news/australia" element={<Australia />} />
              <Route path="/news/africa" element={<Africa />} />
              <Route path="/news/asia" element={<Asia />} />
            </Route>
            <Route path="/business" element={<Business />} />
            <Route path="/sports" element={<PagesHome item="3" />}>
              <Route index element={<Sports />} />
              <Route path="/sports/wwe" element={<Wwe />} />
              <Route path="/sports/cricket" element={<Cricket />} />
            </Route>
            <Route path="/travel" element={<Travel />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/innovation" element={<PagesHome item="7" />}>
              <Route index element={<Innovation />} />
              <Route path="/innovation/technology" element={<Technology />} />
            </Route>
            <Route path="/political" element={<Political />} />
            <Route path="/universe" element={<Universe />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/health" element={<Health />} />
            <Route path="/opinion" element={<PagesHome item="12" />}>
              <Route index element={<Opinion />} />
              <Route path="/opinion/editorials" element={<Editorials />} />
            </Route>
            <Route path="/advertise-with-us" element={<AdvertiseWithUs />} />
            <Route path="/talk-to-us" element={<TalkToUs />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicies />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/cookies-policy" element={<CookiesPolicies />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/posts" element={<PostsHome />}>
              <Route path="/posts/:post" element={<Post />} />
            </Route>
            <Route path="/team" element={<Team />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
