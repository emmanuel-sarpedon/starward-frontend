//CSS
import "./Card.scss";

// ASSETS
import logo from "../../assets/star-wars-logo.jpeg";
// DEPENDANCIES

// COMPONENTS

// HOOKS

const Card = (props) => {
  const { title } = props;

  return (
    <div className="card">
      <img src={logo} alt="" />
      <div className="name-character">{title}</div>
    </div>
  );
};

export default Card;
