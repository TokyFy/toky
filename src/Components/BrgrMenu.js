import { BurgerMenuStyle as Style } from "../css";

function BrgrMenu() {
  return (
    <label className={Style.HumberMenu}>
      <input type="checkbox" id="check" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

export default BrgrMenu;
