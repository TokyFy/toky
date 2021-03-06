import { useContext } from "react";
import { ThemeContext } from "../Context";
import { useMedia } from "../hooks";

import { ProjectListStyle as Style } from "../css";
import { ProjectBanner } from "../Components";

import { imageProject1 } from "../image";
import { imageProject2 } from "../image";
import { imageProject3 } from "../image";
import { imageProject1Dark } from "../image";
import { imageProject2Dark } from "../image";
import { imageProject3Dark } from "../image";

function ProjectList() {
  let theme = useContext(ThemeContext);

  let isMobile = useMedia("(max-width: 955px)");

  return (
    <div className={Style.ProjectList}>
      <div className={Style.project1}>
        <ProjectBanner
          image={theme === "LIGTH" ? imageProject1 : imageProject1Dark}
          title="Chat app"
          description="This is a chap app that does not require singing,
          anyone can join and its real time, build with HTML/CSS and
          the firebase API."
        ></ProjectBanner>
      </div>
      <div className={Style.project2}>
        <ProjectBanner
          image={theme === "LIGTH" ? imageProject2 : imageProject2Dark}
          title="Todo App"
          description="A little project from frontendmentor.io, I created
          this simple to-do app, built with react and a redux as
          state management"
        ></ProjectBanner>
      </div>
      <div className={Style.project3}>
        <ProjectBanner
          image={theme === "LIGTH" ? imageProject3 : imageProject3Dark}
          title="My Portofolio"
          description="Still in Beta, it's my website portfolio,
          it will contain all the details about all my projects and will be used
          for my personal blog. Built with React."
          large={isMobile ? false : true}
        ></ProjectBanner>
      </div>
    </div>
  );
}

export default ProjectList;
