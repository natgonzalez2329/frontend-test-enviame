import React from "react";
import '../style/header.css';

const Header = ({
  searchName,
  setSearchName,
  data,
}) => {
  // const charactersFilter = (characterName) => {
  //   const nameResult = charactersData.filter((nameData) => {
  //     if (
  //       nameData.name
  //         .toString()
  //         .toLowerCase()
  //         .includes(characterName.toLowerCase())
  //     ) {
  //       return nameData;
  //     }
  //   });
  //   setCharacters(nameResult);
  // };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log(data)
    data();
    // charactersFilter(searchName);
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <div className="container-fluid">
          <span className="navbar-brand">
          <img
          className="header__logo"
          src="data:image/png;base64,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"
          alt="logo"
          role="button"
        />
          </span>
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
                <a
                  className="nav-link"
                  aria-current="page"
                  role="button"
                  href="https://www.marvel.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" role="button"
                href="https://www.marvel.com/articles"
                target="_blank"
                rel="noreferrer">
                  News
                </a>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle active"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Characters
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" role="button"
                    href="https://www.marvel.com/teams-and-groups"
                    target="_blank"
                    rel="noreferrer">
                      Teams & Groups
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" role="button"
                    href="https://developer.marvel.com/"
                    target="_blank"
                    rel="noreferrer">
                      API
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" onSubmit={(e) => handleSubmitSearch(e)}>
              <div className="input-group">
              <input
                className="form-control bg-dark bg-gradient text-white"
                type="search"
                value={searchName}
                placeholder="Search Name"
                aria-label="Search"
                onChange={(e) => setSearchName(e.target.value)}
              />
              <button className="header__search-button d-flex justify-content-center align-items-center" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
              </button>

              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
