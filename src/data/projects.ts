import netflixImg from "../../public/assets/projects/netflix.png";
import fiverrImg from "../../public/assets/projects/fiverr.png";
import zombies from "../../public/assets/projects/zombieHordeGame.png";
import nike from "../../public/assets/projects/nike.png";
import admin from "../../public/assets/projects/admin.png";
import spotify from '../../public/assets/projects/spotify.png'

export const projects = [
  {
    title: "Netflix",
    img: netflixImg,
    type: "Fullstack",
    tech: "MongoDB, ExpressJS, React, NodeJS, Redux Toolkit, Firebase",
    link: "https://github.com/benroz3/netflix",
  },
  {
    title: "Fiverr",
    img: fiverrImg,
    type: "Fullstack",
    tech: "MongoDB, ExpressJS, React, NodeJS, Stripe",
    link: "https://github.com/benroz3/fiverr",
  },
  {
    title: "Spotify Music Rooms",
    img: spotify,
    type: "Fullstack",
    tech: "React, TypeScript, MUI, Django, PostgreSQL",
    link: "https://github.com/benroz3/spotify-music-controller-room",
  },
  {
    title: "Zombie Horde Game",
    img: zombies,
    type: "Game",
    tech: "TypeScript & PixiJS",
    link: "https://github.com/benroz3/zombie-horde",
  },
  {
    title: "Admin Dashboard",
    img: admin,
    type: "Front-end",
    tech: "React & TypeScript",
    link: "https://main--effulgent-entremet-9cfac9.netlify.app/",
  },
  {
    title: "Nike Store",
    img: nike,
    type: "Web Page",
    tech: "HTML, CSS, JavaScript",
    link: "/assets/projects/nikeStore/index.html",
  },
];
