//CSS
import "./Header.scss";

// ASSETS
import logo from "../../assets/star-wars-logo.jpeg";

// DEPENDANCIES

// COMPONENTS

const Header = () => {
  return (
    <div className="header">
      <header>
        <img src={logo} alt="star-wars" />
      </header>
    </div>
  );
};

export default Header;
