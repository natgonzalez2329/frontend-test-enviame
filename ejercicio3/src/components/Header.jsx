import React from "react";

const Header = ({
  searchName,
  setSearchName,
  charactersData,
  setCharacters,
}) => {
  const charactersFilter = (characterName) => {
    const nameResult = charactersData.filter((nameData) => {
      if (
        nameData.name
          .toString()
          .toLowerCase()
          .includes(characterName.toLowerCase())
      ) {
        return nameData;
      }
    });
    setCharacters(nameResult);
  };

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
    charactersFilter(e.target.value);
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">MARVEL</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span
                  className="nav-link active"
                  aria-current="page"
                  role="button"
                >
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" role="button">
                  Link
                </span>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <span className="dropdown-item" role="button">
                      Action
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" role="button">
                      Another action
                    </span>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <span className="dropdown-item" role="button">
                      Something else here
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                value={searchName}
                placeholder="Search Name"
                aria-label="Search"
                onChange={(e) => handleChangeSearch(e)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
