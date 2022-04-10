import HeaderStyle from "./header.module.css";
import { HeaderOne, Headertwo } from "../Text/Text";

function Header() {
  return (
    <div className={HeaderStyle.Header}>
      <HeaderOne>
        Hello, I’m <br /> Fy Niaina
        <span className={HeaderStyle.name}> Toky</span>
      </HeaderOne>
      <div className={HeaderStyle.presentation}>
        <Headertwo>
          A Junior-Computer science student who trying to specialize in Web
          developpement & UI/UX. I'm glad that you take your time to check my
          portofolio.
        </Headertwo>
      </div>
    </div>
  );
}

export default Header;
