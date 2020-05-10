import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 300,
    height: 300,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function DeezerCard({ dObj, dispatch, PlaylistVideoID }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(PlaylistVideoID, dObj)}
        >
          Store as Metadata
        </Button>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {dObj.title}
          </Typography>
          <Typography component="h5" variant="h5">
            Artist: {dObj.artist.name}
          </Typography>
          <Typography component="h5" variant="h5">
            Album: {dObj.album.title}
          </Typography>
          <audio controls src={dObj.preview} />
        </CardContent>
        <div className={classes.controls}></div>
      </div>
      <CardMedia
        className={classes.cover}
        image={dObj.album.cover_medium}
        title="Live from space album cover"
      />
    </Card>
  );
}
