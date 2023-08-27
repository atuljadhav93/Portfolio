import { Box, Button, Typography, styled } from "@mui/material";

export const BoxContainer = styled(Box)(() => ({
  backgroundColor: "#EDE7E1",
}));

export const ValidationText = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
  color: "red",
}));

export const PageHeadingText = styled(Typography)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "26px",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "36px",
}));

export const ButtonStyle = styled(Button)(
  () =>
    `
 // background-color:#5569FF;
 background-color:#3087EC;
 // margin-top:1%;
 // margin-bottom:2%;
 transition:all 0.3s ease;
 text-transform: none;
 &:hover{
   background-color:#3087EC;
   opacity:0.8;
 }
 `
);
