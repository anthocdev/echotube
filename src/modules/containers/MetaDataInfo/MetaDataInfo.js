import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
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

    if (!this.props.metaData)
      return (
        <List>
          {deezerSerach}
          <Divider />
          <div>No Metadata Found</div>
        </List>
      );
    return (
      <List>
        {deezerSerach}
        <Divider />
        <ListItem button>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
          <div>
            <pre>{JSON.stringify(this.props.video, null, 2)}</pre>
          </div>
        </ListItem>
        <ListItem>
          <ListItemText>
            <pre>{JSON.stringify(this.props.metaData, null, 2)}</pre>
          </ListItemText>
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
