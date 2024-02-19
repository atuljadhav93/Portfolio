import React, { useState } from "react";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { portfolio } from "../constants/data";
import {
  DisplayFlex,
  PageHeadingText,
  PlayIconButton,
  PoppinsEighteenText,
  PoppinsForteenText,
  PoppinsSixteenTextLink,
  PoppinsSmallText,
} from "./styles";
import { MyWorkText } from "../constants/Text";
import { ExternalLink, GitHub, PlayIcon } from "../assets/icons/Icons";
import CustomDialogBox from "./Dialog";

export default function MyPortfolio() {
  // const [showScrollbar, setShowScrollbar] = useState(true);
  const [openDialog, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  // eslint-disable-next-line 
  console.log("2", openDialog);

  const handleClickOpen = (id) => () => {
    setOpen(true);
  };

  return (
    <>
      <Box id="projects">
        <PageHeadingText className="text-color">{MyWorkText}</PageHeadingText>
        <Box className="portfolio--section">
          <Box className="portfolio--section--container">
            {portfolio?.map((item) => (
              <Box key={item.id} className="portfolio--section--card">
                <Box className="portfolio--section--card--content">
                  <Box
                    className="portfolio--section--img"
                    sx={{
                      position: "relative",
                    }}
                  >
                    <img src={item.src} alt="Placeholder" />
                    <PlayIconButton
                      sx={{
                        height: 200,
                        opacity: 0,
                        position: "absolute",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <IconButton
                      onClick={handleClickOpen(item?.id)}
                      >
                        <PlayIcon width="50px" height="50px" />
                      </IconButton>
                    </PlayIconButton>
                  </Box>
                  <PoppinsSmallText className="tech-stack-color text-top">
                    {item.techStack}
                  </PoppinsSmallText>
                  <PoppinsEighteenText className="text-head-color text-top">
                    {item.title}
                  </PoppinsEighteenText>
                  <Box
                    sx={{
                      height: "150px",
                      overflowY: "hidden", // Initially hide scrollbar
                      "&:hover": {
                        overflowY: "scroll", // Show scrollbar on hover
                      },
                      "&::-webkit-scrollbar": {
                        width: "8px",
                        display: "none", // Initially hide scrollbar
                      },
                      "&:hover::-webkit-scrollbar": {
                        display: "block", // Show scrollbar on hover
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#888", // Color of the scrollbar thumb
                        borderRadius: "14px", // Rounded corners for the thumb
                      },
                    }}
                  >
                    <PoppinsForteenText className="text-color text-top">
                      {item.description}
                    </PoppinsForteenText>
                  </Box>
                  <Box className="project--card--link">
                    <DisplayFlex>
                      <Box className="project--card--icon">
                        <GitHub />
                      </Box>
                      <PoppinsSixteenTextLink
                        href={item.githubUrl}
                        target="_blank"
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
                        href={item.demoUrl}
                        target="_blank"
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
      {/* view recording */}
      <CustomDialogBox
        padding="15px 20px"
        open={openDialog}
        setOpen={closeDialog}
        background={"transparent"}
        closeIconId="close-view-project-btn"
        width={{
          xs: "90vw",
          sm: "600px",
          md: "600px",
          lg: "60vw",
          xl: "65vw",
        }}
        height={{
          xs: "40vh",
          sm: "60vh",
          md: "65vh",
          lg: "85vh",
          xl: "85vh",
        }}
        childrens={
          <Box
            sx={{
              width: "100%",
              height: "100%",
              padding: "0",
              margin: "auto",
              display: "flex",
              alignItems: "center",
            }}
            id="project"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <CircularProgress />
              <Typography
                sx={{ fontFamily: "Poppins", textAlign: "center", mt: 2 }}
              >
                Please wait while we are loadin video.
              </Typography>
            </Box>
          </Box>
        }
      />
    </>
  );
}
