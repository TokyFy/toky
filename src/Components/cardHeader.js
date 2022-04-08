import { useContext } from "react";
import { ThemeContext } from "../Context";

import { cardHeaderStyle as Style } from "../css";
import { heroLigth } from "../image";
import { heroDark } from "../image";

function CardHeader() {
  let theme = useContext(ThemeContext);

  return (
    <div
      className={`${Style.CardHeader} ${
        theme === "DARK" ? Style.CardHeaderDark : null
      }`}
    >
      <div
        className={`${Style.text}  ${theme === "DARK" ? Style.textDark : null}`}
      >
        <h1>Hello , I'm Toky</h1>
        <p>
          — A Junior-Computer science student who trying to specialize in Web
          developpement & UI/UX. I'm glad that you take your time to check my
          portofolio.
        </p>
      </div>
      <div className={Style.image}>
        <img src={theme === "DARK" ? heroDark : heroLigth} alt="hero" />
      </div>
    </div>
  );
}

export default CardHeader;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className={Style.CardHeader}>
      <div className={Style.hero}>
        <img src={heroImage} alt="Hero" />
      </div>
      <div className={Style.text}>
        <h1 className={Style.headingOne}>
          Hello , I'm Toky &mdash; A Junior-Computer science student who trying
          to specialize in Web developpement & UI/UX. &mdash; <br /> I'm glad
          that you take your time to check my portofolio.
        </h1>
      </div>
    </div> */
}
