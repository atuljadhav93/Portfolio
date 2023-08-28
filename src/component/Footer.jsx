import React from "react";
import { Box, Grid, Typography, Link, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  IndiaFlag,
  NoCopyRight,
  Instagram,
  Linkedin,
  WhatsApp,
  GitHub,
  YouTube,
} from "./icon/Icons";
import confetti from "canvas-confetti";

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    position: "relative",
  },
}));

function Footer() {
  const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;
  const whatsappUrl = process.env.REACT_APP_WHATSAPP_URL;
  const github = process.env.REACT_APP_GITHUB_URL;
  const youtube = process.env.REACT_APP_YOUTUBE_URL;
  const instagram = process.env.REACT_APP_INSTAGRAM_URL;

  const handleConfetti = (event) => {
    const button = event.currentTarget;

    const canvas = document.createElement("canvas");
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    const canvasWidth = 400; // Adjust as needed
    const canvasHeight = 400; // Adjust as needed

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Position the canvas at the bottom-right corner of the screen
    canvas.style.position = "fixed";
    // canvas.style.display = "flex";
    // canvas.style.alignSelf = "flex-end";
    canvas.style.border = "1px solid red";
    canvas.style.right = 0;
    canvas.style.bottom = 0;

    // const confettiInstance = confetti.create(canvas);
    const confettiInstance = confetti.create(canvas, {
      angle: 180, // Angle in degrees (180 degrees points downwards)
      spread: 180, // Spread in degrees (180 degrees covers the entire width)
    });
    confettiInstance();

    // Append the canvas to the body when hovering
    document.body.appendChild(canvas);

    let canvasDisplayed = true; // Flag to track canvas display status

    setTimeout(() => {
      button.addEventListener("mouseleave", () => {
        if (canvasDisplayed) {
          document.body.removeChild(canvas);
          canvasDisplayed = false;
        }
      });
      if (canvasDisplayed) {
        document.body.removeChild(canvas); // Remove canvas after 5 seconds
        canvasDisplayed = false;
      }
    }, 800);
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
            // border: "1px solid blue",
            fontFamily: "Poppins",
          }}
        >
          <Typography
          // onMouseOver={handleConfetti}
          >
            You can find me everywhere.
          </Typography>
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
                  // href="#"
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
