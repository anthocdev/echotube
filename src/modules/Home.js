import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
import backgroundImage from "../content/djbg.jpg";
import { Button } from "@material-ui/core";
import { ReactComponent as Logo } from "../content/echotubelogo.svg";
/* Simple homepage with core purpose of welcoming the user, logo animation included. */

class HomePage extends React.Component {
  onSubmit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="overlay">
        <div className="LogoContainer">
          <Logo className="Logo" />
          <div className="subLogo">
            Archive your songs, because YouTube will not.
          </div>
        </div>

        <div class="container">
          {/* Small box for introduction */}
          <div class="homebox">
            <h1>
              {" "}
              Welcome to EchoTube
              <p>
                You've reached an alternative environment to enjoy and archive
                your favorite songs from YouTube. Click the button below to get
                introduced!
              </p>
              <Button
                component={Link}
                to="/guide"
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "rgba(153, 50, 204, 0.6)",
                  color: "white",
                }}
              >
                Guide Page
              </Button>
            </h1>
          </div>
          {/* Small box for introduction */}
        </div>
      </div>
    );
  }
}

export default HomePage;
