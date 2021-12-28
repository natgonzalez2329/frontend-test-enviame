import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CharactersView from "./components/CharactersView";
import axios from "axios";

function App() {
  const [charactersData, setCharactersData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");

  const getDataMarvel = async () => {
    await axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=2d7b00edc7e3c64281345052bd0ecc5e&hash=c37dae0f8f6ab78f961203e7ae7f4417"
      )
      .then((res) => {
        setCharactersData(res.data.data.results);
        setCharacters(res.data.data.results);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDataMarvel();
  }, []);

  return (
    <div className="App container-fluid bg-primary bg-gradient vh-100 overflow-auto">
      <Header
        searchName={searchName}
        setSearchName={setSearchName}
        charactersData={charactersData}
        setCharacters={setCharacters}
      />
      <CharactersView characters={characters} />
    </div>
  );
}

export default App;
