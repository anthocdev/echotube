import React from "react";
import UserPlaylistCard from "./PlaylistCard";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
/* function for displaying user playlists using playlist cards */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function UserPlaylists({ playlists }) {
  const classes = useStyles();

  const noPlaylistsMessage = (
    <p>No playlists found in database for this user.</p>
  );

  const userPlaylistList = (
    <div className="card">
      {playlists.map((playlist) => (
        <UserPlaylistCard playlist={playlist} key={playlist.PlaylistID} />
      ))}
    </div>
  );

  const userPlaylistListUI = (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {playlists.map((value, idx) => (
            <Grid key={value} item>
              <UserPlaylistCard
                playlist={value}
                key={value.PlaylistID}
                index={idx}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container></Grid>
        </Paper>
      </Grid>
    </Grid>
  );

  return (
    <div>
      {playlists.length === 0 ? noPlaylistsMessage : userPlaylistListUI}
    </div>
  );
}
