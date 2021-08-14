//CSS
import "./Header.scss";

// ASSETS
import logo from "../../assets/star-wars-logo.jpeg";

// DEPENDANCIES
import { Link } from "react-router-dom";

// COMPONENTS

const Header = (props) => {
  const { handleOpenMenu } = props;

  return (
    <div className="header">
      <header>
        <img src={logo} alt="star-wars" />
        <button onClick={handleOpenMenu}>Open</button>
      </header>
    </div>
  );
};

export default Header;
