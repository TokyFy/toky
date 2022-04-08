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
          description="This is a chap app that doesn't require to sing in , anyone can join
          and its realTime , build with html/css and the firebase API"
        ></ProjectBanner>
      </div>
      <div className={Style.project2}>
        <ProjectBanner
          image={theme === "LIGTH" ? imageProject2 : imageProject2Dark}
          title="Todo App"
          description="A litle project from frontEndMentor.io , a created this simple todo app ,
          buit with react and redux as state managment"
        ></ProjectBanner>
      </div>
      <div className={Style.project3}>
        <ProjectBanner
          image={theme === "LIGTH" ? imageProject3 : imageProject3Dark}
          title="My Portofolio"
          description="Still in Beta , it's my website portofolio , it will containg all the
          details about all my project and will be used for my personal blog.
          Buitl with react and scss"
          large={isMobile ? false : true}
        ></ProjectBanner>
      </div>
    </div>
  );
}

export default ProjectList;
