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
      PlaylistID: "",
      ValidImage: false,
      errorMessage: "",
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
      PlaylistID: this.props.userPlaylist[playlistIndex].PlaylistID,
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

  async validForm(playlistData) {
    var isValid = true;
    var error = "";
    if (!playlistData.PlaylistName) {
      isValid = false;
      error = error + "Invalid Playlist Name \n";
    }

    if (!playlistData.PlaylistImageLink) {
      isValid = false;
      error = error + "Invalid Image, Please Verify It. \n";
    }

    await this.setState({
      errorMessage: error,
    });
    return isValid;
  }

  async handleSubmit(event) {
    event.preventDefault();
    /* Validation Check */
    /* Request Creation To API */
    var playlistObject = {
      PlaylistName: this.state.PlaylistName,
      PlaylistImageLink: this.state.VerifiedImageLink,
      PlaylistID: this.state.PlaylistID,
    };

    if (await this.validForm(playlistObject)) {
      this.props.editUserPlaylist(playlistObject);
    } else {
      alert(this.state.errorMessage);
    }
  }

  confirmDeletion(playlistId) {
    this.props.deleteUserPlaylist(playlistId);
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
          Confirm Changes
        </Button>
        <Button
          onClick={() => this.confirmDeletion(this.state.PlaylistID)}
          variant="outlined"
          color="secondary"
        >
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
