import React from "react";
import { Box } from "@mui/material";
import data from "../data/index.json";
import {
  PageHeadingText,
  PoppinsEighteenText,
  PoppinsForteenText,
  PoppinsSixteenText,
} from "./styles";
import { MyWorkText } from "./constants/Text";

export default function MyPortfolio() {
  return (
    <Box id="projects">
      <PageHeadingText sx={{ color: "#003C2F" }}>{MyWorkText}</PageHeadingText>
      <Box className="portfolio--section">
        <Box className="portfolio--section--container">
          {data?.portfolio?.map((item, index) => (
            <Box key={item.id} className="portfolio--section--card">
              <Box className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
              </Box>
              <Box className="portfolio--section--card--content">
                <PoppinsEighteenText className="text-head-color">
                  {item.title}
                </PoppinsEighteenText>
                <PoppinsForteenText className="text-color text-top">
                  {item.description}
                </PoppinsForteenText>
                <Box className="project--card--link">
                  <PoppinsSixteenText className="text-color portfolio--link">
                    {item.github}
                  </PoppinsSixteenText>
                  <PoppinsSixteenText className="portfolio--link">
                    {item.demo}
                  </PoppinsSixteenText>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
