/* Utilizing Deezer API for retrieving additional details for songs */
import React from "react";
import { connect } from "react-redux";
import * as DeezerActions from "../../../../actions/DeezerActions";

/* Page for displaying playlists of signed in user */
class DeezerParser extends React.Component {
  componentDidMount() {
    this.props.getDeezerByName(this.props.video.Name);
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
        <h2> </h2>
        <code>{this.props.deezer.Songs.total}</code>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    deezer: state.deezer,
  };
}

export default connect(mapStateToProps, DeezerActions)(DeezerParser);
