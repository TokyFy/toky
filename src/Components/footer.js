import { footerStyle as Style } from "../css";

import { useContext } from "react";
import { ThemeContext } from "../Context";

import {
  logo,
  facebookIco,
  instagramIco,
  linkeding,
  footerHero,
  footerHeroDark,
} from "../image";

function Footer() {
  let theme = useContext(ThemeContext);

  return (
    <div
      className={`${Style.footer} ${
        theme === "DARK" ? Style.footerDark : null
      }`}
    >
      <div className={`row ${Style.inner}`}>
        <div className={Style.navbar}>
          <div className={Style.logo}>
            <img src={logo} alt="toky logo" />
          </div>
          <ul className={Style.navLink}>
            <li>Project</li>
            <li>Credits</li>
            <li>About</li>
          </ul>
        </div>
        <div className={Style.main}>
          <div className={Style.text}>
            <h3
              className={`${Style.thanks} ${
                theme === "DARK" ? Style.thanksDark : null
              }`}
            >
              Thanks for your visit. Have a Great Days !
            </h3>
            <h2>Let Do some cool stuff together.</h2>
          </div>
          <div className={Style.hero}>
            <img
              src={theme === "DARK" ? footerHeroDark : footerHero}
              alt="balloon ilustration"
            />
          </div>
        </div>
        <div className={Style.social}>
          <div className={Style.socialLink}>
            <li>
              <img src={facebookIco} alt="facebook" />
            </li>
            <li>
              <img src={instagramIco} alt="facebook" />
            </li>
            <li>
              <img src={linkeding} alt="facebook" />
            </li>
          </div>
          <div className={Style.copyrigth}>©Toky 2022</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
