import React from "react";
import ReactDOM from "react-dom";
import VideoItem from "../../../modules/containers/Player/VideoItem";
import { Provider } from "react-redux";
import store from "../../../store/store";

/* Example Video Object for Integration Testing with API Data Structure */
const data = {
  VideoID: 27,
  Name: "Castion - El Zorro",
  Description:
    "[Electro House] Castion - El Zorro (Extended Mix) ➥ Our Spotify: https://illumi.fanlink.to/spotify 📱 Subscribe! Help us to 250,000 🔥 Turn on notifications to stay updated! 🔔 El Zorro by Castion is out now on Mixmash Bold! 🔥 ⬇️ Stream/Download: http://bit.ly/ELZORRO 🎶 Our Spotify Playlists: Future House 🕺 https://illumi.fanlink.to/futurehouse Future Bounce 🔥 https://illumi.fanlink.to/futurebounce Bass House 😈 https://illumi.fanlink.to/basshouse Deep House 🌴 https://illumi.fanlink.to/deephouse YouTube Uploads ▶️ https://illumi.fanlink.to/youtubeuploads 🙏 Join to Illumi Nation Discord: https://discord.gg/Qd8KXru 👕 Merch: http://bit.ly/illumimerch 🎧 Submit Your Track: https://submissions.illumimusic.eu 📀 Promo for Record Labels: promo@illumimusic.eu 📧 Contact: contact@illumimusic.eu ©️🚫This track is NOT copyright free! Copyright Free Music here: http://bit.ly/2si4AyM ➥ Follow Illumi Music: https://www.facebook.com/IllumiMusic https://soundcloud.com/illumi-music https://twitter.com/IllumiMusic https://www.instagram.com/illumimusicyt https://www.snapchat.com/add/illumimusic https://vk.com/illumimusictv ➥ Follow Castion: https://soundcloud.com/castionmusic https://www.facebook.com/CastionMusic https://twitter.com/CastionMusic https://www.instagram.com/castionmusic 📷 Photo by Philipp Lansing Tags: #Castion #ElZorro #BassHouse #Mixmash #FutureHouse #FutureBounce #HouseMusic #DeepHouse #ElectroHouse #EDM #PartyMusic #ShuffleDance #Shuffle #FestivalMusic #Electronic #ElectronicMusic #Dance #Dancemusic #Summermusic #Music #NewMusic #ElectronicDanceMusic #IllumiMusic #Illumi #Music #Future #House Castion - El Zorro Castion - El Zorro (Extended Mix)",
  ChannelName: "Illumi Music",
  ChannelID: "UCXarSAuECvnQFBb1vMcMsjQ",
  VideoLink: "DZjpDfgXNe0",
};

describe("Individual Video Item Module Testing", () => {
  it("Renders Successfully with Current Structure", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <VideoItem video={data} key={1} index={1} selectedVideo={null} />
      </Provider>,
      div
    );
  });
});
