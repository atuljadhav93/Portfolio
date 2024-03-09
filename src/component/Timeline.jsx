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
              ✅ Building a product from scratch and developing strategies to
              scale it seamlessly.
              <br />
              ✅ I'm working on HTML, CSS, JavaScript, React, Redux, TypeScript, MUI, Bootstrap,
              Postman and Jest.
              <br />
              ✅ Implemented designs provided by UI/UX designers.
              <br />
              ✅ Worked with APIs and databases to retrieve and display dynamic
              content.
              <br />
              ✅ Identifying and resolving bugs, compatibility issues, and
              performance bottlenecks efficiently, ensuring smooth operations.
              <br />
              ✅ Collaborated with fellow developers to write scalable code and
              reusable code.
              <br />
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
              I completed my postgraduate studies at Fergusson College, Pune,
              where I earned a master's degree in Computer Applications.
              Throughout my academic journey, I maintained a solid 82% score,
              demonstrating my dedication to excelling in my chosen field of
              study.
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
              I completed my Bachelor's degree in Computer Science from Dada
              Patil Mahavidyalaya. Throughout my studies, I consistently
              performed well, maintaining an admirable 68.16% score. This
              highlights my strong dedication to mastering and excelling in the
              field of computer science.
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
              I completed my Higher Secondary School Certificate (HSSC) from
              Dada Patil Mahavidyalaya, achieving a commendable score of 65%.
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
              I completed my Secondary School Certificate (SSC) program at
              Netaji Subhash Vidyalaya with a remarkable score of 80%.
            </Typography>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </BoxContainer>
    </>
  );
}
