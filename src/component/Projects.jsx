import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
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
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import YouTube from "react-youtube";

export default function MyPortfolio() {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  // open modal
  const openModal = () => {
    setModal(!modal);
  };
  // loader
  const spinner = () => {
    setVideoLoading(!videoLoading);
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
                        opacity: 0,
                        position: "absolute",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <IconButton onClick={openModal}>
                        <PlayIcon width="50px" height="50px" />
                      </IconButton>
                    </PlayIconButton>
                  </Box>
                  {modal ? (
                    <Box className="modal-bg">
                      <Box className="modal-align">
                        <Box className="modal-content" modal={modal}>
                          <IoCloseOutline
                            className="modal-close"
                            arial-label="Close modal"
                            onClick={openModal}
                          />
                          <Box className="modal-video-align">
                            {videoLoading ? (
                              <Box className="modal-spinner">
                                <BiLoaderAlt
                                  className="modal-spinner-style"
                                  fadeIn="none"
                                />
                              </Box>
                            ) : null}
                            <iframe
                              className="modal-video-style"
                              onLoad={spinner}
                              loading="lazy"
                              width="800"
                              height="500"
                              src={`https://www.youtube.com/embed/${item.videoLink}`}
                              // src={item.videoLink}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                            {/* <YouTube videoId={item?.videoLink} opts={opts} /> */}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ) : null}
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
    </>
  );
}
