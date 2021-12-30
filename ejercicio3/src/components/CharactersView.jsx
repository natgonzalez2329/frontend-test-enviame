import React from "react";
import CharacterCard from "./CharacterCard";

const CharactersView = ({ characters, setCharacters }) => {
  return (
    <div className="charactersView my-5 h-100">
      <CharacterCard characters={characters} setCharacters={setCharacters} />
    </div>
  );
};

export default CharactersView;
