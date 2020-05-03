import React from "react";
import * as PlaylistActions from "../../../../actions/PlaylistActions";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

class EditPlaylist extends React.Component {
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

  componentDidMount() {
    const { playlistIndex } = this.props;
    this.setState({
      PlaylistName: this.props.userPlaylist[playlistIndex].Name,
      PlaylistImageLink: this.props.userPlaylist[playlistIndex]
        .PlaylistImageLink,
    });
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
    const { playlistIndex } = this.props;
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
          <Button
            onClick={() => this.dispImage()}
            variant="outlined"
            color="primary"
          >
            Verify Image
          </Button>
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
        <Button variant="outlined" color="primary" type="submit">
          {" "}
          Confirm Changes{" "}
        </Button>
        <Button variant="outlined" color="secondary">
          Delete Playlist
        </Button>
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

function mapStateToProps(state, props) {
  return {
    userPlaylist: state.userPlaylist.Playlists,
  };
}

export default connect(mapStateToProps, PlaylistActions)(EditPlaylist);
