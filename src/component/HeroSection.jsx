import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import {
  ButtonStyle,
  PoppinsForteenText,
  PoppinsThirtySixText,
} from "./styles";
import TypeWriter from "typewriter-effect";
import { DeveloperName, HireMe, LetsTalk, SelfIntoText } from "../constants/Text";
import { WhatsApp, GitHub, Linkedin } from "../assets/icons/Icons";
import { github, linkedinUrl, whatsappUrl } from "../constants/const";

export default function HeroSection() {
  
  const handleLetsTalkClick = () => {
    const aboutSection = document.getElementById("aboutMe");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleHireMeClick = () => {
    const recipientEmail = process.env.REACT_APP_MAIL_ID;
    const subject = "Interested in Hiring";
    const body = "Hello Atul,\n\n";
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box id="heroSection" className="hero--section">
      <Box
        className="hero--section--content--box intro-text"
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
          alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
          flexDirection: "column",
        }}
      >
        <Box className="hero--section--content">
          <PoppinsThirtySixText
            sx={{
              color: "#003C2F",
            }}
          >
            {DeveloperName}
          </PoppinsThirtySixText>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "auto",
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            <Typography
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: "2rem",
                // color: "#30AD01",
                color: "#FF7722 ",
              }}
            >
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "I'm a Frontend Developer.",
                    "I'm a YouTuber.",
                    '<span class="sanskrit-font">भारतीय: अहमिति मम गर्व:</span>',
                  ],
                }}
              />
            </Typography>
          </Box>

          <PoppinsForteenText className="hero--section-description ">
            {SelfIntoText}
          </PoppinsForteenText>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "flex-start",
              md: "flex-start",
              lg: "flex-start",
              xl: "flex-start",
            },
            alignItems: {
              xs: "center",
              sm: "flex-start",
              md: "flex-start",
              lg: "flex-start",
              xl: "flex-start",
            },
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            },
            mt: {
              xs: "2px",
              sm: "2px",
              md: "16px",
              lg: "16px",
              xl: "16px",
            },
          }}
        >
          <ButtonStyle
            id="hireMe"
            className="btn-hover-round"
            sx={{
              height: "48px",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 500,
              width: "10rem",
            }}
            variant="contained"
            disableElevation
            type="submit"
            onClick={handleHireMeClick}
          >
            {HireMe}
          </ButtonStyle>
          <Button
            style={{
              visibility: "hidden",
            }}
          ></Button>
          <ButtonStyle
            id="talk-button"
            className="btn-hover-round"
            sx={{
              height: "48px",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 500,
              width: "10rem",
            }}
            variant="contained"
            disableElevation
            type="submit"
            onClick={handleLetsTalkClick}
          >
            {LetsTalk}
          </ButtonStyle>
        </Box>
        <Box
          sx={{
            width: "auto",
            marginTop: "24px",
          }}
        >
          <Box className="effect jaques">
            <Box className="buttons">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp"
              >
                <WhatsApp />
              </Link>
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <GitHub />
              </Link>
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="in"
              >
                <Linkedin />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="hero--section--img">
        <img src="./img/main-logo.svg" alt="main-icon" />
      </Box>
    </Box>
  );
}
