//Confirm & Post Video
import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { getYouTubeVideo } from "../../../../actions/YouTubeActions";
import { addPlaylistVideo } from "../../../../actions/VideoActions";
import YouTubeCard from "../../YouTube/YoutubeVideoCard";
class StepTwo extends React.Component {
  async componentDidMount() {
    await this.props.getYouTubeVideo(this.props.values.videoLink);
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    if (this.props.youtube.data.length > 0)
      return (
        <form>
          <YouTubeCard
            youtubeVideo={this.props.youtube.data[0]}
            key={this.props.youtube.data[0].id}
          />
          <Button
            onClick={() =>
              this.props.addPlaylistVideo(
                values.playlistId,
                this.props.youtube.data[0]
              )
            }
          >
            Confirm
          </Button>
        </form>
      );
    else return <div>Video Not Found {this.props.youtube.data.length}</div>;
  }
}

function mapStateToProps(state, props) {
  return {
    youtube: state.youtube,
  };
}

export default connect(mapStateToProps, { getYouTubeVideo, addPlaylistVideo })(
  StepTwo
);
