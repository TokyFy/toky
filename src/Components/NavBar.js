import { useContext } from "react";
import { ThemeContext } from "../Context";

import { NavBarStyle as Style } from "../css";

import { logo } from "../image";

import { ThemeToggler } from "../Components";
import { BrgrMenu } from "../Components";

function NavBar(props) {
  const theme = useContext(ThemeContext);
  console.log(theme);

  const DarkStyle = {
    color: "#fff",
  };
  return (
    <div className={Style.NavBar}>
      <div className={`row ${Style.inner}`}>
        <div className={Style.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul
          className={Style.navLink}
          style={theme === "DARK" ? DarkStyle : null}
        >
          <li>Projects</li>
          <li>About</li>
          <li>Credits</li>
        </ul>

        <div className={Style.ThemeToggle}>
          <ThemeToggler clickHander={props.clickHander}></ThemeToggler>
        </div>

        <div className={Style.HumberMenu}>
          <BrgrMenu></BrgrMenu>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
