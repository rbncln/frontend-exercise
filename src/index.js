import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/header";
import ComicList from "./components/comicList";
import FavouritesList from "./components/favouritesList";
import ComicsService from "./services/comicsService";
import registerServiceWorker from "./registerServiceWorker";

const IMAGE_TYPE = "/portrait_uncanny.";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      favourites: [],
      comicData: [],
      showFavourites: false
    };
    this.addFavourite = this.addFavourite.bind(this);
    this.removeFavourite = this.removeFavourite.bind(this);
    this.toggleFavourites = this.toggleFavourites.bind(this);
  }

  _getData() {
    ComicsService.getComics().then(data => {
      console.log("Data:", data);
      this.setState({
        comicData: data.data.results.map(mapComic)
      });
    });
  }

  componentDidMount() {
    this._getData();
  }

  addFavourite(comic) {
    if (this.state.favourites.includes(comic)) {
      alert("Already added " + comic.title + " to favourites");
    } else {
      var updatedFavourites = this.state.favourites.concat(comic);
      comic.isFavourite = true;
      console.log(
        "Called addFavourite referening comic: " + JSON.stringify(comic)
      );
      this.setState(prevState => ({
        favourites: updatedFavourites
      }));
    }
  }

  removeFavourite(comic) {
    var index = this.state.favourites.indexOf(comic);
    if (index > -1) {
      comic.isFavourite = false;
      this.setState(prevState => this.state.favourites.splice(index, 1));
    }
  }

  toggleFavourites(toggle) {
    var switched = this.state.showFavourites ? false : true;
    this.setState({ showFavourites: switched });
  }

  render() {
    return (
      <div>
        <Header toggleFavourites={this.toggleFavourites} />

        <main className="site-content">
          <ComicList
            comicData={this.state.comicData}
            addFavourite={this.addFavourite}
            removeFavourite={this.removeFavourite}
          />
        </main>

        <FavouritesList
          favourites={this.state.favourites}
          removeFavourite={this.removeFavourite}
          toggleFavourites={this.toggleFavourites}
          showFavourites={this.state.showFavourites}
        />
      </div>
    );
  }
}

function mapComic(result) {
  var comicData = {};
  comicData.key = result.id;
  comicData.title = result.title;
  let imageData = result.images[0];
  // Could also use null here to show alt text on <img>, using thumbmail here as alt image source
  // Also using falsy of undefined as this appears to be the javascript way
  comicData.image = imageData
    ? imageData.path + IMAGE_TYPE + imageData.extension
    : result.thumbnail.path + "." + result.thumbnail.extension;
  comicData.isFavourite = false;
  return comicData;
}

ReactDOM.render(<Container />, document.getElementById("container"));
registerServiceWorker();
