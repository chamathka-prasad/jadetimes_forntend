import Home from "../pages/Home";
import News from "../pages/News";
import Business from "../pages/Business";
import Sports from "../pages/Sports";
import Travel from "../pages/Travel";
import Culture from "../pages/Culture";
import Entertainment from "../pages/Entertainment";
import Innovation from "../pages/Innovation";
import Political from "../pages/Political";
import Universe from "../pages/Universe";
import Fashion from "../pages/Fashion";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Membership from "../pages/Membership";
import AdvertiseWithUs from "../pages/AdvertiseWithUs";
import TalkToUs from "../pages/TalkToUs";
import NotFound from "../pages/NotFound";

const Pages = [
    {
        id: 0,
        path: "/",
        component: <Home />,
        exact: true
    },
    {
        id: 1,
        path: "/news",
        component: <News />
    },
    {
        id: 2,
        path: "/business",
        component: <Business />
    },
    {
        id: 3,
        path: "/sports",
        component: <Sports />
    },
    {
        id: 4,
        path: "/travel",
        component: <Travel />
    },
    {
        id: 5,
        path: "/culture",
        component: <Culture />
    },
    {
        id: 6,
        path: "/entertainment",
        component: <Entertainment />
    },
    {
        id: 7,
        path: "/innovation",
        component: <Innovation />
    },
    {
        id: 8,
        path: "/political",
        component: <Political />
    },
    {
        id: 9,
        path: "/universe",
        component: <Universe />
    },
    {
        id: 10,
        path: "/fashion",
        component: <Fashion />
    },
    {
        id: 11,
        path: "/search",
        component: <Search />
    },
    {
        id: 12,
        path: "/log-in",
        component: <Login />
    },
    {
        id: 13,
        path: "/membership",
        component: <Membership />
    },
    {
        id: 14,
        path: "/advertise-with-us",
        component: <AdvertiseWithUs />
    },
    {
        id: 15,
        path: "/talk-to-us",
        component: <TalkToUs />
    },
    {
        id: 16,
        path: "*",
        component: <NotFound />
    }
];

export default Pages;