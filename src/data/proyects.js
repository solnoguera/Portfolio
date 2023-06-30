import eltottem from "../assets/eltottem.png";
import misSeries from "../assets/mis-series.png";
import catalogue from "../assets/catalogue.png";
import translator from "../assets/translator.png";
import rps from "../assets/play_rps.png";

const proyects = [
  {
    title: "Web3 Game: Rock Paper Scissors",
    date: "May 2023",
    description:
      "Frontend, Backend and web3 developer. This web app is the classic game but with a touch of blockchain. You can exchange RPS token, acquire NFT hands to create rare teams, and you can play against the machine or against other users!",
    tecnologies: ["Javascript", "React JS", "Redux", "Typescript", "Node JS", "Express", "Mongo DB", "Smart Contracts", "Docker", "AWS", "Kubernetes"],
    deploy: "https://play.rpsleague.io/",
    repo: "https://github.com/rpsleaguenft/rps-frontend",
    img: rps,
  },
  {
    title: "Interactive\n Room Simulator (deploy removed by client)",
    date: "March 2022",
    description:
      "Responsible for the development of the user interface. This web app is an interactive 2D simulator of environments. Its main functionality is to choose or upload your own environment and select those items for sale (armchairs, lamps, etc.) that the client uploads on the admin page so that the user can see how they would look in their room. It consumes data from the Back-end developed in NodeJS using Express.",
    tecnologies: ["Javascript", "React JS", "Tailwind", "Axios"],
    deploy: "https://demo.perspectiva.ar/",
    repo: "https://github.com/Aguilera-Agustin/Online-Catalogue-Frontend",
    img: catalogue,
  },
  {
    title: "E-commerce",
    date: "February 2022",
    description:
      "Development of a Ecommerce's user interface using React for the Front-end, this was made for the final proyect of the Coderhouse's React JS Certification. It  fetchs Firebase data and show the products and categories. React's functionality Context was used for the products in the shopping cart.",
    tecnologies: ["Javascript", "React JS", "Bootstrap", "Firebase"],
    deploy: "https://eltottem.netlify.app/",
    repo: "https://github.com/solnoguera/eltottem-ecommerce-soln",
    img: eltottem,
  },
  {
    title: "Sool Translator [not working because of expired api key]",
    date: "July 2022",
    description:
      "Development of a SPA alike Google Translator using React for the Front-end,   where the user can enter any phrase in any language and it will be translated to any other language that is selected.  It consumes data and functionality from an API",
    tecnologies: ["Javascript", "React JS", "Bootstrap", "Axios"],
    deploy: "https://traductor.netlify.app/",
    repo: "https://github.com/solnoguera/Traductor-ReactJS",
    img: translator,
  },
  {
    title: "Mis Series Web App",
    date: "May 2022",
    description:
      "Development of this user interface that allows the user to keep record of the series watched, and how many seasons. It was developed with HTML, CSS and just Javascript, using JQuery for DOM interactions.",
    tecnologies: ["Javascript", "JQuery", "Tailwind"],
    deploy: "https://mis-series-soln.netlify.app/",
    repo: "https://github.com/solnoguera/CIU-Primer-Parcial",
    img: misSeries,
  },
];

export default proyects;
