import React from "react";

const SiteHeader = (props) => {
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <>
      <header>
        <h1 className="app-header__title">{props.siteTitle}</h1>
        <aside className="app-header__controls">
          <button className="add-new" onClick={props.addNote}>
            + New Note
          </button>
          <input
            type="text"
            placeholder="Type here to search..."
            className="search"
            value={props.searchText}
            onChange={callSearch}
          />
        </aside>
      </header>
    </>
  );
};

export default SiteHeader;
