import React from "react";
import ComicCard from "./comicCard";

const ComicList = props => {
  return (
    <ul id="comics-list" className="comics-list">
      {props.comicData.map(comic => (
        <ComicCard
          comic={comic}
          addFavourite={comic => props.addFavourite(comic)}
          removeFavourite={comic => props.removeFavourite(comic)}
        />
      ))}
    </ul>
  );
};

export default ComicList;
