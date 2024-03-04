import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { portfolio } from "../constants/data";
import {
  DisplayFlex,
  DisplayFlexCenter,
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
import { useDispatch } from "react-redux";
import { setOpenMoreModel } from "../slice/OpenModel";

export default function MyPortfolio() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoId, setVideoId] = useState(null);

  const openModal = (id) => {
    setModal(true);
    setVideoId(id);
  };

  const closeModal = () => {
    setModal(false);
    setVideoId(null);
  };

  // loader
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  const handleClickOpen = () => {
    dispatch(setOpenMoreModel(true));
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
                    {item.id !== "1" && (
                      <PlayIconButton
                        sx={{
                          opacity: 0,
                          position: "absolute",
                          "&:hover": {
                            opacity: 1,
                          },
                        }}
                      >
                        <IconButton onClick={() => openModal(item.videoId)}>
                          <PlayIcon width="50px" height="50px" />
                        </IconButton>
                      </PlayIconButton>
                    )}
                  </Box>
                  {modal ? (
                    <Box className="modal-bg">
                      <Box className="modal-align">
                        <Box className="modal-content" modal={modal}>
                          <IoCloseOutline
                            className="modal-close"
                            arial-label="Close modal"
                            onClick={closeModal}
                          />
                          <Box className="modal-video-align">
                            {videoLoading ? (
                              <Box className="modal-spinner">
                                <span className="loader"></span>
                              </Box>
                            ) : null}
                            <iframe
                              className="modal-video-style"
                              onLoad={spinner}
                              loading="lazy"
                              width="800"
                              height="500"
                              src={`https://www.youtube.com/embed/${videoId}`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
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
                        // className="text-color portfolio--link"
                        className={`text-color portfolio--link ${
                          item.id === "2" ? "disabled" : ""
                        }`}
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
        <DisplayFlexCenter>
          <PoppinsEighteenText
            sx={{
              color: "#3087EC",
              cursor: "pointer",
              mb: 1,
            }}
            onClick={handleClickOpen}
          >
            See More...
          </PoppinsEighteenText>
        </DisplayFlexCenter>
      </Box>
    </>
  );
}
