import React from "react";
import { useState } from "react";
import { styled } from "@mui/system";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/data";
const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const Container = styled("div")({
    background:
      "linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
    alignItems: "center",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%)",
  });

  const Wrapper = styled("div")({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1350px",
    padding: "10px 0px 100px 0",
    gap: "12px",
    "@media (max-width: 960px)": {
      flexDirection: "column",
    },
  });

  const Title = styled("div")(({ theme }) => ({
    fontSize: "42px",
    textAlign: "center",
    fontWeight: 600,
    marginTop: "20px",
    color: theme.palette.text.primary,
    "@media (max-width: 768px)": {
      marginTop: "12px",
      fontSize: "32px",
    },
  }));

  const Desc = styled("div")(({ theme }) => ({
    fontSize: "18px",
    textAlign: "center",
    maxWidth: "600px",
    color: theme.palette.text.secondary,
    "@media (max-width: 768px)": {
      marginTop: "12px",
      fontSize: "16px",
    },
  }));

  const ToggleButtonGroup = styled("div")(({ theme }) => ({
    display: "flex",
    border: "1.5px solid",
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    fontSize: "16px",
    borderRadius: "12px",
    fontWeight: 500,
    margin: "22px 0px",
    "@media (max-width: 768px)": {
      fontSize: "12px",
    },
  }));

  const ToggleButton = styled("div")(({ theme }) => ({
    padding: "8px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: ({ active }) =>
      active ? theme.palette.primary.main + 20 : "transparent",
    "&:hover": {
      background: theme.palette.primary.main + 8,
    },
    "@media (max-width: 768px)": {
      padding: "6px 8px",
      borderRadius: "4px",
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "1.5px",
    background: theme.palette.primary.main,
  }));

  const CardContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "28px",
    flexWrap: "wrap",
  });

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc sx={{ marginBottom: "1.5rem", padding: "1rem" }}>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>

        <CardContainer>
          {projects.map((project) => (
            <ProjectCard
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
