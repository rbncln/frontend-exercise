import React from "react";
import AddButton from "./addButton";
import RemoveButton from "./removeButton";

function ButtonController(props) {
  const isFavourite = props.comic.isFavourite;
  if (isFavourite) {
    return (
      <RemoveButton
        removeFavourite={props.removeFavourite}
        comic={props.comic}
      />
    );
  }
  return <AddButton addFavourite={props.addFavourite} comic={props.comic} />;
}

const ComicCard = props => {
  return (
    <li className="comic-item" key={props.comic.key}>
      <div className="comic-card">
        <h2>{props.comic.title}</h2>
        <img src={props.comic.image} alt="Not available" />
        <ButtonController
          comic={props.comic}
          addFavourite={props.addFavourite}
          removeFavourite={props.removeFavourite}
        />
      </div>
    </li>
  );
};

export default ComicCard;
