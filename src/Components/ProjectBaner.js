import { useContext } from "react";
import { ThemeContext } from "../Context";

import { ProjectBannerStyle as Style } from "../css";

function ProjectBanner(props) {
  let theme = useContext(ThemeContext);

  return (
    <div className={Style.ProjectBanner}>
      <div className={`${Style.imageProject} fix`}>
        <img src={props.image} alt="Sparkage project" />
      </div>
      <div
        className={`${Style.descriptionProject} ${
          props.large === true ? Style.largeDescription : null
        } ${theme === "DARK" ? Style.descriptionProjectDark : null}`}
      >
        <div className={Style.title}>{props.title}</div>
        <div className={Style.text}>{props.description}</div>
        <div
          className={`${Style.link} ${
            theme === "DARK" ? Style.linkDark : null
          }`}
        >
          View case
        </div>
      </div>
    </div>
  );
}

export default ProjectBanner;
