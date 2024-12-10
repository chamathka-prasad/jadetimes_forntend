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
        to: "/news/israel-gaza-war",
        name: "Israel-Gaza War",
      },
      {
        key: 1,
        to: "/news/ukraine-russia-war",
        name: "Ukraine-Russia War",
      },
      {
        key: 2,
        to: "/news/usa",
        name: "USA",
      },
      {
        key: 3,
        to: "/news/europe",
        name: "Europe",
      },
      {
        key: 4,
        to: "/news/australia",
        name: "Australia",
      },
      {
        key: 5,
        to: "/news/africa",
        name: "Africa",
      },
      {
        key: 6,
        to: "/news/asia",
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
  {
    key: 12,
    to: "/opinion",
    name: "Opinion",
  },
];


export default navPaths;