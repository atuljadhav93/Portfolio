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
} from "./icons/Icons";
import confetti from "canvas-confetti";
import { DisplayFlexCenter, FindText } from "./styles";

function Footer() {
  const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;
  const whatsappUrl = process.env.REACT_APP_WHATSAPP_URL;
  const github = process.env.REACT_APP_GITHUB_URL;
  const youtube = process.env.REACT_APP_YOUTUBE_URL;
  const instagram = process.env.REACT_APP_INSTAGRAM_URL;

  const defaults = {
    origin: { y: 0.5 },
  };

  const fire = (particleRatio, opts) => {
    const count = 200;
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
    });
  };


  const handleRealisticConfetti = () => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#EDE7E1",
          // border: "1px solid red",
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
            // padding: "15px 85.333px",
            lineHeight: "20px",
            // border: "1px solid blue",
            // width: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{
              fontFamily: "Poppins",
              // display: { md: "flex", lg: "flex", xl: "flex" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // alignItems: {
              //   xs: "center",
              //   sm: "center",
              //   md: "center",
              //   lg: "flex-start",
              //   xl: "flex-start",
              // },
            }}
          >
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
            &nbsp;copyright issues.
          </Typography>
          <Typography
            style={{
              fontFamily: "Poppins",
              display: { lg: "flex", xl: "flex" },
              alignItems: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "flex-start",
                xl: "flex-start",
              },
            }}
          >
            Feel free to reach out to me.
            <br />
            I'm here and ready to help, ping me!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Tooltip title="Connect with me on LinkedIn." followCursor>
            <Typography
              style={{
                fontFamily: "'Sacramento', cursive",
                textTransform: "none",
                fontWeight: 400,
                color: "#dc143c",
                fontSize: "3em",
              }}
            >
              Atul Jadhav
            </Typography>
          </Tooltip>
          <Typography
            sx={{
              display: { sm: "flex", md: "flex", lg: "flex", xl: "flex" },
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Poppins",
            }}
          >
            Designed and Built in&nbsp;
            <Tooltip title="India" arrow>
              <Box
                style={{
                  marginTop: "4px",
                }}
              >
                <IndiaFlag />
              </Box>
            </Tooltip>
            &nbsp;with Pride.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          style={{
            fontFamily: "Poppins",
          }}
        >
          <DisplayFlexCenter>
            <FindText onMouseOver={handleRealisticConfetti}>
              You can find me&nbsp;
            </FindText>
            <FindText
              onMouseOver={handleRealisticConfetti}
              className="text-red blink-soft"
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
              backgroundColor: "#EDE7E1",
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
