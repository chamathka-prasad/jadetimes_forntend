import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const News = lazy(() => import("../pages/News"));
const Business = lazy(() => import("../pages/Business"));
const Sports = lazy(() => import("../pages/Sports"));
const Travel = lazy(() => import("../pages/Travel"));
const Culture = lazy(() => import("../pages/Culture"));
const Entertainment = lazy(() => import("../pages/Entertainment"));
const Innovation = lazy(() => import("../pages/Innovation"));
const Political = lazy(() => import("../pages/Political"));
const Universe = lazy(() => import("../pages/Universe"));
const Fashion = lazy(() => import("../pages/Fashion"));
const Search = lazy(() => import("../pages/Search"));
const Login = lazy(() => import("../pages/Login"));
const Membership = lazy(() => import("../pages/Membership"));
const AdvertiseWithUs = lazy(() => import("../pages/AdvertiseWithUs"));
const TalkToUs = lazy(() => import("../pages/TalkToUs"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Pages = [
  {
    id: 0,
    path: "/",
    component: <Home />,
    exact: true,
  },
  {
    id: 1,
    path: "/news",
    component: <News />,
  },
  {
    id: 2,
    path: "/business",
    component: <Business />,
  },
  {
    id: 3,
    path: "/sports",
    component: <Sports />,
  },
  {
    id: 4,
    path: "/travel",
    component: <Travel />,
  },
  {
    id: 5,
    path: "/culture",
    component: <Culture />,
  },
  {
    id: 6,
    path: "/entertainment",
    component: <Entertainment />,
  },
  {
    id: 7,
    path: "/innovation",
    component: <Innovation />,
  },
  {
    id: 8,
    path: "/political",
    component: <Political />,
  },
  {
    id: 9,
    path: "/universe",
    component: <Universe />,
  },
  {
    id: 10,
    path: "/fashion",
    component: <Fashion />,
  },
  {
    id: 11,
    path: "/search",
    component: <Search />,
  },
  {
    id: 12,
    path: "/log-in",
    component: <Login />,
  },
  {
    id: 13,
    path: "/membership",
    component: <Membership />,
  },
  {
    id: 14,
    path: "/advertise-with-us",
    component: <AdvertiseWithUs />,
  },
  {
    id: 15,
    path: "/talk-to-us",
    component: <TalkToUs />,
  },
  {
    id: 16,
    path: "*",
    component: <NotFound />,
  },
];

export default Pages;