import React from "react";
import { Box, Grid, Typography, Link, Tooltip } from "@mui/material";
import {
  IndiaFlag,
  NoCopyRight,
  Instagram,
  Linkedin,
  WhatsApp,
  GitHub,
  YouTube,
} from "../assets/icons/Icons";
import { DisplayFlexCenter, FindText, PoppinsSixteenText } from "./styles";
import {
  CopyRightIssueText,
  DeveloperName,
  PingMe,
  Proud,
  RichOut,
  WhereDesign,
} from "../constants/Text";
import {
  github,
  instagram,
  linkedinUrl,
  whatsappUrl,
  youtube,
} from "../constants/const";
import { handleRealisticConfetti } from "../constants/Confetti";

function Footer() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#FAE9DF",
          padding: {
            xs: "15px 15px",
            sm: "15px 15px",
            md: "15px 85.333px",
            lg: "15px 85.333px",
            xl: "15px 85.333px",
          },
          textAlign: "center",
          alignSelf: "stretch",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          style={{
            lineHeight: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <PoppinsSixteenText className="flex--center text-color">
            No&nbsp;
            <Tooltip
              title="Stay connected to my YouTube channel for engaging content."
              arrow
            >
              <Box
                style={{
                  marginTop: "4px",
                }}
              >
                <NoCopyRight />
              </Box>
            </Tooltip>
            &nbsp;{CopyRightIssueText}
          </PoppinsSixteenText>
          <PoppinsSixteenText
            style={{
              display: { lg: "flex", xl: "flex" },
              alignItems: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "flex-start",
                xl: "flex-start",
              },
              color: "#003c2f",
            }}
          >
            {RichOut}
            <br />
            {PingMe}
          </PoppinsSixteenText>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Tooltip title="Connect with me on LinkedIn." followCursor>
            <Typography
              style={{
                fontFamily: "'Sacramento', cursive",
                textTransform: "none",
                fontWeight: 400,
                color: "#E85122",
                fontSize: "3em",
              }}
            >
              {DeveloperName}
            </Typography>
          </Tooltip>
          <PoppinsSixteenText
            sx={{
              display: { sm: "flex", md: "flex", lg: "flex", xl: "flex" },
              justifyContent: "center",
              alignItems: "center",
              color: "#003c2f",
            }}
            className="no-select-txt"
          >
            {WhereDesign}&nbsp;
            <Tooltip title="भारत" arrow>
              <Box
                onMouseOver={handleRealisticConfetti}
                style={{
                  marginTop: "4px",
                  cursor:"pointer"
                }}
              >
                <IndiaFlag />
              </Box>
            </Tooltip>
            &nbsp;{Proud}
          </PoppinsSixteenText>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <DisplayFlexCenter>
            <FindText
              onMouseOver={handleRealisticConfetti}
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "16px",
                color: "#003c2f",
              }}
            >
              You can find me&nbsp;
            </FindText>
            <FindText
              onMouseOver={handleRealisticConfetti}
              className="text-red blink-soft"
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "16px",
                color: "#003c2f",
              }}
            >
              everywhere.
            </FindText>
          </DisplayFlexCenter>
          <Box
            className="effect jaques"
            style={{
              display: "flex",
              marginTop: "14px",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              backgroundColor: "#FAE9DF",
            }}
          >
            <Box className="buttons">
              <Tooltip title="Let's connect on Instagram." arrow>
                <Link href={instagram} target="_blank" className="insta">
                  <Instagram />
                </Link>
              </Tooltip>
              <Tooltip title="Feel free to reach out to me on WhatsApp." arrow>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp"
                >
                  <WhatsApp />
                </Link>
              </Tooltip>
              <Tooltip title="Connect with me on LinkedIn." arrow>
                <Link
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="in"
                >
                  <Linkedin />
                </Link>
              </Tooltip>
              <Tooltip title="Explore my GitHub profile." arrow>
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github"
                >
                  <GitHub />
                </Link>
              </Tooltip>
              <Tooltip title="Subscribe today and join the journey!" arrow>
                <Link
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube confetti-button"
                >
                  <YouTube />
                </Link>
              </Tooltip>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
