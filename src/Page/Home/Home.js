//CSS
import "./Home.scss";

// ASSETS

// DEPENDANCIES
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import qs from "qs";

// COMPONENTS
import Card from "../../Components/Card/Card";

// HOOKS
import { useState, useEffect } from "react";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState("");
  const [limit, setLimit] = useState(5);
  const [numberOfResults, setNumberOfResults] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const url = "https://starwars-app-manu.herokuapp.com/characters/?";
  const location = useLocation(); // représente l'url
  const params = qs.parse(location.search.substring(1)); // transforme "?page=1" en objet {page:1}
  const page = Math.min(parseInt(params.page), numberOfPages) || 1;

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = qs.stringify({
        page: page,
        limit: Math.max(limit, 1),
        name: nameFilter,
      });

      const response = await axios.get(url + queryParams);

      setCharacters(response.data.data);

      setNumberOfResults(response.data.count);

      setNumberOfPages(Math.ceil(response.data.count / Math.max(limit, 1)));

      setIsLoading(false);
    };

    fetchData();
  }, [nameFilter, page, limit]);

  // Pagination
  const paginationLinks = [];

  for (let i = 1; i <= numberOfPages; i++) {
    paginationLinks.push(
      <Link
        className={
          page === i || (!page && i === 1) ? "page-link active" : "page-link"
        }
        to={`?page=${i}`}
      >
        {i}
      </Link>
    );
  }

  return (
    <div className="home">
      <Link to="/create">
        <button>Créer un personnage</button>
      </Link>
      <div className="filter">
        <label>
          Filtrer par nom :
          <input
            type="search"
            value={nameFilter}
            onChange={(e) => {
              setNameFilter(e.target.value);
            }}
          ></input>
        </label>
      </div>

      <div className="pagination">
        <div>Nombre de résultats : {numberOfResults || 0}</div>
        <div>
          {numberOfResults && (
            <>
              <span>Résultats : {(page - 1) * Math.max(limit, 1) + 1}</span>
              <span> à </span>
              <span>
                {Math.min(page * Math.max(limit, 1), numberOfResults)}
              </span>
            </>
          )}
        </div>
        <label className="limit">
          Nombre de résultats par page :
          <input
            type="number"
            min={1}
            value={limit}
            onChange={(e) => setLimit(Math.max(e.target.value, 1))}
          ></input>
        </label>
        <div className="page-links">{paginationLinks}</div>
      </div>

      <div className="characters-cards">
        {isLoading
          ? "Chargement en cours..."
          : characters.length !== 0
          ? characters.map((e, i) => (
              <Link className="character-card" to={`/character/${e._id}`}>
                <Card key={i} image={e.picture_url} title={e.name} />
              </Link>
            ))
          : "No results . . . *"}
      </div>

      <Link to="/create">
        <button>Créer un personnage</button>
      </Link>

      <div className="pagination">
        <div className="page-links">{paginationLinks}</div>
      </div>
    </div>
  );
};

export default Home;
