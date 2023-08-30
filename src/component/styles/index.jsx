import { Box, Button, Typography, styled } from "@mui/material";

export const DisplayFlexCenter = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

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
export const WatchVideoBtn = styled(Button)`
  background-color: #3087ec;
  transition: all 0.3s ease;
  text-transform: none;
  height: 48px;
  width: 9rem;
  font-family: Poppins;
  font-size: 18px,
  font-weight: 500;
  border: none;
  border-radius:20px;
  :hover {
    background-color: #3087ec;
    opacity: 0.8;
  }
`;

export const FindText = styled(Typography)`
  // background-color: #3087ec;
  transition: all 0.3s ease;
  text-transform: none;
  font-family: Poppins;
  font-size: 18px,
  font-weight: 500;
  cursor:pointer;
  :hover {
    color: #3087ec;
  }
`;
