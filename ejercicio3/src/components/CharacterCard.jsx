import React from "react";
import ModalEdit from "./ModalEdit";

const CharacterCard = ({ characters }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {characters &&
        characters.map((character) => (
          <div className="col" key={character.id}>
            <div className="card" style={{ width: "18rem", height: "36rem" }}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <ModalEdit
                  nameEdit={character.name}
                  descriptionEdit={character.description}
                />
                <h5 class="card-title">{character.name}</h5>
                <small class="text-muted">
                  {character.modified.split("T")[0].split("-").join("/")}
                </small>
                <p className="card-text">{character.description}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CharacterCard;
