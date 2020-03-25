import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function PlaylistCard({ playlist }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card
      className={classes.root}
      component={Link}
      to={`/Playlist/${playlist.PlaylistID}`}
    >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {playlist.Name}
          </Typography>
        </CardContent>
        <div className={classes.controls}></div>
      </div>
      <CardMedia
        className={classes.cover}
        image={playlist.PlaylistImageLink}
        title="Live from space album cover"
      />
    </Card>
  );
}
