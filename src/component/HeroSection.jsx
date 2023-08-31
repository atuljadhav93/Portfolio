import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { ButtonStyle } from "./styles";
import TypeWriter from "typewriter-effect";
import { WhatsApp, GitHub, Linkedin } from "./icon/Icons";

export default function HeroSection() {
  const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;
  const whatsappUrl = process.env.REACT_APP_WHATSAPP_URL;
  const github = process.env.REACT_APP_GITHUB_URL;
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
      <Box className="hero--section--content--box">
        <Box className="hero--section--content">
          <Typography
            style={{
              // fontFamily: "'Open Sans', sans-serif",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: "1.5rem",
              // fontFamily: "'Sacramento', cursive",
              // textTransform: "none",
              // fontWeight: 400,
              // color: "#dc143c",
              // fontSize:"3rem"
            }}
          >
            Atul Jadhav
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "auto",
            }}
          >
            <Typography
              style={{
                // fontFamily: "'Open Sans', sans-serif",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: "1.5rem",
              }}
            >
              I'm a
            </Typography>
            &ensp;
            <Typography
              style={{
                // fontFamily: "'Open Sans', sans-serif",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: "2rem",
                color: "#dc143c",
              }}
            >
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Frontend Developer.",
                    "YouTuber.",
                    "Proud Indian.",
                  ],
                }}
              />
            </Typography>
          </Box>

          <Typography className="hero--section-description">
            Hello there! I'm Atul Jadhav, a passionate frontend developer and
            open source contributor, on a mission to craft beautiful and
            user-friendly digital experiences. With a deep-rooted love for web
            development, I find joy in bringing creative designs to life through
            code.
          </Typography>
        </Box>
        <ButtonStyle
          id="hireMe"
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
          Hire Me
        </ButtonStyle>
        <Button
          style={{
            visibility: "hidden",
          }}
        ></Button>
        <ButtonStyle
          id="talk-button"
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
          Let's Talk
        </ButtonStyle>
        <Box
          style={{
            display: "flex",
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
