//CSS
import "./Create.scss";

// ASSETS

// DEPENDANCIES
import axios from "axios";
import { Link } from "react-router-dom";

// COMPONENTS

// HOOKS
import { useState } from "react";

const Create = () => {
  const url = "https://starwars-app-manu.herokuapp.com/character/create";

  // Déclaration des states
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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

  // Déclaration des gestionnaires d'évènements
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleMass = (e) => {
    setMass(e.target.value);
  };

  const handleHairColor = (e) => {
    setHairColor(e.target.value);
  };

  const handleSkinColor = (e) => {
    setSkinColor(e.target.value);
  };

  const handleEyeColor = (e) => {
    setEyeColor(e.target.value);
  };

  const handleBirthYear = (e) => {
    setBirthYear(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleSpecies = (e) => {
    setSpecies(e.target.value);
  };

  const handleFilms = (e) => {
    setFilms(e.target.value);
  };

  const handleVehicles = (e) => {
    setVehicles(e.target.value);
  };

  const handleStarships = (e) => {
    setStarships(e.target.value);
  };

  const handlePictureUrl = (e) => {
    setPictureUrl(e.target.value);
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const newCharacter = {
        name: name,
        height: height,
        mass: mass,
        hair_color: hairColor,
        skin_color: skinColor,
        eye_color: eyeColor,
        birth_year: birthYear,
        gender: gender,
        species: species,
        films: films,
        vehicles: vehicles,
        starships: starships,
        picture_url: pictureUrl,
      };

      const response = await axios.post(url, newCharacter);

      if (response.status === 201) {
        setIsLoading(false);
        setIsSaved(true);

        // RAZ du formulaire
        setName("");
        setHeight("");
        setMass("");
        setHairColor("");
        setSkinColor("");
        setEyeColor("");
        setBirthYear("");
        setGender("");
        setSpecies("");
        setFilms("");
        setVehicles("");
        setStarships("");
        setPictureUrl("");
      }
    } catch (error) {
      alert(error);
      setIsLoading(false);
      setIsSaved(false);
    }
  };

  // Réinitialisation formulaire
  const handleNewCharacter = () => {
    setIsLoading(false);
    setIsSaved(false);
  };

  // Déclaration des champs du formulaire
  const inputs = [
    {
      name: "Nom du personnage",
      type: "text",
      required: true,
      value: name,
      onChange: handleName,
    },
    {
      name: "Taille",
      type: "number",
      required: true,
      value: height,
      onChange: handleHeight,
    },
    {
      name: "Poids",
      type: "number",
      required: true,
      value: mass,
      onChange: handleMass,
    },
    {
      name: "Couleur des cheveux",
      type: "text",
      required: true,
      value: hairColor,
      onChange: handleHairColor,
    },
    {
      name: "Couleur de la peau",
      type: "text",
      required: true,
      value: skinColor,
      onChange: handleSkinColor,
    },
    {
      name: "Couleur des yeux",
      type: "text",
      required: true,
      value: eyeColor,
      onChange: handleEyeColor,
    },
    {
      name: "Année de naissance",
      type: "text",
      required: false,
      value: birthYear,
      onChange: handleBirthYear,
    },
    {
      name: "Genre",
      type: "text",
      required: true,
      value: gender,
      onChange: handleGender,
    },
    {
      name: "Espèce",
      type: "text",
      required: false,
      value: species,
      onChange: handleSpecies,
    },
    {
      name: "Films",
      type: "text",
      required: false,
      value: films,
      onChange: handleFilms,
    },
    {
      name: "Véhicule",
      type: "text",
      required: false,
      value: vehicles,
      onChange: handleVehicles,
    },
    {
      name: "Vaisseau spatial",
      type: "text",
      required: false,
      value: starships,
      onChange: handleStarships,
    },
    {
      name: "Url image",
      type: "text",
      required: false,
      value: pictureUrl,
      onChange: handlePictureUrl,
    },
  ];

  return (
    <div className="create">
      <h1>Créer un nouveau personnage</h1>

      {!isLoading && !isSaved ? (
        /* Etat initial du formulaire : isLoading === isSaved === false */
        <form onSubmit={handleSubmit}>
          {inputs.map((e) => (
            <label>
              {e.name}
              {e.required && "  *"}
              <input
                type={e.type}
                required={e.required}
                onChange={e.onChange}
                value={e.value}
              />
            </label>
          ))}

          <button>Créer personnage</button>

          <Link to="/">
            <button>Revenir à l'accueil</button>
          </Link>
        </form>
      ) : isLoading && !isSaved ? (
        /* Champs complets - Tentative d'enregistrement : isLoading === true, isSaved === false */
        "Enregistrement en cours"
      ) : (
        /* Enregistrement terminé: isSaved === true */
        <>
          <div>Création réussie !</div>
          <button onClick={handleNewCharacter}>
            Créer un nouveau personnage
          </button>
          <Link to="/">
            <button>Revenir à l'accueil</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Create;
