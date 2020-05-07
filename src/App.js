import React from "react";
import { Route } from "react-router-dom";
import Home from "./modules/Home";
import Guide from "./modules/Guide";
import Rules from "./modules/Rules";
import UserPage from "./modules/UserPage";
import UserPlaylistsPage from "./modules/UserPlaylistsPage";
import PlaylistVideosPage from "./modules/PlaylistVideosPage";
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import Auth from "./modules/Auth";
import ContactPage from "./modules/ContactPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Header Section above routes*/}
        <Header />
        {/* Home Page Route*/}
        <div className="intro container-fluid">
          <Route exact path="/" component={Home} />
          {/* User List Route (Experimental)*/}
          <Route exact path="/user" component={UserPage} />
          {/* List of Playlists made by User Route*/}
          <Route path="/user/:_id" component={UserPlaylistsPage} />
          {/* Playlist Video Listing Route */}
          <Route path="/Playlist/:_id" component={PlaylistVideosPage} />
          {/* Account Management Route */}
          <Route path="/Auth" component={Auth} />
          {/* Guide Page Route*/}
          <Route path="/guide" component={Guide} />
          {/* Rules Page Route*/}
          <Route path="/rules" component={Rules} />
          {/* Contact Page Route*/}
          <Route path="/contact" component={ContactPage} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
