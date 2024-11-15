import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const News = lazy(() => import("../pages/news/News"));
const NewsHome = lazy(() => import("../pages/news/NewsHome"));
const IsraelGazaWar = lazy(() => import("../pages/news/IsraelGazaWar"));
const UkraineRussiaWar = lazy(() => import("../pages/news/UkraineRussiaWar"));
const Usa = lazy(() => import("../pages/news/Usa"));
const Europe = lazy(() => import("../pages/news/Europe"));
const Australia = lazy(() => import("../pages/news/Australia"));
const Africa = lazy(() => import("../pages/news/Africa"));
const Asia = lazy(() => import("../pages/news/Asia"));
const Business = lazy(() => import("../pages/Business"));
const Sports = lazy(() => import("../pages/sports/Sports"));
const SportsHome = lazy(() => import("../pages/sports/SportsHome"));
const Wwe = lazy(() => import("../pages/sports/Wwe"));
const Cricket = lazy(() => import("../pages/sports/Cricket"));
const Travel = lazy(() => import("../pages/Travel"));
const Culture = lazy(() => import("../pages/Culture"));
const Entertainment = lazy(() => import("../pages/Entertainment"));
const Innovation = lazy(() => import("../pages/innovations/Innovation"));
const InnovationHome = lazy(() => import("../pages/innovations/InnovationHome"));
const Technology = lazy(() => import("../pages/innovations/Technology"));
const Political = lazy(() => import("../pages/Political"));
const Universe = lazy(() => import("../pages/Universe"));
const Fashion = lazy(() => import("../pages/Fashion"));
const Search = lazy(() => import("../pages/Search"));
const Membership = lazy(() => import("../pages/memberships/Membership"));
const PricePlan = lazy(() => import("../pages/memberships/PricePlan"));
const Payment = lazy(() => import("../pages/memberships/Payment"));
const AdvertiseWithUs = lazy(() => import("../pages/AdvertiseWithUs"));
const TalkToUs = lazy(() => import("../pages/TalkToUs"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Privacy = lazy(() => import("../pages/Privacy"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Pages = [
  {
    id: 0,
    path: "/",
    component: <Home />,
  },
  {
    id: 1,
    path: "/news",
    component: <News />,
    subpages: [
      {
        id: 0,
        path: "/news",
        component: <NewsHome />,
      },
      {
        id: 1,
        path: "israel-gaza-war",
        component: <IsraelGazaWar />,
      },
      {
        id: 2,
        path: "ukraine-russia-war",
        component: <UkraineRussiaWar />,
      },
      {
        id: 3,
        path: "usa",
        component: <Usa />,
      },
      {
        id: 4,
        path: "europe",
        component: <Europe />,
      },
      {
        id: 5,
        path: "australia",
        component: <Australia />,
      },
      {
        id: 6,
        path: "africa",
        component: <Africa />,
      },
      {
        id: 7,
        path: "asia",
        component: <Asia />,
      },
    ],
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
    subpages: [
      {
        id: 0,
        path: "/sports",
        component: <SportsHome />,
      },
      {
        id: 1,
        path: "wwe",
        component: <Wwe />,
      },
      {
        id: 2,
        path: "cricket",
        component: <Cricket />,
      },
    ],
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
    subpages: [
      {
        id: 0,
        path: "/innovation",
        component: <InnovationHome />,
      },
      {
        id: 1,
        path: "technology",
        component: <Technology />,
      },
    ],
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
    path: "/membership",
    component: <Membership />,
    subpages: [
      {
        id: 0,
        path: "/membership",
        component: <PricePlan />,
      },
      {
        id: 1,
        path: "payment",
        component: <Payment />,
      },
    ],
  },
  {
    id: 13,
    path: "/advertise-with-us",
    component: <AdvertiseWithUs />,
  },
  {
    id: 14,
    path: "/talk-to-us",
    component: <TalkToUs />,
  },
  {
    id: 15,
    path: "/terms-and-conditions",
    component: <TermsAndConditions />,
  },
  {
    id: 16,
    path: "/about-jadetimes",
    component: <AboutUs />,
  },
  {
    id: 17,
    path: "/privacy-policy",
    component: <Privacy />,
  },
  {
    id: 25,
    path: "*",
    component: <NotFound />,
  },
];

export default Pages;
