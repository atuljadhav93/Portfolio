import {
  BootstrapIcon,
  CSSIcon,
  FigmaIcon,
  GitIcon,
  HTMLIcon,
  // GithubIcon,
  JavaScriptIcon,
  JestIcon,
  JiraIcon,
  // JQueryIcon,
  MUIIcon,
  MYSQLIcon,
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
import {
  adminPortal,
  atulPortfolio,
  dhruv,
  elAdmin,
  elPortal,
  elPro,
  lancerLink,
  lancerLinkUrl,
  movieDB,
  narendra,
  netflix,
  netflixCode,
  portfolioCode,
  tejas,
} from "./const";

export const projects = [
  {
    id: "1",
    src: netflix,
    techStack: "React | Redux | Tailwind CSS | Firebase | GitHub",
    title: "Netflix GPT",
    description:
      "Introducing an entertainment platform powered by ChatGPT, packed with exciting features to improve your search experience. Powered by advanced AI technology, experience the latest in AI innovation, driven by OpenAI's GPT-3.5 and TMDB. Discover entertainment seamlessly and intelligently with smarter search capabilities!",
    github: "Source Code",
    demo: "Live Demo",
    githubUrl: netflixCode,
    disableGitHubUrl:"false",
    demoUrl: "",
    disableDemoUrl:"true",
    videoStatus:"false",
    videoId: "u-TNKBYQV4M?si=E_kFtNo4U48sR_lC",
    videoLink: "https://youtu.be/u-TNKBYQV4M?si=E_kFtNo4U48sR_lC",
  },
  {
    id: "2",
    src: lancerLink,
    techStack: "React | Redux | TypeScript | CSS | Azure | ASP.NET",
    title: "Lancer Link",
    description:
      "The Lancer Link B2B platform enables remote monitoring of drink consumption on a daily, monthly, and yearly basis. This includes beverages such as coffee, cold drinks, and syrup. Consumption reports will be generated based on this data. Additionally, the platform allows for online monitoring of device maintenance status, displaying consumption data in graph format for each device on a daily basis. Users can view both individual and group franchise selling statuses. The platform collects data on drink sales and device status to generate revenue, recurring, top-selling drinks, and device maintenance reports.",
    github: "Source Code",
    demo: "Live Demo",
    githubUrl: "",
    disableGitHubUrl:"true",
    demoUrl: lancerLinkUrl,
    disableDemoUrl:"false",
    videoStatus:"true",
    videoId: "KyoLCoQrkfU",
    videoLink: "https://youtu.be/KyoLCoQrkfU",
  },
  {
    id: "3",
    src: atulPortfolio,
    techStack: "JavaScript | React | Redux | HTML | CSS | Docker",
    title: "Portfolio",
    description:
      "Design and develop a platform to showcase professional details such as a career summary, about me, skills, educational timeline, work history, and projects I have worked on. This is a single-page application I designed and developed, featuring pages for the hero section, about me, skills, my work, journey, testimonials, contact me, and a footer section. I used React.js, Redux, Material UI, and CSS for the development.",
    github: "Source Code",
    demo: "Live Demo",
    githubUrl: portfolioCode,
    disableGitHubUrl:"true",
    demoUrl: "",
    disableDemoUrl:"false",
    videoStatus:"true",
    videoId: "Z-ShOLOL_8M",
    videoLink: "https://youtu.be/Z-ShOLOL_8M",
  },
];

export const moreProjects = [
  {
    id: "1",
    src: movieDB,
    techStack: "React | Redux | JavaScript | CSS",
    title: "MovieDB",
    description:
      "MovieDB is here to make finding information about your favorite movies effortless. Our platform features a user-friendly interface where you can search for movies by title, genre, release year, or even by actor/actress. With a vast database, we offer accurate and current details about thousands of movies.",
    github: "Source Code",
    demo: "Live Demo",
    githubUrl: netflixCode,
    disableGitHubUrl:"false",
    demoUrl: "",
    disableDemoUrl:"true",
    videoStatus:"true",
    videoId: "u-TNKBYQV4M?si=E_kFtNo4U48sR_lC",
    videoLink: "https://youtu.be/u-TNKBYQV4M?si=E_kFtNo4U48sR_lC",
  },
  {
    id: "2",
    src: adminPortal,
    techStack: "React | Redux | TypeScript | CSS | MUI | Python",
    title: "Admin Portal",
    description:
      "The Admin Portal is an internal operational dashboard platform, designed to efficiently manage various business activities. It includes managing user details, demo requests, payment details, resource information, resource limit requests, learning banks, ongoing and past event details, ongoing and past service statuses, as well as active instances on our platform.",
    github: "Source Code",
    demo: "Live Demo",
    githubUrl: "",
    disableGitHubUrl:"true",
    demoUrl: elAdmin,
    disableDemoUrl:"false",
    videoStatus:"false",
    videoId: "u-TNKBYQV4M?si=E_kFtNo4U48sR_lC",
    videoLink: "https://youtu.be/u-TNKBYQV4M?si=E_kFtNo4U48sR_lC",
  },
  {
    id: "3",
    src: elPro,
    techStack: "React | Redux | TypeScript | CSS | MUI | Node Js | Python",
    title: "--------",
    description:
      "Introducing a platform that offers personalized virtual desktops on a cloud platform, where you can train and learn, with a pay-as-you-go usage scheme",
    github: "Source Code",
    demo: "Live Demo",
    githubUrl: portfolioCode,
    disableGitHubUrl:"true",
    demoUrl: elPortal,
    disableDemoUrl:"true",
    videoStatus:"false",
    videoId: "VyfiiwE9HlM?si=B0_0pCFX6iRo9ube",
    videoLink: "https://youtu.be/VyfiiwE9HlM?si=B0_0pCFX6iRo9ube",
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
  {
    id: "8",
    src: <MYSQLIcon />,
    language: "MySQL",
  },
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
  {
    id: "18",
    src: <JiraIcon />,
    language: "Jira Software",
  },
  {
    id: "19",
    src: <HTMLIcon />,
    language: "HTML",
  },
  {
    id:"20",
    src: <FigmaIcon />,
    language:"Figma"
  }
];

export const testimonial = [
  {
    id: "1",
    name: "Narendra M",
    text: `Working alongside Atul Jadhav on UI development using React and CSS has been an absolute pleasure. Atul's dedication to his work is truly commendable. He consistently demonstrates his expertise in React-based UI development and CSS, ensuring that our projects not only meet but exceed expectations. As a fellow employee at our company, I can confidently say that Atul's contributions have significantly enhanced our team's productivity and the quality of our deliverables. His professionalism and commitment to excellence make him a valuable asset to any team. I highly recommend Atul for his exceptional technical skills and work ethic.`,
    src: narendra,
    designation: "Development Team Lead",
    profileURL: "https://www.linkedin.com/in/narendramn37/",
    organisation: "Electrum(formarly PickMySolar)",
    orgURL: "https://www.linkedin.com/company/pickmysolar/mycompany/",
    orgLogo:
      "https://assets.solar.com/partner_assets/electrum/electrum-logo.svg",
  },
  {
    id: "2",
    name: "Thejesh M",
    text: `Atul is the person who is dedicated, adaptable, encouraging and supporting`,
    src: tejas,
    designation: "Reporting Manager and Senior Backend Developer",
    profileURL: "https://www.linkedin.com/in/thejesh-m-5b17a1110/",
    organisation: "Electrum(formarly PickMySolar)",
    orgURL: "https://www.linkedin.com/company/pickmysolar/mycompany/",
    orgLogo:
      "https://assets.solar.com/partner_assets/electrum/electrum-logo.svg",
  },
  {
    id: "3",
    name: "Dhruv Suhagiya",
    text: `I've had the pleasure of working closely with Atul at Logichive Solutions for 2.6 years. Atul is an exceptional web developer, consistently delivering high-quality work within tight deadlines. His deep understanding of web development principles, coupled with his proactive and reliable nature, make him a valuable asset to any team. Atul's positive attitude and willingness to go above and beyond ensure the success of our projects. I highly recommend Atul for any web development role; he will undoubtedly continue to excel in his career.`,
    src: dhruv,
    designation: "Software Development Engineer",
    profileURL: "https://www.linkedin.com/in/dhruv-suhagiya/",
    organisation: "Electrum(formarly PickMySolar)",
    orgURL: "https://www.linkedin.com/company/pickmysolar/mycompany/",
    orgLogo:
      "https://assets.solar.com/partner_assets/electrum/electrum-logo.svg",
  },
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

export const cardData = [
  // {
  //   id: 1,
  //   title: "Privacy First Design",
  //   subTitle:
  //     "Share your screen worry-free with our secure screen-sharing feature, ensuring privacy and peace of mind. Seamlessly share and seek assistance without the fear of accidental disclosures during screensharing.",
  //   color: "#FFFFFF",
  //   background: "#E87D63",
  //   width: "60px",
  // },
  // {
  //   id: 2,
  //   title: "Scalable Resources",
  //   subTitle:
  //     "With our pay-as-you-go, scalable cloud resources, support a variety of operating systems and software, while accessing multiple resources for cross-system proof of concept creation.",
  //   color: "#FFFFFF",
  //   background: "#11B698",
  //   width: "60px",
  // },
  // {
  //   id: 3,
  //   title: "Observability",
  //   subTitle:
  //     "Experience the closeness of in-person interaction – assist participants with a simple click, all while maintaining a disturbance-free environment.",
  //   color: "#FFFFFF",
  //   background: "#5A98BB",
  //   width: "85px",
  // },
  {
    id: "1",
    color: "#FFFFFF",
    background: "#E87D63",
    name: "Narendra M",
    text: `Working alongside Atul Jadhav on UI development using React and CSS has been an absolute pleasure. Atul's dedication to his work is truly commendable. He consistently demonstrates his expertise in React-based UI development and CSS, ensuring that our projects not only meet but exceed expectations. As a fellow employee at our company, I can confidently say that Atul's contributions have significantly enhanced our team's productivity and the quality of our deliverables. His professionalism and commitment to excellence make him a valuable asset to any team. I highly recommend Atul for his exceptional technical skills and work ethic.`,
    src: narendra,
    designation: "Development Team Lead",
    profileURL: "https://www.linkedin.com/in/narendramn37/",
    organisation: "Electrum(formarly PickMySolar)",
    orgURL: "https://www.linkedin.com/company/pickmysolar/mycompany/",
    orgLogo:
      "https://assets.solar.com/partner_assets/electrum/electrum-logo.svg",
  },
  {
    id: "2",
    color: "#FFFFFF",
    background: "#E87D63",
    name: "Thejesh M",
    text: `Atul is the person who is dedicated, adaptable, encouraging and supporting`,
    src: tejas,
    designation: "Reporting Manager and Senior Backend Developer",
    profileURL: "https://www.linkedin.com/in/thejesh-m-5b17a1110/",
    organisation: "Electrum(formarly PickMySolar)",
    orgURL: "https://www.linkedin.com/company/pickmysolar/mycompany/",
    orgLogo:
      "https://assets.solar.com/partner_assets/electrum/electrum-logo.svg",
  },
  {
    id: "3",
    color: "#FFFFFF",
    background: "#E87D63",
    name: "Dhruv Suhagiya",
    text: `I've had the pleasure of working closely with Atul at Logichive Solutions for 2.6 years. Atul is an exceptional web developer, consistently delivering high-quality work within tight deadlines. His deep understanding of web development principles, coupled with his proactive and reliable nature, make him a valuable asset to any team. Atul's positive attitude and willingness to go above and beyond ensure the success of our projects. I highly recommend Atul for any web development role; he will undoubtedly continue to excel in his career.`,
    src: dhruv,
    designation: "Software Development Engineer",
    profileURL: "https://www.linkedin.com/in/dhruv-suhagiya/",
    organisation: "Electrum(formarly PickMySolar)",
    orgURL: "https://www.linkedin.com/company/pickmysolar/mycompany/",
    orgLogo:
      "https://assets.solar.com/partner_assets/electrum/electrum-logo.svg",
  },
];
