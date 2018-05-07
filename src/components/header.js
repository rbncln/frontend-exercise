import React from "react";

const Header = props => {
  return (
    <header className="site-header">
      <h1 class="site-heading">Red Ant Comics</h1>
      <button
        className="favourites-toggle js-favourites-toggle"
        onClick={() => props.toggleFavourites()}
      />
    </header>
  );
};

export default Header;
