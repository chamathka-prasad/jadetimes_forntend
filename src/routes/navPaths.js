const navPaths = [
  {
    key: 0,
    to: "/",
    name: "Home",
  },
  {
    key: 1,
    to: "/news",
    name: "News",
    submenus: [
      {
        key: 0,
        to: "israel-gaza-war",
        name: "Israel-Gaza War",
      },
      {
        key: 1,
        to: "ukraine-russia-war",
        name: "Ukraine-Russia War",
      },
      {
        key: 2,
        to: "usa",
        name: "USA",
      },
      {
        key: 3,
        to: "europe",
        name: "Europe",
      },
      {
        key: 4,
        to: "australia",
        name: "Australia",
      },
      {
        key: 5,
        to: "africa",
        name: "Africa",
      },
      {
        key: 6,
        to: "asia",
        name: "Asia",
      },
    ],
  },
  {
    key: 2,
    to: "/business",
    name: "Business",
  },
  {
    key: 3,
    to: "/sports",
    name: "Sports",
    submenus: [
      {
        key: 0,
        to: "/sports/wwe",
        name: "WWE",
      },
      {
        key: 1,
        to: "/sports/cricket",
        name: "Cricket",
      },
    ],
  },
  {
    key: 4,
    to: "/travel",
    name: "Travel",
  },
  {
    key: 5,
    to: "/culture",
    name: "Culture",
  },
  {
    key: 6,
    to: "/entertainment",
    name: "Entertainment",
  },
  {
    key: 7,
    to: "/innovation",
    name: "Innovation",
    submenus: [
      {
        key: 0,
        to: "/innovation/technology",
        name: "Technology",
      },
    ],
  },
  {
    key: 8,
    to: "/political",
    name: "Political",
  },
  {
    key: 9,
    to: "/universe",
    name: "Universe",
  },
  {
    key: 10,
    to: "/fashion",
    name: "Fashion",
  },
  {
    key: 11,
    to: "/health",
    name: "Health",
  },
];


export default navPaths;