//CSS
import "./Menu.scss";

// ASSETS

// DEPENDANCIES
import { Link } from "react-router-dom";

// COMPONENTS / PAGES

// HOOKS

const Menu = (props) => {
  const { hidden, handleCloseMenu } = props;

  return (
    <div className={`menu ${hidden ? "hidden" : ""}`}>
      {/* FontAwesome icon */}
      <i
        class="fas fa-times fa-1x toggle-menu"
        onClick={handleCloseMenu}
        style={{ display: `${hidden ? "none" : "block"}` }}
      ></i>

      {/* Liens*/}
      <Link to="/" onClick={handleCloseMenu}>
        Accueil
      </Link>
      <Link to="/create" onClick={handleCloseMenu}>
        Créer un personnage
      </Link>
    </div>
  );
};

export default Menu;
