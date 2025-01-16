import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";



export const PROJECTS = [
  {
    title: "Chatterly",
    image: project1,
    description:
      "A real time chat application allowing users to text, supports features like user authentication  and a userfriendly interface for smooth conversations.",
    technologies: ["React", "NodeJs", "Socket.io", "Mongodb", "Express"],
  },
  {
    title: "Payments App",
    image: project2,
    description:
      "A modern payments application designed to simplify  financial transactions",
    technologies:[ "React.js", "Express", "Postrgress", "Prisma", "Nodejs" ]
  },
  {
    title: "Blogging Platform",
    image: project3,
    description:
      "A platform for creating and publishing blog posts, with authentication and user profiles.",
    technologies: [ "React.js", "Hono", "Postrgress", "Prisma", ]
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Framer motion", "Javascript"],
  },
];

