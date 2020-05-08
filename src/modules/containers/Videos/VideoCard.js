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
      position: "fixed",
      top: 0,
      left: 0,
      borderRadius: spacing(0), // 16
      opacity: 0.5,
    },
  },
  content: {
    background: "rgba(153, 50, 204, 0.1)",
    width: 400,
    height: 300,
    padding: 10,
    borderRadius: spacing(2),
    position: "fixed",
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  button: {
    marginTop: 230,
    color: "#FF1111",
    background: "#FFFFFF",
    "&:hover": {
      background: "#111111",
    },
  },
  title: {
    background: "rgba(153,50,204,0.9)",
    fontSize: 20,
    color: "#FFFFFF",
  },
}));

/* Video card display function for video objects */
export default function VideoCard({ video, dispatch, delDispatch }) {
  const styles = useStyles();
  const shadowStyles = useOverShadowStyles();

  return (
    <Card className={clsx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={`https://i.ytimg.com/vi/${video.VideoLink}/maxresdefault.jpg`}
      />
      <CardContent className={styles.content}>
        {/* <TextInfoContent
          classes={contentStyles}
          overline={video.ChannelName}
          heading={video.Name}
        /> */}
        <Typography component="h5" variant="h5" className={styles.title}>
          {video.Name}
        </Typography>
        {/* <DeezerDialog video={video} /> */}
        <MetaDataInfo video={video} />
      </CardContent>
      <Button onClick={() => delDispatch(video.playlistvideo)}>
        Delete Video
      </Button>

      <Button onClick={() => dispatch(video)} className={styles.button}>
        Add To Queue
      </Button>
    </Card>
  );
}
