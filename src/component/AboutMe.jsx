import React from "react";
import { Avatar, Box } from "@mui/material";
import {
  AboutMeDescriptionFirst,
  AboutMeDescriptionSecond,
  AboutMeText,
  DownloadMyResume,
  DownloadResume,
} from "./constants/Text";
import {
  DisplayFlexCenter,
  PoppinsForteenText,
  PoppinsSixteenText,
  PoppinsThirtySixText,
} from "./styles";

export default function AboutMe() {
  const handleDownloadClick = () => {
    const filePath = "./img/Atul Jadhav Resume.pdf";
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

  //based on even and odd date show diff btn
  const currentDate = new Date();
  const isEvenDay = currentDate.getDate() % 2 === 0;

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
            {isEvenDay ? (
              <DisplayFlexCenter
                className="download-button"
                onClick={handleDownloadClick}
                sx={{
                  width: "150px",
                  marginBottom: "4px",
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
                  // sx={{
                  //   display: "flex",
                  //   justifyContent: {
                  //     xs: "center",
                  //     sm: "center",
                  //     md: "center",
                  //     lg: "flex-start",
                  //     xl: "flex-start",
                  //   }
                  // }}
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
