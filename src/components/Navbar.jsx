import React from "react";
import { styled } from "@mui/system";
import { NavLink as LinkR } from "react-router-dom";
import { Link } from "react-router-dom";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import { LaptopChromebookSharp } from "@mui/icons-material";
const Nav = styled("div")(({ theme }) => ({
  backgroundColor: theme.card_light,
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1rem",
  position: "sticky",
  top: 0,
  zIndex: 10,
  "@media screen and (max-width: 960px)": {
    transition: "0.8s all ease",
  },
}));

const NavContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  height: "60px",
  zIndex: 1,
  width: "100%",
  padding: "0 24px",
  maxWidth: "1200px",
});

const NavLogo = styled(LinkR)({
  width: "80%",
  padding: "0 6px",
  display: "flex",
  justifySelf: "flex-start",
  cursor: "pointer",
  textDecoration: "none",
  alignItems: "center",
  "@media screen and (max-width: 640px)": {
    padding: "0 0px",
  },
});

const MobileIcon = styled("div")(({ theme }) => ({
  display: "none",
  "@media screen and (max-width: 768px)": {
    display: "block",
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(-100%, 50%)",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: theme.text_primary,
  },
}));

const NavItems = styled("ul")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",
  listStyle: "none",
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
}));

const NavLink = styled("a")(({ theme }) => ({
  color: theme.text_primary,
  fontWeight: "500",
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    color: theme.primary,
  },
}));

const ButtonContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  width: "80%",
  height: "100%",
  padding: "0 6px",
  "@media screen and (max-width: 640px)": {
    display: "none",
  },
});
const GithubButton = styled("button")(({ theme }) => ({
  border: `1.8px solid ${theme.primary}`,
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 20px",
  fontSize: "1rem",
  fontWeight: 500,
  cursor: "pointer",
  height: "70%",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.primary,
    color: theme.white,
  },

  "@media screen and (max-width: 640px)": {
    fontSize: "0.8rem",
  },
}));

const Span = styled("span")(({ theme }) => ({
  marginLeft: "8px",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    color: theme.primary,
  },
}));
const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "white",
            }}
          >
            <LaptopChromebookRoundedIcon />
            <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon></MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton>Github</GithubButton>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
