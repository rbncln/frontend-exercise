import React from "react";
import Favourite from "./favourite";

const FavouritesList = props => {
  return (
    <div
      id="favourites-panel"
      className={
        props.showFavourites ? "favourites-panel.open" : "favourites-panel"
      }
    >
      <div className="favourites-header">
        <h2> Favourites </h2>
        <button
          className="close js-close"
          onClick={() => props.toggleFavourites()}
        >
          {" "}
        </button>{" "}
      </div>
      <div className="favourites-content">
        <ul className="favourites-list">
          {props.favourites.map(comic => (
            <Favourite comic={comic} onclick={props.removeFavourite} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavouritesList;
