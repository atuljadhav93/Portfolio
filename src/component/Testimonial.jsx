import React, { useEffect, useState } from "react";
import { Avatar, Box } from "@mui/material";
import {
  PageHeadingText,
  PoppinsForteenText,
  PoppinsSixteenTextLink,
  PoppinsSmallText,
} from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TestimonialText } from "../constants/Text";
import { testimonial } from "../constants/data";

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

export default function Testimonial() {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowComponent(window.innerWidth > 320);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures effect only runs once

  const settings = {
    dots: false,
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

  return (
    <>
      {showComponent && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: {
              xs: "30px 30px",
              sm: "15px 15px",
              md: "15px 85.333px",
              lg: "15px 85.333px",
              xl: "15px 85.333px",
            },
            textAlign: "center",
          }}
        >
          <PageHeadingText sx={{ color: "#003C2F" }}>
            {TestimonialText}
          </PageHeadingText>
          <Slider
            {...settings}
            style={{
              width: "100%",
              padding: "10px 80px 20px 80px",
            }}
          >
            {testimonial?.map((item) => (
              <Box
                key={item.toString()}
                style={{
                  display: "flex",
                  justifyContent: "row",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt={item.name}
                    sx={{
                      width: "4rem",
                      height: "4rem",
                    }}
                    src={item?.src}
                  />
                  <Box
                    style={{
                      textAlign: "left",
                      justifyContent: "center",
                      marginLeft: "4px",
                    }}
                  >
                    <PoppinsSixteenTextLink
                      href={item.profileURL}
                      target="_blank"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      {item.name}
                    </PoppinsSixteenTextLink>
                    <PoppinsSmallText className="tech-stack-color">
                      {item.designation}
                    </PoppinsSmallText>
                  </Box>
                </Box>
                <Box>
                  <PoppinsForteenText className="text-color text-top hero--section-description">
                    {item.text}
                  </PoppinsForteenText>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      )}
    </>
  );
}
