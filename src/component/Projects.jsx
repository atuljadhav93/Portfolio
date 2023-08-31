import React from "react";
import { Box } from "@mui/material";
import data from "../data/index.json";
import { PageHeadingText } from "./styles";

export default function MyPortfolio() {
  return (
    <Box id="projects">
      <PageHeadingText>My Work</PageHeadingText>
      <Box className="portfolio--section">
        <Box className="portfolio--section--container ">
          {data?.portfolio?.map((item, index) => (
            <div key={item.id} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
                <p className="text-sm portfolio--link">
                  {item.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
