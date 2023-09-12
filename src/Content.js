// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SAIF UR",
    LastName: "REHMAN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1",
        text: "Years of Experince in Web development",
      },
      {
        count: "3",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "As an HTML developer, I create",
        logo: figma,
        desc: "As an HTML developer, I create the structural foundation of web pages using HTML elements and tags. My responsibilities include organizing and formatting content, collaborating with design and development teams, and ensuring web compatibility and performance. I integrate dynamic data into HTML templates, implement responsive design for various devices, and prioritize web accessibility. Troubleshooting and effective communication within the team are crucial, and I play a key role in maintaining, updating, and enhancing web content for a seamless user experience."
      },
      {
        name: "CSS",
        para: "As a CSS developer, I play....",
        logo: nodejs,
        desc: "As a CSS developer, I play a crucial role in web development by defining the visual aesthetics and layout of websites and web applications. My responsibilities include crafting styles and layouts for HTML elements, ensuring responsive design for diverse screen sizes, and addressing cross-browser compatibility issues. Collaborating closely with web designers and HTML developers, I bring design concepts to life and incorporate animations and interactivity to create engaging user experiences."
      },
      {
        name: "Javascript",
        para: "As a JavaScript developer.....",
        logo: ps,
        desc: "As a JavaScript developer, my primary focus is on enhancing the functionality and interactivity of websites and web applications. I work with the client-side of web development, utilizing JavaScript to create dynamic user interfaces, handle user interactions, and manage data. My role involves collaborating closely with designers and back-end developers, and I'm responsible for writing efficient and maintainable code that delivers seamless user experiences."
      },
      {
        name: "React js",
        para: "As a React developer, I specialize....",
        logo: reactjs,
        desc: "As a React developer, I specialize in building dynamic and highly interactive web applications. My primary focus is on utilizing the React JavaScript library to create efficient, component-based user interfaces. I work collaboratively with designers and back-end developers to seamlessly integrate front-end and back-end functionalities. My expertise in React allows me to develop responsive and scalable web solutions, delivering exceptional user experiences and ensuring the performance and maintainability of the applications I build."
      },
      {
        name: "Bootstrap",
        para: "As a React developer who incorporates Bootstrap CSS",
        logo: sketch,
        desc: "As a React developer who incorporates Bootstrap CSS, I specialize in building versatile and visually engaging web applications. My expertise lies in harnessing React's component-based architecture and seamlessly integrating Bootstrap's CSS framework to create responsive and user-friendly interfaces. I collaborate closely with design and back-end teams to ensure the seamless integration of front-end and back-end functionalities, resulting in efficient, maintainable, and aesthetically pleasing web solutions."
      },
      {
        name: "Tailwind CSS",
        para: "As a React developer who harnesses....",
        logo: python,
        desc: "As a React developer who harnesses the power of Tailwind CSS, my expertise lies in crafting sleek and responsive web applications. I leverage React's component-driven approach and seamlessly integrate Tailwind CSS to create visually appealing and highly efficient user interfaces. By collaborating closely with design and back-end teams, I ensure that the applications I build are not only visually appealing but also performant and maintainable. My skills in React and Tailwind CSS enable me to deliver outstanding user experiences and responsive web solutions."
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Custom Software Development",
        para: "Unlock the true potential of your business with our Custom Software Development service. Tailored to your unique needs, our expert team delivers innovative and scalable solutions for seamless growth.",
        logo: services_logo1,
      },
      {
        title: "Web App Development",
        para: "Elevate your online presence with our Web App Development service.Our team crafts powerful and user-centric web applications to drive engagement and enhance user experience.",
        logo: services_logo2,
      },
      {
        title: "E-commerce Solutions",
        para: "Unleash your online potential with our E-commerce Solutions service. From building user-friendly online stores to integrating secure payment gateways, we provide end-to-end e-commerce solutions that drive sales and elevate your digital business.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "E-Commerce web",
        image: project1,
      },
      {
        title: "agency website ",
        image: project2,
      },
      // {
      //   title: "Creative Website",
      //   image: project3,
      // },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Transforming your digital vision into captivating web experiences. As a frontend developer, I craft visually stunning, user-friendly websites that engage your audience and drive results. Specializing in responsive design and intuitive user interfaces, I create web solutions that leave a lasting impression. With a focus on aesthetics and functionality, I bring your brand to life in the digital world",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "muh.saif2001@gmail.com",
        icon: GrMail,
        link: "mailto:muh.saif2001@gmail.com",
      },
      {
        text: "+923418120041",
        icon: MdCall,
        link: "https://wa.me/923418120041",
      },
      {
        text: "Muhammad Saif Ur Rehman",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/muhammad-saif-ur-rehman-061ab41b5/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
