import { Typography } from "@mui/material";
import data from "../data/index.json";
import { BoxContainer, PageHeadingText } from "./styles";

export default function MySkills() {
  return (
    <>
      <BoxContainer id="mySkills">
        <PageHeadingText>My Skills</PageHeadingText>
        {/* <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={item.id} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div> */}
      </BoxContainer>
    </>
  );
}
