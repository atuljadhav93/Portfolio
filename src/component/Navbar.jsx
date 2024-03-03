import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Home,
  AboutMe,
  Journey,
  MyWork,
  Skills,
  ContactMe,
  Testimonial,
} from "../constants/Text";
import { PortfolioLogo } from "../assets/icons/Icons";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <>
      <Link className={`navbar ${navActive ? "active" : ""}`}>
        <Box className="icon-position">
          <Link to="heroSection">
            <PortfolioLogo />
          </Link>
        </Box>
        <Link
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <Box className="nav__hamburger__line"></Box>
          <Box className="nav__hamburger__line"></Box>
          <Box className="nav__hamburger__line"></Box>
        </Link>
        <Box className={`navbar--items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                {Home}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="aboutMe"
                className="navbar--content"
              >
                {AboutMe}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="mySkills"
                className="navbar--content"
              >
                {Skills}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
                className="navbar--content"
              >
                {MyWork}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="timeline"
                className="navbar--content"
              >
                {Journey}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="navbar--content"
              >
                {Testimonial}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="navbar--content"
              >
                {ContactMe}
              </Link>
            </li>
          </ul>
        </Box>
      </Link>
    </>
  );
}

export default Navbar;
