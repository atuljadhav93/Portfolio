import {
  BootstrapIcon,
  CSSIcon,
  GitIcon,
  // GithubIcon,
  JavaScriptIcon,
  JestIcon,
  // JQueryIcon,
  MUIIcon,
  // MYSQLIcon,
  // NextJSIcon,
  // PythonIcon,
  ReactIcon,
  ReduxIcon,
  // SassIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  // WordPressIcon,
  // AngularIcon,
} from "../assets/icons/LanguageIcon";
import { atulPortfolio, lancerLink, lancerLinkUrl, netflix, portfolioCode } from "./const";

export const portfolio = [
  {
    id: "1",
    src: netflix,
    techStack: "React | Redux Toolkit | Tailwind CSS | Firebase | GitHub",
    title: "Netflix GPT",
    description:
      "Introducing a ChatGPT-based entertainment platform with numerous key features designed to enhance your search experience. AI-powered, experience the cutting-edge power of AI, driven by OpenAI's GPT-3.5 and TMDB, ensuring a seamless and intelligent entertainment discovery journey. search more intelligently!",
    github: "Source Code",
    demo: "Live Demo",
    githubUrl: portfolioCode,
    demoUrl:""
  },
  {
    id: "2",
    src: lancerLink,
    techStack: "React | Redux Toolkit | CSS | Azure | ASP.NET",
    title: "Lancer Link",
    description:
      "Introducing a ChatGPT-based entertainment platform with numerous key features designed to enhance your search experience. AI-powered, experience the cutting-edge power of AI, driven by OpenAI's GPT-3.5 and TMDB, ensuring a seamless and intelligent entertainment discovery journey. search more intelligently!",
    github: "Source Code",
    demo: "Live Demo",
    githubUrl: "",
    demoUrl:lancerLinkUrl
  },
  {
    id: "3",
    src: atulPortfolio,
    techStack: "React | Redux Toolkit | CSS",
    title: "Portfolio",
    description:
      "Introducing a ChatGPT-based entertainment platform with numerous key features designed to enhance your search experience. AI-powered, experience the cutting-edge power of AI, driven by OpenAI's GPT-3.5 and TMDB, ensuring a seamless and intelligent entertainment discovery journey. search more intelligently!",
    github: "Source Code",
    demo: "Live Demo",
    githubUrl: portfolioCode,
    demoUrl:""
  },
];

export const skills = [
  {
    id: "1",
    src: <ReactIcon />,
    language: "React",
  },
  {
    id: "2",
    src: <TypeScriptIcon />,
    language: "TypeScript",
  },
  {
    id: "3",
    src: <CSSIcon />,
    language: "CSS",
  },
  {
    id: "4",
    src: <GitIcon />,
    language: "Git",
  },
  // {
  //   id: "5",
  //   src: <GithubIcon />,
  //   language: "Github",
  // },
  {
    id: "5",
    src: <JestIcon />,
    language: "Jest",
  },
  {
    id: "6",
    src: <MUIIcon />,
    language: "Material UI",
  },
  // {
  //   id: "8",
  //   src: <MYSQLIcon />,
  //   language: "MySQL",
  // },
  {
    id: "7",
    src: <ReduxIcon />,
    language: "Redux Toolkit",
  },
  // {
  //   id: "10",
  //   src: <SassIcon />,
  //   language: "Sass",
  // },
  {
    id: "8",
    src: <BootstrapIcon />,
    language: "Bootstrap",
  },
  // {
  //   id: "12",
  //   src: <NextJSIcon />,
  //   language: "Next JS",
  // },
  {
    id: "9",
    src: <TailwindCSSIcon />,
    language: "Tailwind CSS",
  },
  {
    id: "10",
    src: <JavaScriptIcon />,
    language: "JavaScript",
  },
  // {
  //   id: "15",
  //   src: <JQueryIcon />,
  //   language: "JQuery",
  // },
  // {
  //   id: "16",
  //   src: <PythonIcon />,
  //   language: "Python",
  // },
  // {
  //   id: "17",
  //   src: <WordPressIcon />,
  //   language: "WordPress",
  // },
  // {
  //   id: "18",
  //   src: <AngularIcon />,
  //   language: "Angular",
  // },
];

export const emailData = {
  recipient: "atuljadhav618@gmail.com",
  subject: "Let's Connect!",
  body: `Hey Atul,
  I recently discovered your profile and was intrigued.
  I'm eager to connect with you and gain insights from your experiences.
  If you're open to a discussion, sharing ideas, or exploring potential job roles, let's connect and exchange thoughts
  Warm regards,
  [Your Name]
  Contact : [Your Phone Number]

  PS : Please feel free to craft your own email and do not forget to remove this line before sending a message
`,
};

export const videoTutorial = [
  {
    id: "1",
    videoId: "u-TNKBYQV4M",
    title: "Complete CSS Course For Beginners to Advanced",
    videoLink: "https://youtu.be/u-TNKBYQV4M?si=pYi3Ac5A42PXTkXO",
  },
  {
    id: "2",
    videoId: "VZdoe2ShfBU",
    title: "Complete HTML Course For Beginner To Advanced",
    videoLink: "https://youtu.be/VZdoe2ShfBU?si=j45cFWxZzvJCE1Ia",
  },
  {
    id: "3",
    title: "Check out all the videos on my Youtube Channel",
    videoLink: "https://youtube.com/@techedumeet",
  },
];
