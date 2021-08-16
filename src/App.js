//CSS
import "./App.scss";

// ASSETS

// DEPENDANCIES
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

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
        <Menu hidden={menuIsHidden} handleCloseMenu={handleCloseMenu} />

        <div className="container">
          <Header menuIsHidden={menuIsHidden} handleOpenMenu={handleOpenMenu} />

          <Switch>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/character/:id">
              <Character />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
