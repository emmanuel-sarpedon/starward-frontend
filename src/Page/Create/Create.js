//CSS
import "./Create.scss";

// ASSETS

// DEPENDANCIES
import axios from "axios";

// COMPONENTS

// HOOKS
import { useState } from "react";

const Create = () => {
  const url = "http://localhost:5000/character/create";

  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [films, setFilms] = useState("");
  const [vehicles, setVehicles] = useState("");
  const [starships, setStarships] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newCharacter = {
        name: name,
        height: height,
        mass: mass,
        hair_color: hairColor,
        skin_color: skinColor,
        eye_color: eyeColor,
        gender: gender,
        species: species,
        films: films,
        vehicles: vehicles,
        starships: starships,
        picture_url: pictureUrl,
      };

      const response = await axios.post(url, newCharacter);

      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="create">
      <h1>Créer un nouveau personnage</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </label>
        <label>
          Taille
          <input
            type="number"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            required
          />
        </label>
        <label>
          Poids
          <input
            type="number"
            value={mass}
            onChange={(e) => {
              setMass(e.target.value);
            }}
            required
          />
        </label>
        <label>
          Couleur des cheveux
          <input
            type="text"
            value={hairColor}
            onChange={(e) => {
              setHairColor(e.target.value);
            }}
            required
          />
        </label>
        <label>
          Couleur de la peau
          <input
            type="text"
            value={skinColor}
            onChange={(e) => {
              setSkinColor(e.target.value);
            }}
            required
          />
        </label>
        <label>
          Couleur des yeux
          <input
            type="text"
            value={eyeColor}
            onChange={(e) => {
              setEyeColor(e.target.value);
            }}
            required
          />
        </label>
        <label>
          Année de naissance
          <input
            type="text"
            value={birthYear}
            onChange={(e) => {
              setBirthYear(e.target.value);
            }}
            required
          />
        </label>
        <label>
          Genre
          <input
            type="text"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            required
          />
        </label>
        <label>
          Espèces
          <input
            type="text"
            value={species}
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
          />
        </label>
        <label>
          Films
          <input
            type="text"
            value={films}
            onChange={(e) => {
              setFilms(e.target.value);
            }}
          />
        </label>
        <label>
          Véhicules
          <input
            type="text"
            value={vehicles}
            onChange={(e) => {
              setVehicles(e.target.value);
            }}
          />
        </label>
        <label>
          Planètes
          <input
            type="text"
            value={starships}
            onChange={(e) => {
              setStarships(e.target.value);
            }}
          />
        </label>
        <label>
          Url image
          <input
            type="text"
            value={pictureUrl}
            onChange={(e) => {
              setPictureUrl(e.target.value);
            }}
          />
        </label>
        <button>Créer personnage</button>
      </form>
    </div>
  );
};

export default Create;
