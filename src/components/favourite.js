import React from "react";

const Favourite = props => {
  return (
    <li className="comic-item" key={props.comic.key}>
      Comic name {props.comic.title}
      <button
        className="remove js-remove"
        onClick={() => props.onclick(props.comic)}
      >
        Remove from favourites
      </button>
    </li>
  );
};

export default Favourite;
