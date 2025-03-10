export const navLinks = [
  { id: 1, name: "home", link: "#home" },
  { id: 2, name: "about", link: "#about" },
  { id: 3, name: "projects", link: "#projects" },
  { id: 4, name: "approach", link: "#approach" },
  { id: 5, name: "contact", link: "#contact" },
];

export const calculateSizesHero = (isSmall, isMobile, isTablet) => {
  return {
    //------------------------------------------------
    bonsaiScale: isSmall ? 0.039 : isMobile ? 0.05 : 0.07,
    bonsaiPosition: isSmall ? [1, -2, 0] : isMobile ? [2, -2, 0] : [2.2, -2, 0],
    //---------------------------------
    moonScale: isSmall ? 0.9 : isMobile ? 1.1 : 1.3,
    moonPosition: isSmall
      ? [0, 8, -20]
      : isMobile
        ? [0.6, 8, -20]
        : [0, 8, -20],
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
    title: "Mr Pačalinković 🥞",
    desc: "This website for a local pancake fast food joint is built using Next.js 15 and React 19, with Tailwind CSS handling the styling. I've added some cool 3D models using React Three Fiber and React 3 Drei, and the animations are powered by Framer Motion. The site is super fast, super smooth, and just works without a hitch.",
    subdesc:
      "The idea behind the site is simple: let people check out the menu and get in touch easily. It's not for online orders — specialized delivery services handle that part. It's more about giving the brand a modern, tech-savvy look while making it easy for customers to connect. Perfect for a small business that wants to stand out!",
    href: "https://www.mrpacalinkovic.com",
    texture: "/textures/snimak1.mp4",
    logo: "/photos/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
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
      {
        id: 4,
        name: "Framer Motion",
        path: "/photos/framer.svg",
      },
    ],
  },
  {
    title: "Piano 🎹",
    desc: "This is a small project I created just for fun, called Piano. It's a virtual piano that can be played using the keyboard or mouse. It also features an asynchronous JavaScript function (which you can trigger) that plays music. The project is built with vanilla JavaScript, vanilla CSS, and includes a 3D model imported via THREE.js using a GLTF file. It was created just for practice and experimentation.",
    subdesc:
      "Since the asynchronous function that plays the music is quite long and demanding for the browser, it can be a bit heavy on performance. To ensure it works smoothly, it's best to open the project in Google Chrome. Other browsers might struggle to keep up, so Chrome is your best bet.",
    href: "https://levajacm.github.io/Piano/#",
    texture: "/textures/p.mp4",
    logo: "/photos/piano.png",
    logoStyle: {
      backgroundColor: "#d68b83",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px rgba(50, 50, 50, 0.7)",
    },
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/photos/js.png",
      },
      {
        id: 2,
        name: "CSS3",
        path: "/photos/css-3.png",
      },
      {
        id: 3,
        name: "THREE",
        path: "/photos/Threejs-logo.png",
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
