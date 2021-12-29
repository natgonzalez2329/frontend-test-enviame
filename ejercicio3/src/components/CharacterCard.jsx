import React, { useState } from "react";
import ModalEdit from "./ModalEdit";
import "../style/characterCard.css";

const CharacterCard = ({ characters, setCharacters }) => {

  const [nameModified, setNameModified] = useState('');
  const [descriptionModified,  setDescriptionModified] = useState('');
  const [id,  setId] = useState('');

  return (
    <div className="characterCard">
      {characters.length === 0 ? (
        <h1 className="text-dark ">No results found</h1>
      ) : (
        characters.map((character) => (
            <div className="card bg-dark text-white" key={character.id}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                className="card-img-top"
                alt="marvel character"
              />
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                <small class="text-muted">
                  {character.modified.split("T")[0].split("-").join("/")}
                </small>
                <ModalEdit 
                characters={characters}
                setCharacters={setCharacters}
                character={character} 
                setNameModified={setNameModified} 
                nameModified={nameModified} 
                setDescriptionModified={setDescriptionModified}
                descriptionModified={descriptionModified}
                setId={setId}
                id={id} />
              </div>
                <h5 class="card-title text-center">{character.name}</h5>
                <small className="card-text">{character.description ? character.description : "No description available" }</small>
              </div>
            </div>
        )))}
    </div>
  );
};

export default CharacterCard;
