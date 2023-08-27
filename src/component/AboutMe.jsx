import { Typography } from "@mui/material";
import { AboutMeDescriptionFirst, AboutMeDescriptionSecond, AboutMeText } from "./constants/Text";

export default function AboutMe() {
  return (
    <section id="aboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about.svg" alt="atul" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <Typography
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "36px",
            }}
          >
            {AboutMeText}
          </Typography>
          <Typography className="hero--section-description">
            {AboutMeDescriptionFirst}
          </Typography>
          <Typography className="hero--section-description">
            {AboutMeDescriptionSecond}
          </Typography>
        </div>
      </div>
    </section>
  );
}
