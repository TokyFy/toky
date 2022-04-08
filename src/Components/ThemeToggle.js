import { useState } from "react";

import { ThemeToggle as Style } from "../css";

import { Sun } from "../image";
import { Moon } from "../image";

function ThemeToggle(props) {
  const [theme, setTheme] = useState("LIGTH");

  const switchTheme = () => {
    if (theme === "LIGTH") setTheme("DARK");
    if (theme === "DARK") setTheme("LIGTH");
    props.clickHander();
  };

  return (
    <div className={Style.toggle} onClick={() => switchTheme()}>
      <img src={theme === "LIGTH" ? Sun : Moon} alt="Sun" />
    </div>
  );
}

export default ThemeToggle;
