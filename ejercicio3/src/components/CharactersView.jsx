import React from "react";
import CharacterCard from "./CharacterCard";

const CharactersView = ({ characters }) => {
  return (
    <div>
      <CharacterCard characters={characters} />
    </div>
  );
};

export default CharactersView;
