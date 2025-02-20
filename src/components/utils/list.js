export const navLinks = [
  { id: 1, name: "home", link: "#home" },
  { id: 2, name: "about", link: "#about" },
  { id: 3, name: "projects", link: "#projects" },
  { id: 4, name: "approach", link: "#approach" },
  { id: 5, name: "contact", link: "#contact" },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    //------------------------------------------------
    deskScale: isSmall ? 2 : isMobile ? 3.8 : 4.8,
    deskPosition: isSmall
      ? [0.3, 0.3, 7.5]
      : isMobile
        ? [0.15, -3.1, 7.5]
        : [0.3, -4.3, 8],
    //---------------------------------????????????????
    lPosition: isSmall
      ? [7.7, -2.6, -18]
      : isMobile
        ? [7.6, -12, -15]
        : isTablet
          ? [15, -13.8, -15]
          : [18.3, -15, -16],
    reactLogoPosition: isSmall
      ? [5, 5, 0]
      : isMobile
        ? [5.5, 5, 0]
        : isTablet
          ? [10, 4, 0]
          : [12, 3, 0],
    htmlPosition: isSmall
      ? [-4.5, 2.5, 0]
      : isMobile
        ? [-5, 2.4, 0]
        : isTablet
          ? [-10, 1.5, 0]
          : [-11, 0.7, 0],
    mPosition: isSmall
      ? [-6.9, -2.5, -18]
      : isMobile
        ? [-7.5, -12, -15]
        : isTablet
          ? [-15.5, -13.8, -16]
          : [-18, -15, -16],
    //------------------------------------------------
  };
};

export const recentProjects = [
  {
    title: "Lorem ipsum - dolor sit amet.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestias aliquid ut minima incidunt illo beatae maxime ipsa consequatur cum atque tempora accusantium nesciunt vitae dolorum nisi earum officiis, quo totam quisquam non quae distinctio? Totam laborum sapiente corrupti quae.",
    subdesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorem recusandae rerum dignissimos natus deserunt suscipit, animi modi dolore nisi, minus amet sunt quasi ratione qui perspiciatis! Enim, quasi obcaecati!",
    href: "#",
    texture: "/textures/coa-video.mp4",
    logo: "/photos/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/photos/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/photos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/photos/tailwindcss.png",
      },
      {
        id: 3,
        name: "Next.js",
        path: "/photos/nextjs.png",
      },
    ],
  },
  {
    title: "2Lorem ipsum - dolor sit amet.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestias aliquid ut minima incidunt illo beatae maxime ipsa consequatur cum atque tempora accusantium nesciunt vitae dolorum nisi earum officiis, quo totam quisquam non quae distinctio? Totam laborum sapiente corrupti quae.",
    subdesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorem recusandae rerum dignissimos natus deserunt suscipit, animi modi dolore nisi, minus amet sunt quasi ratione qui perspiciatis! Enim, quasi obcaecati!",
    href: "#",
    texture: "/textures/1.mp4",
    logo: "/photos/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/photos/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/photos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/photos/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/photos/typescript.png",
      },
      {
        id: 4,
        name: "Next.js",
        path: "/photos/nextjs.png",
      },
    ],
  },
];

export const approachList = [
  {
    id: 1,
    title: "asdvasdv",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio at placeat ullam fugiat repellat quis consequatur alias eius cupiditate?",
    icon: "/alideda-emb.png",
    animation: "salute",
  },
  {
    id: 2,
    title: "asdvasdv",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio at placeat ullam fugiat repellat quis consequatur alias eius cupiditate?",
    icon: "/alideda-emb.png",
    animation: "victory",
  },
  {
    id: 3,
    title: "asdvasdv",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio at placeat ullam fugiat repellat quis consequatur alias eius cupiditate?",
    icon: "/alideda-emb.png",
    animation: "salute",
  },
  {
    id: 4,
    title: "asdvasdv",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio at placeat ullam fugiat repellat quis consequatur alias eius cupiditate?",
    icon: "/alideda-emb.png",
    animation: "clapping",
  },
  {
    id: 5,
    title: "asdvasdv",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio at placeat ullam fugiat repellat quis consequatur alias eius cupiditate?",
    icon: "/alideda-emb.png",
    animation: "victory",
  },
];
