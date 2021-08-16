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
  const [numberOfResults, setNumberOfResults] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(5);

  const url = "https://starwars-app-manu.herokuapp.com/?";
  const location = useLocation(); // représente l'url
  const params = qs.parse(location.search.substring(1)); // transforme "?page=1" en objet {page:1}
  const page = Math.min(parseInt(params.page), numberOfPages) || 1;
  const limit = parseInt(params.limit) || 5;

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = qs.stringify({
        page: page,
        limit: limit,
        name: nameFilter,
      });

      const response = await axios.get(url + queryParams);

      setCharacters(response.data.data);

      setNumberOfResults(response.data.count);

      setNumberOfPages(Math.ceil(response.data.count / limit));

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
              <span>Résultats : {(page - 1) * limit + 1}</span>
              <span> à </span>
              <span>{Math.min(page * limit, numberOfResults)}</span>
            </>
          )}
        </div>
        <div className="page-links">{paginationLinks}</div>
      </div>

      <div className="characters-cards">
        {isLoading
          ? "Chargement en cours..."
          : characters
          ? characters.map((e, i) => (
              <Link className="character-card" to={`/character/${e._id}`}>
                <Card key={i} image={e.picture_url} title={e.name} />
              </Link>
            ))
          : "No results . . . *"}
      </div>
    </div>
  );
};

export default Home;
