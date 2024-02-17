import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CodeIcon } from "../assets/icons/Icons";
import SchoolIcon from "@mui/icons-material/School";
import { Link, Typography } from "@mui/material";
import {
  BoxContainer,
  PageHeadingText,
  PoppinsEighteenText,
  PoppinsSixteenTextLink,
} from "./styles";
import { MyJourney } from "../constants/Text";
import {
  companyLinkedinUrl,
  companyWebsiteUrl,
  dpCollege,
  fergussonCollege,
} from "../constants/const";

export default function Timeline() {
  return (
    <>
      <BoxContainer id="timeline">
        <PageHeadingText>{MyJourney}</PageHeadingText>
        <VerticalTimeline lineColor="#3087EC">
          <VerticalTimelineElement
            className="vertical-timeline-element--work vertical-timeline-element-date"
            contentStyle={{
              background: "#fff",
              color: "#003c2f",
              opacity: 1,
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2021 - Present"
            iconStyle={{ background: "rgb(33, 150, 243", color: "#fff" }}
            icon={<CodeIcon />}
            position="right"
          >
            <Link
              href={companyWebsiteUrl}
              target="_blank"
              variant="h6"
              style={{ marginBottom: "14px", textDecoration: "none" }}
            >
              LogicHive Solution Pvt Ltd
            </Link>
            <Typography className="text-color PoppinsForteenText">
            ✅Responsible for creating user-friendly interfaces, implementing designs, and ensuring pixel-perfect execution.<br/>
            ✅I'm working on HTML, CSS, JavaScript, React, Redux, TypeScript, Postman and Jest.<br/>
            ✅Skilled in optimizing website performance.<br/>
            ✅Experienced in building products from scratch and developing scalable strategies.<br/>
            ✅Collaborate with APIs and databases to retrieve and display dynamic content.<br/>
            ✅Work with team members to promote knowledge sharing and maintainable code.<br/>
            </Typography>
            <PoppinsSixteenTextLink
              href={companyLinkedinUrl}
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              Linkedin Page
            </PoppinsSixteenTextLink>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#003c2f",
              margin: "2px !important",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2018 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
            position="left"
          >
            <PoppinsEighteenText variant="h6" style={{ marginBottom: "8px" }}>
              Postgraduate
            </PoppinsEighteenText>
            <Typography className="text-color PoppinsForteenText">
              I accomplished my postgraduate studies at Fergusson College, Pune,
              earning a master's degree in Computer Science. My academic
              expedition was characterized by a consistent and admirable 80%
              performance, showcasing my unwavering commitment to attaining
              proficiency and distinction in my selected realm of study.
            </Typography>
            <PoppinsSixteenTextLink
              href={fergussonCollege}
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              College Website
            </PoppinsSixteenTextLink>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2017"
            contentStyle={{ background: "#fff", color: "#003c2f" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
            position="right"
          >
            <PoppinsEighteenText variant="h6" style={{ marginBottom: "8px" }}>
              Graduation{" "}
            </PoppinsEighteenText>
            <Typography className="text-color PoppinsForteenText">
              I graduated from Dada Patil Mahavidyalaya with a Bachelor's degree
              in Computer Science. My academic voyage was marked by a consistent
              and commendable 80% performance, underscoring my unwavering
              commitment to mastering and excelling in the realm of my chosen
              field of study.
            </Typography>
            <PoppinsSixteenTextLink
              href={dpCollege}
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              College Website
            </PoppinsSixteenTextLink>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014"
            contentStyle={{ background: "#fff", color: "#003c2f" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
            position="left"
          >
            <PoppinsEighteenText variant="h6" style={{ marginBottom: "8px" }}>
              HSC
            </PoppinsEighteenText>
            <Typography className="text-color PoppinsForteenText">
              I successfully attained my Higher Secondary School Certificate
              (HSSC) from Dada Patil Mahavidyalaya, securing an impressive score
              of 65% in the process.
            </Typography>
            <PoppinsSixteenTextLink
              href={dpCollege}
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              College Website
            </PoppinsSixteenTextLink>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2012"
            contentStyle={{ background: "#fff", color: "#003c2f" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
            position="right"
          >
            <PoppinsEighteenText variant="h6" style={{ marginBottom: "8px" }}>
              SSC
            </PoppinsEighteenText>
            <Typography className="text-color PoppinsForteenText">
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
