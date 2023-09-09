import React from "react";
import { Avatar, Box, Card, CardContent } from "@mui/material";
import {
  BoxContainer,
  PageHeadingText,
  PoppinsForteenChipText,
  PoppinsSixteenText,
} from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Stack from "@mui/material/Stack";
import {
  BootstrapIcon,
  CSSIcon,
  GitIcon,
  GithubIcon,
  JavaScriptIcon,
  JestIcon,
  JQueryIcon,
  MUIIcon,
  MYSQLIcon,
  NextJSIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  WordPressIcon,
  AngularIcon,
} from "./icons/LanguageIcon";
import { MySkillsText } from "./constants/Text";

const CustomNextArrow = (props) => {
  return (
    <div className="custom-arrow custom-next-arrow" onClick={props.onClick} />
  );
};

const CustomPrevArrow = (props) => {
  return (
    <div className="custom-arrow1 custom-prev-arrow" onClick={props.onClick} />
  );
};

export default function MySkills() {
  const skills = [
    {
      id: "1",
      src: <ReactIcon />,
      language: "React",
      status: "Advanced",
    },
    {
      id: "2",
      src: <TypeScriptIcon />,
      language: "TypeScript",
      status: "Advanced",
    },
    {
      id: "3",
      src: <CSSIcon />,
      language: "CSS",
      status: "Advanced",
    },
    {
      id: "4",
      src: <GitIcon />,
      language: "Git",
      status: "Advanced",
    },
    {
      id: "5",
      src: <GithubIcon />,
      language: "Github",
      status: "Intermediate",
    },
    {
      id: "6",
      src: <JestIcon />,
      language: "Jest",
      status: "Intermediate",
    },
    {
      id: "7",
      src: <MUIIcon />,
      language: "Material UI",
      status: "Advanced",
    },
    {
      id: "8",
      src: <MYSQLIcon />,
      language: "MySQL",
      status: "Intermediate",
    },
    {
      id: "9",
      src: <ReduxIcon />,
      language: "Redux Toolkit",
      status: "Intermediate",
    },
    {
      id: "10",
      src: <SassIcon />,
      language: "Sass",
      status: "Beginner",
    },
    {
      id: "11",
      src: <BootstrapIcon />,
      language: "Bootstrap",
      status: "Advanced",
    },
    {
      id: "12",
      src: <NextJSIcon />,
      language: "Next JS",
      status: "Beginner",
    },
    {
      id: "13",
      src: <TailwindCSSIcon />,
      language: "Tailwind CSS",
      status: "Intermediate",
    },
    {
      id: "14",
      src: <JavaScriptIcon />,
      language: "JavaScript",
      status: "Intermediate",
    },
    {
      id: "15",
      src: <JQueryIcon />,
      language: "JQuery",
      status: "Beginner",
    },
    {
      id: "16",
      src: <PythonIcon />,
      language: "Python",
      status: "Beginner",
    },
    {
      id: "17",
      src: <WordPressIcon />,
      language: "WordPress",
      status: "Intermediate",
    },
    {
      id: "18",
      src: <AngularIcon />,
      language: "Angular",
      status: "Beginner",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 2560,
      //   settings: {
      //     slidesToShow: 12,
      //   },
      // },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          // centerMode: true,
          // centerPadding: "54px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "54px",
        },
      },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <BoxContainer id="mySkills" style={{}}>
        <PageHeadingText>{MySkillsText}</PageHeadingText>
        <Slider {...settings}>
          {skills.map((item, index) => (
            <Box key={item.toString()}>
              <Card
                style={{
                  borderRadius: "10px",
                  height: "auto",
                  width: "13rem",
                  marginBottom: "2rem",
                  cursor: "pointer",
                  color: "#003C2F",
                }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    rowGap: 10,
                  }}
                >
                  <Avatar
                    alt={item.language}
                    sx={{
                      width: "4rem",
                      height: "4rem",
                    }}
                  >
                    {item.src}
                  </Avatar>
                  <PoppinsSixteenText>{item.language}</PoppinsSixteenText>
                  <Stack
                    className="skills-card-background"
                    spacing={2}
                    alignItems="center"
                  >
                    <Stack direction="row" spacing={2}>
                      <PoppinsForteenChipText
                        className="skills-card"
                        label={item.status}
                      />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </BoxContainer>
    </>
  );
}
