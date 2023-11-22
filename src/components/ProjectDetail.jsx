import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/base/Modal";
import React from "react";
import { styled } from "@mui/system";

const Container = styled("div")({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "#000000a7",
  display: "flex",
  alignItems: "top",
  justifyContent: "center",
  overflowY: "scroll",
  transition: "all 0.5s ease",
});

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: "800px",
  width: "100%",
  borderRadius: "16px",
  margin: "50px 12px",
  height: "min-content",
  backgroundColor: theme.card,
  color: theme.text_primary,
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

const Title = styled("div")(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 600,
  color: theme.text_primary,
  margin: "8px 6px 0px 6px",
  "@media only screen and (max-width: 600px)": {
    fontSize: "24px",
    margin: "6px 6px 0px 6px",
  },
}));

const Date = styled("div")(({ theme }) => ({
  fontSize: "16px",
  margin: "2px 6px",
  fontWeight: 400,
  color: theme.text_secondary,
  "@media only screen and (max-width: 768px)": {
    fontSize: "12px",
  },
}));

const Desc = styled("div")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: theme.text_primary,
  margin: "8px 6px",
  "@media only screen and (max-width: 600px)": {
    fontSize: "14px",
    margin: "6px 6px",
  },
}));

const Image = styled("img")({
  width: "100%",
  objectFit: "cover",
  borderRadius: "12px",
  marginTop: "30px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
});

const Label = styled("div")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  color: theme.text_primary,
  margin: "8px 6px",
  "@media only screen and (max-width: 600px)": {
    fontSize: "16px",
    margin: "8px 6px",
  },
}));

const Tags = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  margin: "8px 0px",
  "@media only screen and (max-width: 600px)": {
    margin: "4px 0px",
  },
});

const Tag = styled("div")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.primary,
  margin: "4px",
  padding: "4px 8px",
  borderRadius: "8px",
  backgroundColor: theme.primary + 20,
  "@media only screen and (max-width: 600px)": {
    fontSize: "12px",
  },
}));

const ButtonGroup = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  margin: "12px 0px",
  gap: "12px",
});

const Button = styled("a")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 600,
  color: theme.text_primary,
  padding: "12px 16px",
  borderRadius: "8px",
  backgroundColor: theme.primary,
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.5s ease",
  "&:hover": {
    backgroundColor: theme.primary + 99,
  },
  "@media only screen and (max-width: 600px)": {
    fontSize: "12px",
  },
}));

const ProjectDetail = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
      style={{ zIndex: 1 }}
    >
      {
        <Container>
          <Wrapper>
            <CloseRounded
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                cursor: "pointer",
              }}
              onClick={() => setOpenModal({ state: false, project: null })}
            />
            <Image src={project?.image} />
            <Title>{project?.title}</Title>
            <Date>{project.date}</Date>
            <Tags>
              {project?.tags.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </Tags>
            <Desc>{project?.description}</Desc>

            <ButtonGroup>
              <Button href={project?.github} target="new">
                View Code
              </Button>
              <Button href={project?.webapp} target="new">
                View Live App
              </Button>
            </ButtonGroup>
          </Wrapper>
        </Container>
      }
    </Modal>
  );
};

export default ProjectDetail;
