import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import {
  AboutMeDescriptionFirst,
  AboutMeDescriptionSecond,
  AboutMeText,
} from "./constants/Text";
import { DisplayFlexCenter } from "./styles";

export default function AboutMe() {
  const handleDownloadClick = () => {
    // Define the path to the file in the public folder
    const filePath = "./img/Atul Jadhav Resume.pdf"; // Replace with the actual file path

    // Create a link element
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + filePath; // Build the absolute URL
    link.setAttribute("download", "Atul Jadhav Resume.pdf"); // Set the desired file name

    // Trigger the click event to start the download
    document.body.appendChild(link);
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
            src="./img/Atul Jadhav2.jpg"
            sx={{
              width: { xs: 200, sm: 350, md: 350, lg: 350, xl: 350 },
              height: { xs: 200, sm: 350, md: 350, lg: 350, xl: 350 },
            }}
            className="profile-pic"
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
            {/* <Box
              // className="container5 download-button"
              clssName="download-button1"
            >
              <span
                // class="download-icon"
                className="download-button1"
                onClick={handleDownloadClick}
              >
                Download File
              </span>
            </Box> */}
            <Box
              class="downloadicon download_button"
              onClick={handleDownloadClick}
            >
              <Box class="cloud">
                <Box class="arrowdown"></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
}
