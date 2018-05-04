import React from "react";

const AddButton = props => {
  return (
    <button
      className="button js-remove"
      onClick={() => props.removeFavourite(props.comic)}
    >
      Remove from favourites
    </button>
  );
};

export default AddButton;
