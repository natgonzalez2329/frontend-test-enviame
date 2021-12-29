import React from "react";
import CharacterCard from "./CharacterCard";
import "../style/charactersView.css";

const CharactersView = ({ characters, setCharacters }) => {
  return (
    <div className="charactersView my-5">
      <CharacterCard 
      characters={characters}
      setCharacters={setCharacters} />
    </div>
  );
};

export default CharactersView;
