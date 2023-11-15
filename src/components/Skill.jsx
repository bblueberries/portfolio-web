import React from "react";
import { styled } from "@mui/system";
import { tech as techs } from "../constants/data";
export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  zIndex: 1,
  alignItems: "center",
});

export const Wrapper = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1100px",
  gap: "12px",
  "@media (max-width: 960px)": {
    flexDirection: "column",
  },
});

export const Title = styled("div")(({ theme }) => ({
  fontSize: "42px",
  textAlign: "center",
  fontWeight: 600,
  marginTop: "30px",
  color: theme.text_primary,
  "@media (max-width: 768px)": {
    marginTop: "12px",
    fontSize: "32px",
  },
}));

export const Desc = styled("div")(({ theme }) => ({
  fontSize: "18px",
  textAlign: "center",
  maxWidth: "600px",
  color: theme.text_secondary,
  "@media (max-width: 768px)": {
    fontSize: "16px",
  },
}));

export const SkillsContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  marginTop: "30px",
  marginBottom: "30px",
  gap: "30px",
  justifyContent: "center",
});

export const Skill = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
  background: theme.card,
  border: `0.1px solid ${theme.border}`,
  boxShadow: `rgba(23, 92, 230, 0.15) 0px 4px 24px`,
  borderRadius: "16px",
  padding: "18px 36px",
  "@media (max-width: 768px)": {
    maxWidth: "400px",
    padding: "10px 36px",
  },
  "@media (max-width: 500px)": {
    maxWidth: "330px",
    padding: "10px 36px",
  },
}));

export const SkillTitle = styled("h2")(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 600,
  color: theme.text_secondary,
  marginBottom: "20px",
  textAlign: "center",
}));

export const SkillList = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "12px",
  marginBottom: "20px",
});

export const SkillItem = styled("div")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: `${theme.text_primary}80`,
  border: `1px solid ${theme.text_primary}80`,
  borderRadius: "12px",
  padding: "12px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  "@media (max-width: 768px)": {
    fontSize: "14px",
    padding: "8px 12px",
  },
  "@media (max-width: 500px)": {
    fontSize: "14px",
    padding: "6px 12px",
  },
}));

export const SkillImage = styled("img")({
  width: "24px",
  height: "24px",
});

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of technologies on which I have been learning on for the
          past year.
        </Desc>
        <SkillsContainer>
          {techs.map((tech) => (
            <Skill>
              <SkillTitle>{tech.title}</SkillTitle>
              <SkillList>
                {tech.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
