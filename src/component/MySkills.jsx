import React from "react";
import { Avatar, Box, Card, CardContent } from "@mui/material";
import {
  BoxContainer,
  PageHeadingText,
  PoppinsSixteenText,
} from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Stack from "@mui/material/Stack";
import { MySkillsText } from "../constants/Text";
import { skills } from "../constants/data";

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
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 700,
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
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "54px",
          nextArrow: null, // Hide next arrow for mobile devices
          prevArrow: null, // Hide prev arrow for mobile devices
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
          {skills?.map((item, index) => (
            <Box key={item.toString()}>
              <Card
                style={{
                  borderRadius: "10px",
                  height: "auto",
                  width: "11rem",
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
                  
                  <Stack
                    className="skills-card-background"
                    spacing={2}
                    alignItems="center"
                  >
                    {/* <Stack direction="row" spacing={2}>
                      <PoppinsForteenChipText
                        className="skills-card"
                        label={item.status}
                      />
                    </Stack> */}
                    <PoppinsSixteenText className="skills-card">
                    {item.language}
                  </PoppinsSixteenText>
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
