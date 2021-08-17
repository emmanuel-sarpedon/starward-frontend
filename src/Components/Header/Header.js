//CSS
import "./Header.scss";

// ASSETS
import logo from "../../assets/star-wars-header.svg";

// DEPENDANCIES

// COMPONENTS

const Header = (props) => {
  const { menuIsHidden, handleOpenMenu } = props;

  return (
    <div className="header">
      <header>
        {/* FontAwesome icon */}
        <i
          onClick={handleOpenMenu}
          class="fas fa-bars fa-1x toggle-menu"
          style={{ display: `${!menuIsHidden ? "none" : "block"}` }} // si le menu est visible, on cache l'icône
        ></i>

        {/* Logo starwars */}
        <img src={logo} alt="star-wars" />
      </header>
    </div>
  );
};

export default Header;
