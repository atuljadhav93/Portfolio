import React from "react";
import { Box } from "@mui/material";
import { portfolio } from "../constants/data";
import {
  PageHeadingText,
  PoppinsEighteenText,
  PoppinsForteenText,
  PoppinsSixteenText,
} from "./styles";
import { MyWorkText } from "../constants/Text";

export default function MyPortfolio() {
  return (
    <>
      <Box id="projects">
        <PageHeadingText className="text-color">{MyWorkText}</PageHeadingText>
        <Box className="portfolio--section">
          <Box className="portfolio--section--container">
            {portfolio?.map((item) => (
              <Box key={item.id} className="portfolio--section--card">
                <Box className="portfolio--section--card--content">
                  <Box className="portfolio--section--img">
                    <img src={item.src} alt="Placeholder" />
                  </Box>
                  <PoppinsEighteenText className="text-head-color text-top">
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
    </>
  );
}
