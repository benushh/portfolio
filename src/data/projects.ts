import netflixImg from "../../public/assets/projects/netflix.png";
import fiverrImg from "../../public/assets/projects/fiverr.png";
import map from "../../public/assets/projects/map.png";
import zombies from "../../public/assets/projects/zombieHordeGame.png";
import clothes from "../../public/assets/projects/clothes.png";
import nike from "../../public/assets/projects/nike.png";
import admin from "../../public/assets/projects/admin.png";
import spotify from "../../public/assets/projects/spotify.png";
import coder from "../../public/assets/projects/coder.png";
import gamesLibrary from "../../public/assets/projects/gamesLibrary.png";

export const projects = [
  {
    title: "Netflix",
    img: netflixImg,
    type: "Fullstack",
    tech: "MongoDB, ExpressJS, React, SASS, NodeJS, Redux Toolkit, Firebase",
    link: "https://github.com/benroz3/netflix",
  },
  {
    title: "Fiverr",
    img: fiverrImg,
    type: "Fullstack",
    tech: "MongoDB, ExpressJS, React, SASS, NodeJS, Stripe",
    link: "https://github.com/benroz3/fiverr",
  },
  {
    title: "Travel Map App",
    img: map,
    type: "Fullstack",
    tech: "MongoDB, ExpressJS, React, SASS, NodeJS, Leaflet",
    link: "https://github.com/benroz3/travel-map-app",
  },
  {
    title: "Online Coder",
    img: coder,
    type: "Fullstack",
    tech: "MongoDB, ExpressJS, React, NodeJS, Socket.io",
    link: "https://main--candid-beijinho-70d59d.netlify.app/",
  },
  {
    title: "Spotify Music Rooms",
    img: spotify,
    type: "Fullstack",
    tech: "React, TypeScript, MUI, Django, PostgreSQL",
    link: "https://github.com/benroz3/spotify-music-controller-room",
  },
  {
    title: "Clothing Mobile App",
    img: clothes,
    type: "Front-end",
    tech: "React Native",
    link: "https://github.com/benroz3/clothing-app",
  },
  // {
    //   title: "Games Library",
    //   img: gamesLibrary,
    //   type: "Fullstack",
    //   tech: "Vue.js, Bootstrap, Flask",
    //   link: "https://github.com/benroz3/games-library",
    // },
    {
      title: "Admin Dashboard",
      img: admin,
      type: "Front-end",
      tech: "React & TypeScript",
      link: "https://main--effulgent-entremet-9cfac9.netlify.app/",
    },
    {
      title: "Zombie Horde Game",
      img: zombies,
      type: "Game",
      tech: "TypeScript & PixiJS",
      link: "https://github.com/benroz3/zombie-horde",
    },
  {
    title: "Nike Store",
    img: nike,
    type: "Web Page",
    tech: "HTML, CSS, JavaScript",
    link: "/assets/projects/nikeStore/index.html",
  },
];
