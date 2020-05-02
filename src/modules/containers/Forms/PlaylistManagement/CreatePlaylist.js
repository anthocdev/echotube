import React from "react";
import { Button } from "react-bootstrap";

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PlaylistName: "",
      PlaylistImageLink: "",
      VerifiedImageLink: "",
      ValidImage: false,
    };

    this.imageLinkInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    /* Validation Check */
    /* Request Creation To API */
    alert("A name was submitted: " + this.state);
  }

  async dispImage() {
    this.setState({
      ValidImage: await ImageVerify(this.state.PlaylistImageLink),
    });

    if (this.state.ValidImage) {
      this.setState({ VerifiedImageLink: this.state.PlaylistImageLink });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Playlist Name:
          <input
            name="PlaylistName"
            type="text"
            value={this.state.PlaylistName}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Playlist Image Link:
          <input
            name="PlaylistImageLink"
            type="text"
            value={this.state.PlaylistImageLink}
            onChange={this.handleChange}
          />
          <Button onClick={() => this.dispImage()}>Verify Image</Button>
          {this.state.ValidImage ? (
            <div>
              <img
                src={this.state.VerifiedImageLink}
                height="150px"
                width="150px"
              />
            </div>
          ) : (
            <div>Invalid</div>
          )}
        </label>
        <input type="submit" value="Create Playlist" />
      </form>
    );
  }
}

function ImageVerify(url) {
  return new Promise(function (res, rej) {
    let img = new Image();
    img.src = url;

    img.onload = function () {
      res(true);
    };

    img.onerror = function () {
      res(false);
    };
  });
}

export default CreatePlaylist;
