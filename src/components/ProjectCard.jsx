import { styled } from "@mui/system";

const Button = styled("button")(({ theme }) => ({
  display: "none",
  width: "100%",
  padding: "10px",
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text_black,
  fontSize: "14px",
  fontWeight: 700,
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "all 0.8s ease-in-out",
}));

const Card = styled("div")(({ theme }) => ({
  width: "330px",
  height: "490px",
  backgroundColor: theme.palette.card,
  cursor: "pointer",
  borderRadius: "10px",
  boxShadow: "0 0 12px 4px rgba(0, 0, 0, 0.4)",
  overflow: "hidden",
  padding: "26px 20px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  transition: "all 0.5s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 0 50px 4px rgba(0, 0, 0, 0.6)",
    filter: "brightness(1.1)",
  },
  "&:hover $Button": {
    display: "block",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "180px",
  backgroundColor: theme.palette.common.white,
  borderRadius: "10px",
  boxShadow: "0 0 16px 2px rgba(0, 0, 0, 0.3)",
}));

const Tags = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "4px",
});

const Tag = styled("span")(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 400,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.main + 15,
  padding: "2px 8px",
  borderRadius: "10px",
}));

const Details = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0px",
  padding: "0px 2px",
});

const Title = styled("div")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  color: theme.palette.text.secondary,
  overflow: "hidden",
  display: "-webkit-box",
  maxWidth: "100%",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
}));

const Date = styled("div")(({ theme }) => ({
  fontSize: "12px",
  marginLeft: "2px",
  fontWeight: 400,
  color: theme.palette.text.secondary + 80,
  "@media only screen and (max-width: 768px)": {
    fontSize: "10px",
  },
}));

const Description = styled("div")(({ theme }) => ({
  fontWeight: 400,
  color: theme.palette.text.secondary + 99,
  overflow: "hidden",
  marginTop: "8px",
  display: "-webkit-box",
  maxWidth: "100%",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
}));

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>

      {/* <Button>View Project</Button> */}
    </Card>
  );
};

export default ProjectCards;
