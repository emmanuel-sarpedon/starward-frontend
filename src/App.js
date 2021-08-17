//CSS
import "./App.scss";

// ASSETS

// DEPENDANCIES
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS / PAGES
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Home from "./Page/Home/Home";
import Create from "./Page/Create/Create";
import Character from "./Page/Character/Character";

// HOOKS
import { useState } from "react";

function App() {
  const [menuIsHidden, setMenuIsHidden] = useState(true);

  const handleOpenMenu = () => {
    setMenuIsHidden(false);
  };

  const handleCloseMenu = () => {
    setMenuIsHidden(true);
  };

  return (
    <div className="app">
      <Router>
        {/* Modal menu */}
        <Menu hidden={menuIsHidden} handleCloseMenu={handleCloseMenu} />

        {/* Header */}
        <Header menuIsHidden={menuIsHidden} handleOpenMenu={handleOpenMenu} />

        {/* Main content */}
        <div className="container">
          <Switch>
            {/* Création d'un personnage */}
            <Route path="/create">
              <Create />
            </Route>

            {/* Détails d'un personnage */}
            <Route path="/character/:id">
              <Character />
            </Route>

            {/* Accueil, vue d'ensemble des personnages */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
