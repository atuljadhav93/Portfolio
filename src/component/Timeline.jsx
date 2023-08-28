import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {CodeIcon} from "./icon/Icons";
import SchoolIcon from "@mui/icons-material/School";
import { Typography } from "@mui/material";
import { BoxContainer, PageHeadingText } from "./styles";

export default function Timeline() {
  return (
    <>
      <BoxContainer id="timeline">
        <PageHeadingText>My Journey</PageHeadingText>
        <VerticalTimeline lineColor="#3087EC">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#7EBCDC", color: "#000000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<CodeIcon />}
            position="right"
          >
            <Typography>
              I accomplished my postgraduate studies at Fergusson College, Pune,
              earning a Bachelor's degree in Computer Science. My academic
              expedition was characterized by a consistent and admirable 80%
              performance, showcasing my unwavering commitment to attaining
              proficiency and distinction in my selected realm of study.
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#7EBCDC", color: "#000000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<CodeIcon />}
            position="left"
          >
            <Typography>
              I accomplished my postgraduate studies at Fergusson College, Pune,
              earning a Bachelor's degree in Computer Science. My academic
              expedition was characterized by a consistent and admirable 80%
              performance, showcasing my unwavering commitment to attaining
              proficiency and distinction in my selected realm of study.
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#7EBCDC",
              color: "#000000",
              margin: "2px !important",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
            position="right"
          >
            <Typography
              style={{
                margin: "2px",
              }}
            >
              Postgraduate
            </Typography>
            <Typography>
              I accomplished my postgraduate studies at Fergusson College, Pune,
              earning a Bachelor's degree in Computer Science. My academic
              expedition was characterized by a consistent and admirable 80%
              performance, showcasing my unwavering commitment to attaining
              proficiency and distinction in my selected realm of study.
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2017"
            contentStyle={{ background: "#7EBCDC", color: "#000000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
            position="left"
          >
            <Typography>Graduation </Typography>
            <Typography>
              I graduated from Dada Patil Mahavidyalaya with a Bachelor's degree
              in Computer Science. My academic voyage was marked by a consistent
              and commendable 80% performance, underscoring my unwavering
              commitment to mastering and excelling in the realm of my chosen
              field of study.
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014"
            contentStyle={{ background: "#7EBCDC", color: "#000000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
            position="right"
          >
            <Typography>HSC</Typography>
            <Typography>
              I successfully attained my Higher Secondary School Certificate
              (HSSC) from Dada Patil Mahavidyalaya, securing an impressive score
              of 65% in the process.
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2012"
            contentStyle={{ background: "#7EBCDC", color: "#000000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
            position="left"
          >
            <Typography>SSC</Typography>
            <Typography>
              I successfully concluded my Secondary School Certificate (SSC)
              program at Netaji Subhash Vidyalaya, accomplishing a remarkable
              score of 79.45% during this pivotal juncture of my academic
              journey.
            </Typography>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </BoxContainer>
    </>
  );
}
