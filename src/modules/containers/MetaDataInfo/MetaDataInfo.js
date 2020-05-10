import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
import DeezerDialog from "../Forms/DeezerManagement/DeezerDialog";
import * as MetaDataActions from "../../../actions/MetaDataActions";
import { connect } from "react-redux";

class MetaDataInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.onOpen(
      this.props.getMetadata(this.props.video.playlistvideo.PlaylistVideoID)
    );
  }
  render() {
    const deezerSerach = (
      <ListItem button>
        <DeezerDialog video={this.props.video} />
      </ListItem>
    );
    const { Name, Description, ChannelName } = this.props.video;
    const videoDetails = (
      <div>
        <Typography variant="h4" component="h4" style={{ textAlign: "center" }}>
          Video Information
        </Typography>
        <ListItem>
          <ListItemText
            primary="YouTube Channel Name"
            secondary={ChannelName}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Stored Video Description"
            secondary={Description}
          />
        </ListItem>
      </div>
    );
    if (!this.props.metaData)
      return (
        <List>
          {deezerSerach}
          <Divider />
          {videoDetails}
          <div>No Metadata Stored</div>
        </List>
      );
    {
      /* Plling props only after metadata is checked to exist. */
    }
    const {
      deezerid,
      song_title,
      preview,
      artist_name,
      artist_image,
      album_name,
      album_image,
    } = this.props.metaData;
    return (
      <List>
        {deezerSerach}
        <Divider />
        {videoDetails}
        <div style={{ display: "grid" }}>
          <Typography
            variant="h4"
            component="h4"
            style={{ textAlign: "center" }}
          >
            Deezer Metadata
          </Typography>
          <Button
            variant="contained"
            onClick={() =>
              window.open(
                `https://www.deezer.com/en/track/${deezerid}`,
                "_blank"
              )
            }
          >
            Open Deezer Page
          </Button>
        </div>

        <ListItem>
          <ListItemText primary="Song Title" secondary={song_title} />
        </ListItem>
        <ListItem>
          <Typography variant="h5" component="h5">
            Preview
          </Typography>
          {<audio controls src={preview} style={{ paddingLeft: "20px" }} />}
        </ListItem>
        <ListItem alignItems="flex-start">
          {/* Artist */}
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <img src={artist_image} />
            </ListItemAvatar>
            <ListItemText
              primary="Artist"
              secondary={artist_name}
              style={{ paddingLeft: "20px" }}
            />
          </ListItem>
          {/* Album */}
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <img src={album_image} />
            </ListItemAvatar>
            <ListItemText
              primary="Album"
              secondary={album_name}
              style={{ paddingLeft: "20px" }}
            />
          </ListItem>
        </ListItem>
      </List>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    metaData: store.metaData.Metadata.metadatum,
  };
};

export default connect(mapStateToProps, MetaDataActions)(MetaDataInfo);
