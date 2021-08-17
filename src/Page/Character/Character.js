//CSS
import "./Character.scss";

// ASSETS
import logo from "../../assets/star-wars-logo2.jpeg";

// DEPENDANCIES
import { useParams, Link } from "react-router-dom";
import axios from "axios";

// COMPONENTS

//HOOKS
import { useState, useEffect } from "react";

const Character = () => {
  const { id } = useParams();

  // Déclaration des states
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Déclaration des champs à afficher
  const fields = [
    { name: "Nom du personnage", value: character.name },
    { name: "Taille", value: character.height },
    { name: "Poids", value: character.mass },
    { name: "Couleur des cheveux", value: character.hair_color },
    { name: "Couleur de la peau", value: character.skin_color },
    { name: "Couleur des yeux", value: character.eye_color },
    { name: "Année de naissance", value: character.birth_year },
    { name: "Genre", value: character.gender },
    { name: "Espèce", value: character.species },
    { name: "Film", value: character.films },
    { name: "Véhicule", value: character.vehicles },
    { name: "Vaisseau spatial", value: character.starships },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const url = "https://starwars-app-manu.herokuapp.com/";

      const response = await axios.get(url + "character/" + id);

      console.log(response.data);

      setCharacter(response.data);

      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div className="character">
      {isLoading ? (
        "Chargement en cours ..."
      ) : (
        <>
          <h1>Détails du personnage</h1>

          <img
            src={character.picture_url ? character.picture_url : logo}
            alt={character.name}
          />

          <div className="details">
            {fields.map(
              (e) =>
                e.value && ( // exclut les champs vides
                  <div>
                    <span>{e.name} :</span>
                    <span>{e.value}</span>
                  </div>
                )
            )}
          </div>
          <Link to="/">
            <button>Revenir à l'accueil</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Character;
