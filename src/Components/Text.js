import TextsStyle from "./Text.module.css";

export function HeaderOne(props) {
  return <h1 className={TextsStyle.HeaderOne}>{props.children}</h1>;
}

export function Headertwo(props) {
  return <h2 className={TextsStyle.Headertwo}>{props.children}</h2>;
}

export function HeaderThree(props) {
  return <h3 className={TextsStyle.HeaderThree}>{props.children}</h3>;
}

export function Body(props) {
  return <p className={TextsStyle.body}>{props.children}</p>;
}

export function SubText(props) {
  return <p className={TextsStyle.SubText}>{props.children}</p>;
}

export function LinkText(props) {
  return (
    <div className={TextsStyle.LinkText}>
      <span>{props.children}</span>
      <div className={TextsStyle.arrow}></div>
    </div>
  );
}
