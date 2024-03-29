import { Box, Button, Typography, styled } from "@mui/material";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";

export const DisplayFlex = styled(Box)(() => ({
  display: "flex",
}));

export const DisplayFlexCenter = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const DisplayFlexCenterLink = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const DisplayFlexCenterCol = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const DisplayFlexSpaceBetween = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
}));

export const DisplayFlexEnd = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));

export const PoppinsSixteenText = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
}));

export const PoppinsSixteenTextLink = styled(Link)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
}));

export const PoppinsSixteenBoxText = styled(Box)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
}));

export const PoppinsSmallText = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
}));

export const PoppinsForteenText = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
}));

export const PoppinsForteenChipText = styled(Chip)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
}));

export const PoppinsTenPixelText = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "0.76vw",
}));

export const PoppinsThirtySixText = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "36px",
}));

export const PoppinsThirtySixTextLink = styled(Link)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "36px",
  color: "initial", // Set initial color
  transition: "color 0.3s ease", // Add transition for smooth color change
  "&:hover": {
    color: "#3087EC", // Change color on hover
    textDecoration: "underline",
  },
}));

export const PoppinsEighteenText = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "18px",
}));

export const PoppinsElevenText = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "11px",
}));

export const PoppinsTwelveText = styled(Typography)(() => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
}));

export const BoxContainer = styled(Box)(() => ({
  backgroundColor: "#3F70AA",
  color: "#fff",
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
  height: 42px;
  width: 8rem;
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
  font-size: 14px,
  font-weight: 500;
  fontStyle: normal,
  cursor:pointer;
  :hover {
    color: #3087ec;
  }
`;

export const PlayIconButton = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: absolute;
  top: 0;
  opacity: 0;
  transition: all 0.3s ease;
  :hover {
    opacity: 1;
  }
`;
