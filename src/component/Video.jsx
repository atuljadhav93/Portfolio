import React, { useEffect, useState } from "react";
import { Box, Link } from "@mui/material";
import { PageHeadingText, PoppinsSixteenText, WatchVideoBtn } from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import YouTube from "react-youtube";
import { MyYouTubeVideos } from "../constants/Text";
import { videoTutorial } from "../constants/data";

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
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);
    };
    checkIsMobile();
    // Listen for window resize events to update the mobile status
    window.addEventListener("resize", checkIsMobile);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
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
          padding: {
            xs: "15px 15px",
            sm: "15px 15px",
            md: "15px 85.333px",
            lg: "15px 85.333px",
            xl: "15px 85.333px",
          },
          textAlign: "center",
        }}
      >
        <PageHeadingText className="text-color">
          {MyYouTubeVideos}
        </PageHeadingText>
        {isMobile ? (
          <>
            <Box
              style={{
                marginTop: "7%",
                height: "270",
                width: "450",
              }}
            >
              <PoppinsSixteenText className="text-color">
                There's a lot more to explore !
              </PoppinsSixteenText>
              <PoppinsSixteenText className="text-color">
                check out my YouTube channel.
              </PoppinsSixteenText>
              <Link
                href={"https://youtube.com/@techedumeet"}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <WatchVideoBtn
                  id="visitNow"
                  variant="contained"
                  disableElevation
                  type="submit"
                >
                  Visit Now
                </WatchVideoBtn>
              </Link>
            </Box>
          </>
        ) : (
          <Slider {...settings}>
            {videoTutorial?.map((item, index) => (
              <Box
                key={item.toString()}
                style={{
                  borderRadius: "10px",
                  height: "auto",
                  marginBottom: "2rem",
                  cursor: "pointer",
                  background: "#EDE7E1",
                }}
              >
                <Box>
                  {item?.id === "3" ? (
                    <Box
                      style={{
                        marginTop: "7%",
                        height: "270",
                        width: "450",
                      }}
                    >
                      <PoppinsSixteenText className="text-color">
                        There are many more !
                      </PoppinsSixteenText>
                    </Box>
                  ) : (
                    <>
                      <YouTube videoId={item?.videoId} opts={opts} />
                    </>
                  )}
                  <PoppinsSixteenText className="text-color">
                    {item?.title}
                  </PoppinsSixteenText>
                  <Link
                    href={item?.videoLink}
                    target={
                      item?.id === "3" || item?.id === "2" ? "_blank" : ""
                    }
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
        )}
        <Box sx={{ mb: "2rem" }}></Box>
      </Box>
    </>
  );
}
