import React from "react";
import { Box, Link } from "@mui/material";
import { PageHeadingText, PoppinsSixteenText, WatchVideoBtn } from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import YouTube from "react-youtube";
import { MyYouTubeVideos } from "./constants/Text";

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

export default function Video() {
  const videoTutorial = [
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          // centerMode: true,
          // centerPadding: "54px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          // centerPadding: "54px",
        },
      },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const opts = {
    height: "270",
    width: "450",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <Box
        id="mySkills"
        sx={{
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FAE9DF",
          // border: "1px solid red",
          padding: {
            xs: "15px 15px",
            sm: "15px 15px",
            md: "15px 85.333px",
            lg: "15px 85.333px",
            xl: "15px 85.333px",
          },
          textAlign: "center",
          // alignSelf: "stretch",
        }}
      >
        <PageHeadingText sx={{ color: "#003C2F" }}>
          {MyYouTubeVideos}
        </PageHeadingText>
        <Slider {...settings}>
          {videoTutorial?.map((item, index) => (
            <Box
              key={item.toString()}
              style={{
                // border: "1px solid blue",
                borderRadius: "10px",
                height: "auto",
                width: "100%",
                marginBottom: "2rem",
                cursor: "pointer",
                background: "#EDE7E1",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  rowGap: 10,
                }}
              >
                {item?.id === "3" ? (
                  <Box
                    style={{
                      marginTop: "7%",
                    }}
                  >
                    <PoppinsSixteenText sx={{ color: "#003c2f" }}>
                      There are many more !
                    </PoppinsSixteenText>
                  </Box>
                ) : (
                  <YouTube videoId={item?.videoId} opts={opts} />
                )}
                <PoppinsSixteenText sx={{ color: "#003c2f" }}>
                  {item?.title}
                </PoppinsSixteenText>
                <Link
                  href={item?.videoLink}
                  target={item?.id === "3" || item?.id === "2" ? "_blank" : ""}
                  rel="noopener noreferrer"
                >
                  <WatchVideoBtn
                    id="hireMe"
                    variant="contained"
                    disableElevation
                    type="submit"
                  >
                    {item?.id === "3" ? "Visit Now" : "Watch Video"}
                  </WatchVideoBtn>
                </Link>
              </Box>
            </Box>
          ))}
        </Slider>
        <Box sx={{ mb: "2rem" }}></Box>
      </Box>
    </>
  );
}
