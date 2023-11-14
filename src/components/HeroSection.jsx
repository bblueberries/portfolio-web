import { styled } from "@mui/system";
import React from "react";
import { Bio } from "../constants/data";
const HeroContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.card_light,
  display: "flex",
  justifyContent: "center",
  position: "relative",
  padding: "80px 30px",

  "@media screen and (max-width: 960px)": {
    padding: "66px 16px",
  },

  "@media screen and (max-width: 480px)": {
    padding: "32px 16px  ",
  },

  zIndex: 1,
  clipPath: "polygon(0 0,100% 0,100% 100%,70% 95%, 0 100%)",
}));

const HeroBg = styled("div")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "end",
  top: "50%",
  right: 0,
  bottom: 0,
  left: "50%",
  overflow: "hidden",
  width: "100%",
  height: "100%",
  padding: "0 30px",
  transform: "translateX(-50%) translateY(-50%)",

  "@media (max-width: 960px)": {
    justifyContent: "center",
    padding: "0 0px",
  },
}));

const HeroInnerContainer = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "1100px",
});

const HeroLeftContainer = styled("div")({
  width: "100%",
  // order: 1,

  "@media (max-width: 960px)": {
    // order: 2,
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  "@media (max-width: 640px)": {
    // order: 2,
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Title = styled("div")(({ theme }) => ({
  fontWeight: "700",
  fontSize: "50px",
  color: theme.text_primary,
  lineHeight: "68px",

  "@media (max-width: 960px)": {
    textAlign: "center",
  },

  "@media (max-width: 640px)": {
    fontSize: "40px",
    lineHeight: "48px",
    marginBottom: "8px",
  },
}));

const TextHighlight = styled("div")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "32px",
  display: "flex",
  gap: "12px",
  color: theme.text_primary,
  lineHeight: "68px",

  "@media (max-width: 960px)": {
    textAlign: "center",
  },

  "@media (max-width: 640px)": {
    fontSize: "22px",
    lineHeight: "48px",
    marginBottom: "16px",
  },
}));

const Span = styled("span")(({ theme }) => ({
  color: theme.primary,
  cursor: "pointer",
}));

const SubTitle = styled("div")(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "32px",
  marginBottom: "42px",
  color: theme.text_primary + 95,

  "@media (max-width: 960px)": {
    textAlign: "center",
  },

  "@media (max-width: 640px)": {
    fontSize: "16px",
    lineHeight: "32px",
  },
}));

const ResumeButton = styled("button")(({ theme }) => ({
  border: `1.8px solid ${theme.primary}`,
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 16px",
  fontSize: "20px",
  fontWeight: 600,
  cursor: "pointer",
  height: "70%",
  width: "90%",
  maxWidth: "200px",

  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.primary,
    color: theme.white,
  },

  "@media screen and (max-width: 640px)": {
    fontSize: "1rem",
    maxWidth: "150px",
  },
}));
const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg></HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextHighlight>
              I am a <Span>FullStack Developer</Span>
            </TextHighlight>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_blank  ">
              Resume
            </ResumeButton>
          </HeroLeftContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
