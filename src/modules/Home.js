import React from "react";
import VideoForm from "./containers/Forms/VideoImportWizard/VideoForm";
import { Typography, Button } from "@material-ui/core";
import "../style/home.css";
import backgroundImage from "../content/djbg.jpg";
/* Home page place holder - Currently one of the routes for testing */

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
});

class HomePage extends React.Component {
  onSubmit = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <div className="HomePage">
          <a>Home Page Placeholder</a>
        </div>
        <div className="center">
          <Typography
            style={{ color: "rgba(153, 50, 204, 0.9)" }}
            align="center"
            variant="h1"
            marked="center"
          >
            EchoTube
          </Typography>
          <Typography
            color="inherit"
            align="center"
            variant="h2"
            marked="center"
          >
            Archive your Playlists
          </Typography>
          <Typography
            color="inherit"
            align="center"
            variant="h5"
            className={styles.h5}
          >
            Because YouTube will not.
          </Typography>

          <Button
            variant="contained"
            style={{
              marginTop: "20px",
              minWidth: "200px",
              minHeight: "50px",
              color: "rgba(153, 50, 204, 0.9)",
              backgroundColor: "rgba(200, 155, 100, 0.9)",
            }}
          >
            Guide Me
          </Button>
        </div>
      </div>
    );
  }
}

export default HomePage;
