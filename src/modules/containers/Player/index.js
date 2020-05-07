import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import VideocamSharpIcon from "@material-ui/icons/VideocamSharp";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Player from "./PlayerInstance";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const styles = (setTheme) => ({
  core: {
    margin: 0,
    padding: setTheme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: setTheme.spacing(1),
    top: setTheme.spacing(1),
    color: "#FFFFFF",
  },
});

const CustomDialogTitle = withStyles(styles)((props) => {
  const { onClose, classes, children } = props;
  return (
    <DialogTitle
      className={classes.root}
      style={{ backgroundColor: "rgba(153, 50, 204, 0.9)", color: "#FFFFFF" }}
    >
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          className={classes.closeButton}
          aria-label="close"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

const TransitionEffect = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreen(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { video } = props;
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        onClick={handleClickOpen}
        aria-label="Open Player"
      >
        <VideocamSharpIcon variant="solid" />
      </IconButton>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={TransitionEffect}
      >
        <CustomDialogTitle onClose={handleClose}>
          EchoTube Playback
        </CustomDialogTitle>

        <Player />
      </Dialog>
    </div>
  );
}
