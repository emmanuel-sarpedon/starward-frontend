//CSS
import "./Menu.scss";

// ASSETS

// DEPENDANCIES
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// COMPONENTS / PAGES

// HOOKS

const Menu = (props) => {
  const { hidden, handleCloseMenu } = props;

  return (
    <div className={`menu ${hidden && "hidden"}`}>
      <button onClick={handleCloseMenu}>Close</button>

      <Link to="/create">
        <button>Créer</button>
      </Link>
      <Link to="/update">Modifier</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Menu;
