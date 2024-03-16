import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import {
  ButtonStyle,
  PoppinsForteenText,
  PoppinsThirtySixTextLink,
} from "./styles";
import TypeWriter from "typewriter-effect";
import {
  DeveloperName,
  HireMe,
  // LetsTalk,
  SelfIntoText,
  ViewResumeBtn,
} from "../constants/Text";
import { WhatsApp, GitHub, Linkedin, Call } from "../assets/icons/Icons";
import { github, linkedinUrl, whatsappUrl } from "../constants/const";
import { useDispatch, useSelector } from "react-redux";
import { setPdfViewerFlag } from "../slice/ViewResume";
import PdfViewer from "./Pdf-viewer";
import { emailData } from "../constants/data";

export default function HeroSection() {
  const dispatch = useDispatch();
  const pdfViewerFlag = useSelector((state) => state.ViewResume.pdfViewerFlag);
  // const handleLetsTalkClick = () => {
  //   const aboutSection = document.getElementById("aboutMe");
  //   aboutSection.scrollIntoView({ behavior: "smooth" });
  // };
  const handleHireMeClick = () => {
    const mailtoLink = `mailto:${
      emailData.recipient
    }?subject=${encodeURIComponent(
      emailData.subject
    )}&body=${encodeURIComponent(emailData.body)}`;
    window.location.href = mailtoLink;
  };

  const handleViewResume = () => {
    dispatch(setPdfViewerFlag(true));
  };

  const dispatchHandler = () => {
    dispatch(setPdfViewerFlag(false));
  };

  const handlePDFView = () => {
    if (pdfViewerFlag) {
      return (
        <div className="pdf-viewer-container">
          <div className="close-button" onClick={dispatchHandler}>
            <p>Close Preview </p>
          </div>
          <PdfViewer />
        </div>
      );
    }
  };

  const handleCall = () => {
    const phoneNumber = "9689671427";
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <Box id="heroSection" className="hero--section">
      {handlePDFView()}
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
          <PoppinsThirtySixTextLink
            href={linkedinUrl}
            target="_blank"
            sx={{
              color: "#003C2F",
              textDecoration: "none",
            }}
          >
            {DeveloperName}
          </PoppinsThirtySixTextLink>
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
                    "I create content on YouTube.",
                    '<span class="sanskrit-font">भारतीय: अहमिति मम गर्व:</span>',
                  ],
                }}
              />
            </Typography>
          </Box>

          <PoppinsForteenText className="hero--section-description no-select-txt">
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
              height: "44px",
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
          {/* <Button
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
          </ButtonStyle> */}
          <Button
            style={{
              visibility: "hidden",
            }}
          ></Button>
          <ButtonStyle
            id="talk-button"
            className="btn-hover-round"
            sx={{
              height: "44px",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 500,
              width: "10rem",
            }}
            variant="contained"
            disableElevation
            type="submit"
            onClick={handleViewResume}
          >
            {ViewResumeBtn}
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
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="call"
                onClick={handleCall}
              >
                <Call />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="hero--section--img">
        <img
          src="https://res.cloudinary.com/dtd0guzj1/image/upload/v1706946101/Portfolio/main-logo_vgte4k.svg"
          alt="main-icon"
        />
      </Box>
    </Box>
  );
}
