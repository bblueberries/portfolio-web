import React from "react";
import { styled } from "@mui/system";
import { NavLink as LinkR } from "react-router-dom";
import { Link } from "react-router-dom";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Nav = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.card_light,
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
    color: theme.palette.text.primary,
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
  color: theme.palette.common.white,
  fontWeight: "500",
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    color: theme.palette.primary.main,
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
  border: `1.8px solid ${theme.palette.primary.main}`,
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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },

  "@media screen and (max-width: 640px)": {
    fontSize: "0.8rem",
  },
}));

const Span = styled("span")(({ theme }) => ({
  marginLeft: "8px",
  transition: "all 0.2s ease-in-out",
  fontWeight: 600,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const MobileMenu = styled("div")(({ theme, open }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "16px",
  position: "absolute",
  top: 80,
  right: 0,
  width: "100%",

  padding: "12px 40px 24px 40px",
  background: theme.palette.card,
  transition: "all 0.3s ease-in-out",
  transform: open ? "translateX(0)" : "translateX(100%)",
  borderRadius: "0 0 15px 15px",
  boxShadow: "0 5px 10px rgba(0,0,0,0.4)",
  opacity: open ? "1" : "0",
  zIndex: open ? "1" : "-1 ",
}));

const MobileMenuLink = styled(LinkR)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        <MobileIcon>
          <MenuIcon onClick={() => setOpen(!open)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href="https://www.google.com/">Github</GithubButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLink to="#about" onClick={() => setOpen(!open)}>
            About
          </MobileMenuLink>
          <MobileMenuLink to="#skills" onClick={() => setOpen(!open)}>
            Skills
          </MobileMenuLink>

          <MobileMenuLink to="#projects" onClick={() => setOpen(!open)}>
            Projects
          </MobileMenuLink>
          <MobileMenuLink to="#education" onClick={() => setOpen(!open)}>
            Education
          </MobileMenuLink>
          <GithubButton
            style={{
              padding: "10px 16px",
              background: "#4E75DC",
              color: "white",
              width: "max-content",
            }}
            href="https://www.google.com/"
            target="_blank"
          >
            Github
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
