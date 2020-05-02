import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import VideoForm from "./VideoForm";
import Typography from "@material-ui/core/Typography";
/* Functional component for displaying Video Import Wizard within Dialog window */
export default function VideoWizard(props) {
  const [open, setOpen] = React.useState(false);

  const styles = (setTheme) => ({
    core: {
      margin: 0,
      padding: setTheme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: setTheme.spacing(1),
      top: setTheme.spacing(1),
    },
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const CustomDialogTitle = withStyles(styles)((props) => {
    const { onClose, classes, children } = props;
    return (
      <DialogTitle className={classes.root}>
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

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Import Video
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disableBackdropClick={true}
      >
        <CustomDialogTitle onClose={handleClose}>
          Video Import Wizard
        </CustomDialogTitle>
        <DialogContent>
          <VideoForm playlistId={props.playlistId} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
