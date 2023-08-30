import { Box, Card, CardContent, Typography } from "@mui/material";
import { BoxContainer, PageHeadingText } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// import LeftArrow from "./icon/LeftArrow";
// import RightArrow from "./icon/RightArrow";

export default function MySkills() {
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
    // {
    //   id: "8",
    //   src: "./img/product-chain-1.png",
    //   language: "Redux",
    //   status: "Expert",
    // },
    // {
    //   id: "9",
    //   src: "./img/product-chain-1.png",
    //   language: "MUI",
    //   status: "Expert",
    // },
    // {
    //   id: "10",
    //   src: "./img/product-chain-1.png",
    //   language: "Git",
    //   status: "Expert",
    // },
  ];

  const CustomNextArrow = (props) => {
    return (
      <div className="custom-arrow custom-next-arrow" onClick={props.onClick} />
    );
  };

  const CustomPrevArrow = (props) => {
    return (
      <div
        className="custom-arrow1 custom-prev-arrow"
        onClick={props.onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 2560,
      //   settings: {
      //     slidesToShow: 12,
      //   },
      // },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          // centerMode: true,
          // centerPadding: "54px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "54px",
        },
      },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <BoxContainer id="mySkills" style={{}}>
        <PageHeadingText>My Skills</PageHeadingText>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index}>
              <Card
                style={{
                  // border: "1px solid blue",
                  borderRadius: "10px",
                  height: "auto",
                  width: "13rem",
                  marginBottom: "2rem",
                  cursor: "pointer",
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
        </Slider>
      </BoxContainer>
    </>
  );
}
