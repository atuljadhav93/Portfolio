import React from "react";
import { Box } from "@mui/material";
import { projects } from "../constants/data";
import {
  DisplayFlexCenter,
  PageHeadingText,
  PoppinsEighteenText,
} from "./styles";
import { MyWorkText } from "../constants/Text";
import { useDispatch } from "react-redux";
import { setOpenMoreModel } from "../slice/OpenModel";
import ProjectCard from "./ProjectCard";

export default function MyPortfolio() {
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(setOpenMoreModel(true));
  };

  return (
    <>
      <Box id="projects">
        <PageHeadingText className="text-color">{MyWorkText}</PageHeadingText>
        <Box className="portfolio--section">
          <Box className="portfolio--section--container">
            {projects?.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </Box>
        </Box>
        <DisplayFlexCenter>
          <PoppinsEighteenText
            sx={{
              color: "#3087EC",
              cursor: "pointer",
              mb: 1,
            }}
            onClick={handleClickOpen}
            className="awesome"
          >
            See More...
          </PoppinsEighteenText>
        </DisplayFlexCenter>
      </Box>
    </>
  );
}
