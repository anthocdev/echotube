import React from "react";
import UserPlaylistCard from "./UserPlaylistCard";
/* function for displaying user playlists using playlist cards */
export default function UserPlaylists({ playlists }) {
  const noPlaylistsMessage = (
    <p>No playlists found in database for this user.</p>
  );

  const userPlaylistList = (
    <div className="card">
      {playlists.map(playlist => (
        <UserPlaylistCard playlist={playlist} key={playlist.PlaylistID} />
      ))}
    </div>
  );

  return (
    <div>{playlists.length === 0 ? noPlaylistsMessage : userPlaylistList}</div>
  );
}
