import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CharactersView from "./components/CharactersView";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [charactersData, setCharactersData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  
  const apiKey = "2d7b00edc7e3c64281345052bd0ecc5e";
  const url = "https://gateway.marvel.com:443/v1/public/characters";
  const hash = "c37dae0f8f6ab78f961203e7ae7f4417";

  let currentLimit = 20;
  const getDataMarvel = async () => {
    await axios
      .get(
        searchName !== ""
          ? `${url}?name=${searchName}&limit=${currentLimit}&ts=1&apikey=${apiKey}&hash=${hash}`
          : `${url}?limit=${currentLimit}&ts=1&apikey=${apiKey}&hash=${hash}`
      )
      .then((res) => {
        setCharactersData(res.data.data.results);
        setCharacters(res.data.data.results);
      })
      .catch((error) => console.log(error));
  };
  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );

    if (currentLimit < 100) {
      setTimeout(() => {
        if (currentHeight + 1 >= scrollHeight) {
          currentLimit += 20;
          getDataMarvel();
        }
      }, 500);
    } else {
      console.log("busqueda finalizada");
    }
  };

  useEffect(() => {
    getDataMarvel();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App container-fluid bg-dark bg-gradient p-0 h-100">
      <Header
        searchName={searchName}
        setSearchName={setSearchName}
        charactersData={charactersData}
        setCharacters={setCharacters}
        data={getDataMarvel}
      />
      <CharactersView characters={characters} setCharacters={setCharacters} />
      <ScrollToTop smooth top="20" />
    </div>
  );
}

export default App;
