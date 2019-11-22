import React from "react";
import { Link } from "react-router-dom";

export default function UserPlaylistCard({ playlist }) {
  return (
    <div className="card">
      <div className="card-img-top">
        <img src={playlist.PlaylistImageLink} width="200" height="200" />
      </div>
      <div className="content">
        <Link
          to={`/Playlist/${playlist.PlaylistID}`}
          className="playlistHeader"
        >
          {playlist.Name}
        </Link>
      </div>
    </div>
  );
}
