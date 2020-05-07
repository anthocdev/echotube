import React from "react";
import VideoForm from "./containers/Forms/VideoImportWizard/VideoForm";
import { Typography, Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
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
      <div className="overlay">
        <div class="container">
          {/* Small box for introduction */}
          <div class="homebox">
            <h1>
              {" "}
              Welcome to EchoTube
              <p>
                Here to provide you with reliable playlist management, because
                YouTube will not. Click below to get introduced!
              </p>
              <button class="btn btn-outline-secondary btn-lg">
                Guide Page
              </button>{" "}
            </h1>
          </div>
          {/* Small box for introduction */}
        </div>
      </div>
    );
  }
}

export default HomePage;
