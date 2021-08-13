//CSS
import "./App.scss";

// ASSETS

// DEPENDANCIES
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// COMPONENTS
import Header from "./Components/Header/Header";

// HOOKS

function App() {
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
