import "./App.css";

import { NavBar } from "./Components";
import { CardHeader } from "./Components";
import { Footer } from "./Components";
import { Noise } from "./Components";
import { ProjectList } from "./Components";

import ThemeContext from "./Context/themeContext";
import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("LIGTH");

  const switchTheme = () => {
    if (theme === "DARK") {
      setTheme("LIGTH");
      document.body.style.backgroundColor = "#fff";
    } else {
      setTheme("DARK");
      document.body.style.backgroundColor = "#000";
    }
    console.log(`The theme is ${theme}`);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Noise/>
        <div className="sticky-">
          <NavBar clickHander={switchTheme}/>
        </div>
        <div className="row">
          <CardHeader/>
        </div>
        <div className="row">
          <h3
            className={`ProjectListIntro ${
              theme === "DARK" ? "ProjectListIntroDark" : null
            }`}
          >
            There are some project I have made :
          </h3>
          <ProjectList/>
        </div>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
