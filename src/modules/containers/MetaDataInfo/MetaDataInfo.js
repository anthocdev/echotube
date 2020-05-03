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
  render() {
    return (
      <List>
        <ListItem button>
          <DeezerDialog video={this.props.video} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
        </ListItem>
      </List>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    metaData: store.metaData,
  };
};

export default connect(mapStateToProps, MetaDataActions)(MetaDataInfo);
