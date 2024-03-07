import React, { useEffect, useState } from "react";
import { Avatar, Box } from "@mui/material";
import {
  AboutMeDescriptionFirst,
  AboutMeDescriptionFour,
  AboutMeDescriptionSecond,
  AboutMeDescriptionThird,
  AboutMeText,
  DownloadMyResume,
  DownloadResume,
} from "../constants/Text";
import {
  DisplayFlexCenter,
  PoppinsForteenText,
  PoppinsSixteenText,
  PoppinsThirtySixText,
} from "./styles";
import RESUME_PATH from "../assets/Atul Jadhav Resume.pdf";

export default function AboutMe() {
  const [isButton, setIsButton] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const screenWidth = window.innerWidth;
      setIsButton(screenWidth <= 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const handleDownloadClick = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = RESUME_PATH; // Build the absolute URL
    link.download = "Atul Jadhav Resume.pdf"; // You can change the filename here
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Clean up by removing the link element
    document.body.removeChild(link);
  };

  return (
    <>
      <section id="aboutMe" className="about--section">
        <DisplayFlexCenter>
          <Avatar
            alt="Atul Jadhav"
            src="https://res.cloudinary.com/dtd0guzj1/image/upload/v1706863173/Portfolio/Atul_Jadhav2_ovmnen.jpg"
            sx={{
              width: { xs: 200, sm: 350, md: 350, lg: 350, xl: 350 },
              height: { xs: 200, sm: 350, md: 350, lg: 350, xl: 350 },
            }}
            className="profile-pic"
          />
        </DisplayFlexCenter>
        <Box className="hero--section--content--box about--section--box">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "flex-start",
                xl: "flex-start",
              },
              flexDirection: "column",
              gap: "21.333px",
            }}
          >
            <PoppinsThirtySixText sx={{ color: "#003C2F" }}>
              {AboutMeText}
            </PoppinsThirtySixText>
            <PoppinsForteenText className="hero--section-description">
              {AboutMeDescriptionFirst}
            </PoppinsForteenText>
            <PoppinsForteenText className="hero--section-description">
              {AboutMeDescriptionSecond}
            </PoppinsForteenText>
            <PoppinsForteenText className="hero--section-description">
              {AboutMeDescriptionThird}
            </PoppinsForteenText>
            <PoppinsForteenText className="hero--section-description">
              {AboutMeDescriptionFour}
            </PoppinsForteenText>
            {isButton ? (
              <DisplayFlexCenter
                className="download-button"
                onClick={handleDownloadClick}
                sx={{
                  width: "150px",
                  marginBottom: "14px",
                }}
              >
                {DownloadResume}
              </DisplayFlexCenter>
            ) : (
              <>
                <PoppinsSixteenText
                  sx={{
                    color: "#3087EC",
                  }}
                >
                  {DownloadMyResume}
                </PoppinsSixteenText>
                <Box
                  class="downloadicon download_button"
                  onClick={handleDownloadClick}
                >
                  <Box class="cloud">
                    <Box class="arrowdown"></Box>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </section>
    </>
  );
}
