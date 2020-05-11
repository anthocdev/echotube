import React from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MetaDataInfo from "../MetaDataInfo/FullScreen";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import "../../../style/videocard.css";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.5s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    width: 400,
    height: 300,
    marginLeft: "auto",
    overflow: "clip",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "column",
      paddingTop: spacing(0.5),
    },
  },
  media: {
    width: "120%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(0),
    paddingBottom: "70%",
    paddingLeft: "50%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "absolute",
    "&:after": {
      content: "",
      top: 0,
      left: 0,
      borderRadius: spacing(0), // 16
      opacity: 0.9,
    },
  },
  content: {
    padding: 10,
    zIndex: 1,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  button: {
    margin: "5px",
    color: "#FF1111",
    background: "#FFFFFF",
  },
  title: {
    background: "rgba(153,50,204,0.7)",
    fontSize: 14,
    color: "#FFFFFF",
    borderRadius: "20px",
    padding: "5px",
  },
}));

/* Video card display function for video objects */
export default function VideoCard({ video, dispatch, delDispatch, isGuide }) {
  const styles = useStyles();
  const shadowStyles = useOverShadowStyles();

  if (isGuide) {
    return (
      <Card className={clsx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={styles.media}
          image={`https://i.ytimg.com/vi/${video.VideoLink}/maxresdefault.jpg`}
        />
        <CardContent className={styles.content}>
          <Typography className={styles.title}>{video.Name}</Typography>
        </CardContent>
        <div className="btnStack">
          <Button
            onClick={() => dispatch(video)}
            className={styles.button}
            style={{ color: "black" }}
          >
            Add To Queue
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className={clsx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={`https://i.ytimg.com/vi/${video.VideoLink}/maxresdefault.jpg`}
      />
      <CardContent className={styles.content}>
        <Typography className={styles.title}>{video.Name}</Typography>
      </CardContent>
      <div className="btnStack">
        <Button
          onClick={() => delDispatch(video.playlistvideo)}
          className={styles.button}
        >
          Delete Video
        </Button>

        <Button
          onClick={() => dispatch(video)}
          className={styles.button}
          style={{ color: "black" }}
        >
          Add To Queue
        </Button>
        <MetaDataInfo video={video} />
      </div>
    </Card>
  );
}
