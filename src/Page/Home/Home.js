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
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:5000/";
      const response = await axios.get(
        url + "characters/?" + "name=" + nameFilter
      );

      setCharacters(response.data.data);

      setIsLoading(false);
    };

    fetchData();
  }, [nameFilter]);

  return (
    <div className="home">
      <div className="filter">
        <label>
          Filtrer par nom :
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => {
              setNameFilter(e.target.value);
            }}
          ></input>
        </label>
      </div>
      <div className="characters-cards">
        {isLoading
          ? "Chargement en cours..."
          : characters.map((e, i) => (
              <Link to={`/character/${e._id}`}>
                <Card key={i} image={e.picture_url} title={e.name} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Home;
