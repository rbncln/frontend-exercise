import React from "react";

const Header = props => {
  return (
    <header className="site-header">
      <h1 className="site-heading">test</h1>
      <button
        className="favourites-toggle js-favourites-toggle"
        onClick={() => props.toggleFavourites()}
      />
    </header>
  );
};

export default Header;
