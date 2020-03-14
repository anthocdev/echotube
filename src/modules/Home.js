import React from "react";
import VideoForm from "./containers/Forms/VideoImportWizard/VideoForm";
/* Home page place holder - Currently one of the routes for testing */
class HomePage extends React.Component {
  onSubmit = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <VideoForm />
      </div>
    );
  }
}

export default HomePage;
