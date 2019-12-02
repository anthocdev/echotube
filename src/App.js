import React from "react";
import { Route } from "react-router-dom";
import Home from "./modules/Home";
import UserPage from "./modules/UserPage";
import UserPlaylistsPage from "./modules/UserPlaylistsPage";
import PlaylistVideosPage from "./modules/PlaylistVideosPage";
import Header from "./modules/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style/player.css";
import Player from "./modules/containers/Player";

class App extends React.Component {
  render() {
    return (
      <div className="Main">
        <div>
          <Player />
          <Header />
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UserPage} />
        <Route path="/user/:_id" component={UserPlaylistsPage} />
        <Route path="/Playlist/:_id" component={PlaylistVideosPage} />
      </div>
    );
  }
}

export default App;
