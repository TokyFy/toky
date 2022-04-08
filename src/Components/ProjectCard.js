import ProjectCardStyle from "./ProjectCard.module.css";
import { HeaderThree, Body, SubText, LinkText } from "../Text/Text";

function ProjectCard(props) {
  let reverseStyle = {
    flexDirection: "row-reverse",
  };

  return (
    <div
      className={ProjectCardStyle.card}
      style={props.reverse ? reverseStyle : null}
    >
      <div className={ProjectCardStyle.visual}>
        <img src={props.image} alt="Project" />
      </div>
      <div className={ProjectCardStyle.description}>
        <div>
          <HeaderThree>{props.name}</HeaderThree>
          <Body>{props.description}</Body>
          <SubText>{props.tech}</SubText>
          <LinkText>{props.link}</LinkText>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
