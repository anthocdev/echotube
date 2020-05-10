/* Utilizing Deezer API for retrieving additional details for songs */
import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import DeezerCard from "./DeezerCard";
import { getDeezerByName } from "../../../../actions/DeezerActions";
import { addMetadata } from "../../../../actions/MetaDataActions";

/* Page for displaying playlists of signed in user */
class DeezerParser extends React.Component {
  constructor(props) {
    super(props);

    this.storeAndClose = this.storeAndClose.bind(this);
  }
  componentDidMount() {
    this.props.getDeezerByName(this.props.video.Name);
  }

  storeAndClose(PlaylistVideoID, dObj) {
    this.props.addMetadata(PlaylistVideoID, dObj);
    this.props.close();
  }

  renderDeez(data) {
    return data.map((value, idx) => (
      <div>
        <Grid key={value} item>
          <DeezerCard
            dObj={value}
            PlaylistVideoID={this.props.video.playlistvideo.PlaylistVideoID}
            key={idx}
            dispatch={this.storeAndClose}
          />
        </Grid>
      </div>
    ));
  }

  render() {
    if (this.props.deezer.errorMessage) {
      return <div>{this.props.deezer.errorMessage}</div>;
    }
    if (!this.props.deezer.Songs.data) {
      return <div>--No Deezer Data--</div>;
    }
    return (
      <div>
        <h1> Deezer Listings </h1>
        <h3>Found a total of: {this.props.deezer.Songs.total} songs</h3>
        {this.renderDeez(this.props.deezer.Songs.data)}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    deezer: state.deezer,
  };
}

export default connect(mapStateToProps, { getDeezerByName, addMetadata })(
  DeezerParser
);
