//CSS
import "./Card.scss";

// ASSETS
import logo from "../../assets/star-wars-logo2.jpeg";
// DEPENDANCIES

// COMPONENTS

// HOOKS

const Card = (props) => {
  const { image, title } = props;

  return (
    <div className="card">
      <img src={image ? image : logo} alt="" />
      <div className="name-character">{title}</div>
    </div>
  );
};

export default Card;
