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
    bonsaiScale: isSmall ? 0.039 : isMobile ? 0.05 : 0.07,
    bonsaiPosition: isSmall ? [1, -2, 0] : isMobile ? [2, -2, 0] : [2.2, -2, 0],
    //---------------------------------
    moonScale: isSmall ? 0.9 : isMobile ? 1.1 : 1.3,
    moonPosition: isSmall
      ? [0, 9, -10]
      : isMobile
        ? [0.6, 9, -10]
        : [0, 9, -10],
    //--------------------------------
    logoScale: isSmall ? 0.015 : isMobile ? 0.02 : 0.025,
    //------------------------------------------------
    //------Radius-------
    cssRadius: isSmall ? 1.4 : isMobile ? 2.7 : isTablet ? 2.6 : 2.6,
    jsRadius: isSmall ? 1.9 : isMobile ? 3.4 : isTablet ? 3.35 : 3.35,
    reactRadius: isSmall ? 2.1 : isMobile ? 3.4 : isTablet ? 4.1 : 4.1,
    tailRadius: isSmall ? 2.3 : isMobile ? 3.3 : isTablet ? 4.3 : 4.3,
    framerRadius: isSmall ? 2.3 : isMobile ? 3.3 : isTablet ? 4.2 : 4.2,
    typeRadius: isSmall ? 2.35 : isMobile ? 3.3 : isTablet ? 4.2 : 4.2,
    nextRadius: isSmall ? 2.2 : isMobile ? 3.1 : isTablet ? 4.2 : 4.2,
    //------------------------------------------------
    //------Height-------
    cssHeight: isSmall ? -7.7 : isMobile ? -8.5 : isTablet ? -12 : -12,
    jsHeight: isSmall ? -7 : isMobile ? -7.6 : isTablet ? -11 : -11,
    reactHeight: isSmall ? -6.4 : isMobile ? -6.8 : isTablet ? -9 : -9,
    tailHeight: isSmall ? -5.7 : isMobile ? -6 : isTablet ? -8 : -8,
    framerHeight: isSmall ? -4.9 : isMobile ? -5.2 : isTablet ? -7 : -7,
    typeHeight: isSmall ? -4.3 : isMobile ? -4.6 : isTablet ? -6 : -6,
    nextHeight: isSmall ? -3.8 : isMobile ? -4 : isTablet ? -5 : -5,
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
    title: "Planning",
    desc: "Defining website goals, structure, and features to ensure clarity, usability, and effectiveness.",
    icon: "/icons/planning.gif",
  },
  {
    id: 2,
    title: "Design",
    desc: "Creating a clean, intuitive, and visually appealing interface that enhances user experience.",
    icon: "/icons/digital-art.gif",
  },
  {
    id: 3,
    title: "Development",
    desc: "Writing efficient, scalable code to build a responsive, high-performance, and functional website.",
    icon: "/icons/web-developer.gif",
  },
  {
    id: 4,
    title: "Launch & Optimization",
    desc: "Deploying the site, testing across devices, and refining for speed, SEO, and usability.",
    icon: "/icons/responsive.gif",
  },
  {
    id: 5,
    title: "Ongoing Support",
    desc: "Available for future updates, troubleshooting, or improvements to keep everything running smoothly.",
    icon: "/icons/virtual-assistant.gif",
  },
  //credits - <a href="https://www.flaticon.com/free-animated-icons/rocket" title="rocket animated icons">Rocket animated icons created by Freepik - Flaticon</a>
];
