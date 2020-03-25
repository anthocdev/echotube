import React from "react";
import UserVideoCard from "./VideoCard";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
/* Function for displaying list of videos using video cards */
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function Videos({ videos, dispatch }) {
  const classes = useStyles();
  const noVideosMessage = <p>No videos found in this playlist.</p>;

  const playlistVideoList = (
    <div className="btn">
      {videos.map(video => (
        <UserVideoCard video={video} dispatch={dispatch} key={video.VideoID} />
      ))}
    </div>
  );

  const playlistVideoListUI = (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {videos.map(value => (
            <Grid key={value} item>
              <UserVideoCard
                video={value}
                dispatch={dispatch}
                key={value.PlaylistID}
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
    <div>{videos.length === 0 ? noVideosMessage : playlistVideoListUI}</div>
  );
}
