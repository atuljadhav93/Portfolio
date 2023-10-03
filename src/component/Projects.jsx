import React from "react";
import { Box } from "@mui/material";
import { portfolio } from "../constants/data";
import {
  DisplayFlex,
  PageHeadingText,
  PoppinsEighteenText,
  PoppinsForteenText,
  PoppinsSixteenTextLink,
  PoppinsSmallText,
} from "./styles";
import { MyWorkText } from "../constants/Text";
import { ExternalLink, GitHub } from "../assets/icons/Icons";

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
                  <PoppinsSmallText className="tech-stack-color text-top">
                    {item.techStack}
                  </PoppinsSmallText>
                  <PoppinsEighteenText className="text-head-color text-top">
                    {item.title}
                  </PoppinsEighteenText>
                  <PoppinsForteenText className="text-color text-top">
                    {item.description}
                  </PoppinsForteenText>
                  <Box className="project--card--link">
                    <DisplayFlex>
                      <Box className="project--card--icon">
                        <GitHub />
                      </Box>
                      <PoppinsSixteenTextLink
                        href="#"
                        underline="none"
                        className="text-color portfolio--link"
                      >
                        {item.github}
                      </PoppinsSixteenTextLink>
                    </DisplayFlex>
                    <DisplayFlex>
                      <Box className="project--card--icon">
                        <ExternalLink />
                      </Box>
                      <PoppinsSixteenTextLink
                        href="#"
                        underline="none"
                        className="portfolio--link"
                      >
                        {item.demo}
                      </PoppinsSixteenTextLink>
                    </DisplayFlex>
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
