import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import {
  AboutMeDescriptionFirst,
  AboutMeDescriptionSecond,
  AboutMeText,
} from "./constants/Text";
import { DisplayFlexCenter } from "./styles";

export default function AboutMe() {
  return (
    <>
      <section id="aboutMe" className="about--section">
        <DisplayFlexCenter>
          <Avatar
            alt="Atul Jadhav"
            src="./img/Atul Jadhav2.jpg"
            sx={{
              width: 350,
              height: 350,
            }}
          />
        </DisplayFlexCenter>
        <Box className="hero--section--content--box about--section--box">
          <Box className="hero--section--content">
            <Typography
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "36px",
              }}
            >
              {AboutMeText}
            </Typography>
            <Typography className="hero--section-description">
              {AboutMeDescriptionFirst}
            </Typography>
            <Typography className="hero--section-description">
              {AboutMeDescriptionSecond}
            </Typography>
          </Box>
        </Box>
      </section>
    </>
  );
}
