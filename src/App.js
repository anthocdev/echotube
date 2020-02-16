import React from "react";
import { Route } from "react-router-dom";
import Home from "./modules/Home";
import UserPage from "./modules/UserPage";
import UserPlaylistsPage from "./modules/UserPlaylistsPage";
import PlaylistVideosPage from "./modules/PlaylistVideosPage";
import Header from "./modules/Header";
import Auth from "./modules/Auth";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style/player.css";
import Player from "./modules/containers/Player";

class App extends React.Component {
  render() {
    return (
      <div className="Main">
        <div>
          {/* Video Player page takes highest z-index over other modules to allow overlay */}
          <Player />
          {/* Header Section above routes*/}
          <Header />
        </div>
        {/* Home Page Route*/}
        <Route exact path="/" component={Home} />
        {/* User List Route (Experimental)*/}
        <Route exact path="/users" component={UserPage} />
        {/* List of Playlists made by User Route*/}
        <Route path="/user/:_id" component={UserPlaylistsPage} />
        {/* Playlist Video Listing Route */}
        <Route path="/Playlist/:_id" component={PlaylistVideosPage} />
        {/* Account Management Route */}
        <Route path="/Auth" component={Auth} />
      </div>
    );
  }
}

export default App;
