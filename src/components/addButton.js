import React from "react";

const AddButton = props => {
  return (
    <button
      className="button js-add"
      onClick={() => props.addFavourite(props.comic)}
    >
      Add to favourites
    </button>
  );
};

export default AddButton;
