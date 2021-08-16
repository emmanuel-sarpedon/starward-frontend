//CSS
import "./Character.scss";

// ASSETS
import logo from "../../assets/star-wars-logo2.jpeg";

// DEPENDANCIES
import { useParams } from "react-router-dom";
import axios from "axios";

// COMPONENTS

//HOOKS
import { useState, useEffect } from "react";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = "http://localhost:5000/";
      const response = await axios.get(url + "character/" + id);
      console.log(response.data);

      setCharacter(response.data);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="character">
      {isLoading ? (
        "Chargement en cours ..."
      ) : (
        <>
          <h1>Détails du personnage</h1>

          <img src={character.picture_url ? character.picture_url : logo} />
          <div className="details">
            <div>
              <span>Nom :</span>
              <span>{character.name}</span>
            </div>
            <div>
              <span>Taille :</span>
              <span>{character.height}</span>
            </div>
            <div>
              <span>Poids :</span>
              <span>{character.mass}</span>
            </div>
            <div>
              <span>Couleur des cheveux :</span>
              <span>{character.hair_color}</span>
            </div>
            <div>
              <span>Couleur de la peau :</span>
              <span>{character.skin_color}</span>
            </div>
            <div>
              <span>Couleur des yeux :</span>
              <span>{character.eye_color}</span>
            </div>
            <div>
              <span>Année de naissance :</span>
              <span>{character.birth_year}</span>
            </div>
            <div>
              <span>Genre :</span>
              <span>{character.gender}</span>
            </div>
            <div>
              <span>Espèce :</span>
              <span>{character.species}</span>
            </div>
            <div>
              <span>Film :</span>
              <span>{character.films}</span>
            </div>
            <div>
              <span>Véhicule :</span>
              <span>{character.vehicles}</span>
            </div>
            <div>
              <span>Planète :</span>
              <span>{character.starships}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Character;
