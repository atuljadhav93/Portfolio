import { Box, Card, CardContent, Typography } from "@mui/material";
// import data from "../data/index.json";
import { BoxContainer, PageHeadingText } from "./styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Video() {
  const images = [
    {
      id: "1",
      src: "./img/product-chain-1.png",
      language: "React",
      status: "Expert",
    },
    {
      id: "2",
      src: "./img/product-chain-1.png",
      language: "HTML",
      status: "Expert",
    },
    {
      id: "3",
      src: "./img/product-chain-1.png",
      language: "CSS",
      status: "Expert",
    },
    {
      id: "4",
      src: "./img/product-chain-1.png",
      language: "Bootstrap",
      status: "Expert",
    },
    {
      id: "5",
      src: "./img/product-chain-1.png",
      language: "Next js",
      status: "Expert",
    },
    {
      id: "6",
      src: "./img/product-chain-1.png",
      language: "HTML5",
      status: "Expert",
    },
    {
      id: "7",
      src: "./img/product-chain-1.png",
      language: "Web 3.0",
      status: "Expert",
    },
    {
      id: "8",
      src: "./img/product-chain-1.png",
      language: "Redux",
      status: "Expert",
    },
    {
      id: "9",
      src: "./img/product-chain-1.png",
      language: "MUI",
      status: "Expert",
    },
    {
      id: "10",
      src: "./img/product-chain-1.png",
      language: "Git",
      status: "Expert",
    },
  ];
  return (
    <>
      <Box
        id="mySkills"
        sx={{
          background: "#fff",
          display: "flex",
          flexDirection: "column",
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
        <PageHeadingText>My Youtube Videos</PageHeadingText>
        <Carousel
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          emulateTouch={false}
          selectedItem={0}
          transitionTime={200}
          autoPlay={false}
          interval={2000}
          dynamicHeight={false}
          stopOnHover={true}
          useKeyboardArrows={true}
          showIndicators={false}
          style={{
            border: "1px solid red",
          }}
        >
          {images.map((image, index) => (
            <Box key={index}>
              <Card
                style={{
                  // border: "1px solid blue",
                  borderRadius: "10px",
                  height: "auto",
                  width: "13rem",
                  marginBottom: "2rem",
                }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    rowGap: 10,
                  }}
                >
                  <Box class="profile-picture">
                    <img src={image.src} alt="lang" />
                  </Box>
                  <Typography>{image.language}</Typography>
                  <Stack spacing={2} alignItems="center">
                    <Stack direction="row" spacing={2}>
                      <Chip label={image.status} />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
}
