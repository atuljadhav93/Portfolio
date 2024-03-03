import React from "react";
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

export default function Testimonial() {
  const slidersCards = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1800,
    dots: true,
    responsive: [
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 3630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 8500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
    ],
    //  appendDots: dots => <ul>{dots}</ul>,
    //  customPaging: i => (
    //    <div className="ft-slick__dots--custom">
    //      <div className="loading" />
    //    </div>
    //  )
  };

  return (
    <Box
      id="testimonial"
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        overflowX: "hidden",
        overflowY: "hidden", // Prevent horizontal scrolling
      }}
    >
      <PageHeadingText sx={{ color: "#003C2F" }}>
        {TestimonialText}
      </PageHeadingText>
      <Slider
        {...slidersCards}
        style={{
          maxWidth: "100%", // Ensure Slider doesn't exceed viewport width
          padding: "20px 40px 40px 40px", // Adjust padding as needed
          margin: "0 auto", // Center align the Slider
        }}
        className="slider-dots"
        appendDots={(dots) => (
          <Box
            style={{
              textAlign: "center",
              marginBottom: "20px",
              left: "20px",
            }}
          >
            <ul style={{ margin: "0", padding: "0" }}> {dots} </ul>
          </Box>
        )}
      >
        {testimonial?.map((item, index) => (
          <Box key={index} style={{ padding: "20px 20px" }}>
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
                <PoppinsSmallText
                  className="tech-stack-color"
                  style={{
                    color: item?.color,
                  }}
                >
                  {item.designation}
                </PoppinsSmallText>
              </Box>
            </Box>
            <Box>
              <PoppinsForteenText
                className="text-color text-top hero--section-description"
                sx={{
                  color: item?.color,
                  height: {
                    xs: "160px",
                    sm: "160px",
                    md: "100px",
                    lg: "100px",
                    xl: "100px",
                  },
                  overflowY: "hidden",
                  "&:hover": {
                    overflowY: "scroll",
                  },
                  "&::-webkit-scrollbar": {
                    width: "8px",
                    display: "none",
                  },
                  "&:hover::-webkit-scrollbar": {
                    display: "block",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                  },
                }}
              >
                {item.text}
              </PoppinsForteenText>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
