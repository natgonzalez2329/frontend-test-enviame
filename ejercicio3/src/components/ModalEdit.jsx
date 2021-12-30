import React from "react";

const ModalEdit = ({
  character,
  setNameModified,
  nameModified,
  setDescriptionModified,
  descriptionModified,
  setId,
}) => {
  const setHeroToEdit = (values) => {
    setNameModified(values.name);
    setDescriptionModified(values.description);
    setId(values.id);
    console.log(values.id, values.name, values.description);
  };

  /* const editValues = (e, id) => {
    e.preventDefault();
    console.log(e.target.name, e.target.description, id);
  }

  const editCharacter = () => {
    if(!nameModified.trim()) {
      console.log('elemento vacío')
      return
    }

    const arrayEditado = characters.map((item) => {
      if(item.id === id) {
       item.name = nameModified;
      } else {
        return item
      }
    } )
    setCharacters(arrayEditado); 
  } */

  return (
    <div>
      <button
        type="button"
        className="btn btn-dark d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setHeroToEdit(character)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen-sm-down modal-dialog-centered">
          <div className="modal-content bg-dark bg-gradient">
            <div className="modal-body d-flex flex-column">
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form /* onSubmit={(e) => editValues(e, id)} */>
                <div className="mb-3 text-start">
                  <label for="recipient-name" className="col-form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border border-secondary"
                    id="recipient-name"
                    name="name"
                    value={nameModified}
                    onChange={(e) => setNameModified(e.target.value)}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label for="recipient-name" className="col-form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control bg-dark text-white border border-secondary"
                    id="recipient-name"
                    value={descriptionModified}
                    onChange={(e) => setDescriptionModified(e.target.value)}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary mx-1"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalToggle2"
                    /* onClick={() => editCharacter()} */
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-fullscreen-sm-down modal-dialog-centered">
          <div className="modal-content bg-dark bg-gradient">
            <div className="modal-body">
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <h5>Has been saved successfully!</h5>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
