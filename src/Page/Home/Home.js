//CSS
import "./Home.scss";

// ASSETS

// DEPENDANCIES
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

// COMPONENTS
import Card from "../../Components/Card/Card";

// HOOKS
import { useState, useEffect } from "react";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:5000/";
      const response = await axios.get(url + "characters");

      setCharacters(response.data.data);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      {isLoading
        ? "Chargement en cours..."
        : characters.map((e, i) => <Card key={i} title={e.name} />)}
    </div>
  );
};

export default Home;
