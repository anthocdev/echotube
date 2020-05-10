import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Paper, ButtonBase, Typography, colors } from "@material-ui/core";
import { Cancel as CrossIcon } from "@material-ui/icons";

import { Button } from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";
/* Display card for video items within player overlay */

const customStyle = makeStyles((customTheme) => ({
  root: {
    flexGrow: 1,
    paddingTop: customTheme.spacing(1),
    borderStyle: "line",
    borderColor: "white",
  },
  paper: {
    padding: customTheme.spacing(2),
    margin: "auto",
    maxWidth: "auto",
    background: "black",
    color: "white",
  },
  preview: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  keys: {
    display: "flex",
    alignItems: "center",
    paddingBottom: customTheme.spacing(1),
    paddingLeft: customTheme.spacing(1),
  },
  bigIcon: {
    height: 40,
    width: 40,
  },
}));

export default function VideoItem({
  index,
  video,
  selectedVideo,
  dispatchRemove,
}) {
  const customClasses = customStyle();

  return (
    <div
      className={customClasses.root}
      style={{ borderColor: "white" }}
      onClick={() => {
        selectedVideo(index, video.VideoLink);
      }}
    >
      <Paper className={customClasses.paper} style={{ borderColor: "white" }}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={customClasses.preview}>
              <img
                className={customClasses.img}
                alt="complex"
                src={`https://i.ytimg.com/vi/${video.VideoLink}/hqdefault.jpg`}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {video.Name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  {video.ChannelName}
                </Typography>
              </Grid>
            </Grid>
            <Grid item onClick={() => dispatchRemove(index)}>
              <CrossIcon
                className={customClasses.bigIcon}
                style={{ cursor: "pointer" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* <Card className={customClasses.root}>
        <div className={customClasses.description}>
          <CardContent className={customClasses.body}>
            <Typography component="h5" variant="h5">
              {video.Name}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={customClasses.preview}
          image={`https://i.ytimg.com/vi/${video.VideoLink}/hqdefault.jpg`}
          title="Cover"
        />
      </Card> */}
      {/* <Card className="videoCard">
        <Card.Img
          className="videoCard-image"
          variant="top"
          src={`https://i.ytimg.com/vi/${video.VideoLink}/hqdefault.jpg`}
        />
        <Card.Title>{video.Name}</Card.Title>
        <Button onClick={() => dispatchRemove(index)}>Remove</Button>
      </Card> */}
    </div>
  );
}
