import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { create, act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import VideoCard from "../../../modules/containers/YouTube/YoutubeVideoCard";
/* Example YouTube Video Object for Testing */
const data = {
  kind: "youtube#video",
  etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/47ZSg7AkcBvHMVDdNoLqQONX_cY"',
  id: "5n4jU80-p7M",
  snippet: {
    publishedAt: "2016-11-02T20:07:57.000Z",
    channelId: "UCFZ75Bg73NJnJgmeUX9l62g",
    title: "Selected Classics Mix",
    description:
      "Stay Classy 🗝\n\nTracklist: \n0:00 Shadow Child & Doorly - Piano Weapon (Nicky Night Time Remix)\n2:03 Cloonee - Separated\n5:09 Just Kiddin - Thinking About It\n7:29 Dont Look Now ft. Tom Tyler - Feels Like (Calippo Remix)\n10:55 Croatia Squad - Touch Me (Return Of The Jaded Remix) \n13:50 Felon - Colour \n16:23 Bordertown - Rapture \n21:30 Jett - Strong Look (Codec Remix) \n24:10 XYconstant - Her Eyes \n26:55 Ganzfeld Effect - Loving \n28:43 Playless -Broken\n32:38 Weiss - Baby Talk To Me\n33:40 Semedo & Curtis Gabriel - Some People say\n36:58 Calvin Harris - Bounce (DEVI Deep House Remix)\n39:15 Charli XCX - Doing It (ft. Rita Ora) (Siege Remix) \n42:48 Tim Berg - Seek Bromance (Jerome Price Remix)\n44:48 Icarus - Like I Do\n46:43 Route 94 & Secondcity - Freak\n50:25 TS7 ft. Taylor Fowlis - Heartlight\n54:05 Jazzanova ft. Ben Westbeech - I Can See (Konstantin Sibold Remix) \n57:40 Wih'Lo - It's True (Liar's 'It's a Lie' Mix)\n\nSelected - Music on a new level.\n» Spotify: http://bit.ly/selectedspotify\n» Facebook: http://on.fb.me/22t6pEf\n» Instagram: http://bit.ly/1Z6tc9F\n\nPicture by imyourglamorouscat:\nhttps://www.flickr.com/photos/imyourglamorouscat/",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/5n4jU80-p7M/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/5n4jU80-p7M/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/5n4jU80-p7M/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      standard: {
        url: "https://i.ytimg.com/vi/5n4jU80-p7M/sddefault.jpg",
        width: 640,
        height: 480,
      },
      maxres: {
        url: "https://i.ytimg.com/vi/5n4jU80-p7M/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
    },
    channelTitle: "Selected.",
    tags: [
      "selected",
      "deep house",
      "music",
      "selectedbase",
      "selected casual",
      "house",
      "new",
      "latest",
      "uk house",
      "nu disco",
      "Selected Classic Mix",
      "imyourglamorouscat",
      "Gorgon City",
      "Nicky Night Time",
      "Cloonee",
      "Just Kiddin",
      "Calippo",
      "Croatia Squad",
      "Return Of The Jaded",
      "Felon",
      "Bordertown",
      "Codec",
      "XYconstant",
      "Jerome Price",
      "Tim Berg",
      "Deep House Mix",
      "Selected Mix",
      "Icarus",
      "Konstantin Sibold",
      "Jennifer Hudson",
      "Selected mix",
      "Classic Mix",
      "Selected Classic",
      "Selected Best Of",
    ],
    categoryId: "10",
    liveBroadcastContent: "none",
    localized: {
      title: "Selected Classics Mix",
      description:
        "Stay Classy 🗝\n\nTracklist: \n0:00 Shadow Child & Doorly - Piano Weapon (Nicky Night Time Remix)\n2:03 Cloonee - Separated\n5:09 Just Kiddin - Thinking About It\n7:29 Dont Look Now ft. Tom Tyler - Feels Like (Calippo Remix)\n10:55 Croatia Squad - Touch Me (Return Of The Jaded Remix) \n13:50 Felon - Colour \n16:23 Bordertown - Rapture \n21:30 Jett - Strong Look (Codec Remix) \n24:10 XYconstant - Her Eyes \n26:55 Ganzfeld Effect - Loving \n28:43 Playless -Broken\n32:38 Weiss - Baby Talk To Me\n33:40 Semedo & Curtis Gabriel - Some People say\n36:58 Calvin Harris - Bounce (DEVI Deep House Remix)\n39:15 Charli XCX - Doing It (ft. Rita Ora) (Siege Remix) \n42:48 Tim Berg - Seek Bromance (Jerome Price Remix)\n44:48 Icarus - Like I Do\n46:43 Route 94 & Secondcity - Freak\n50:25 TS7 ft. Taylor Fowlis - Heartlight\n54:05 Jazzanova ft. Ben Westbeech - I Can See (Konstantin Sibold Remix) \n57:40 Wih'Lo - It's True (Liar's 'It's a Lie' Mix)\n\nSelected - Music on a new level.\n» Spotify: http://bit.ly/selectedspotify\n» Facebook: http://on.fb.me/22t6pEf\n» Instagram: http://bit.ly/1Z6tc9F\n\nPicture by imyourglamorouscat:\nhttps://www.flickr.com/photos/imyourglamorouscat/",
    },
  },
};

describe("YouTube VideoCard module testing", () => {
  let root;

  it("Renders Without Crashing", async () => {
    act(() => {
      root = create(
        <Provider store={store}>
          <VideoCard youtubeVideo={data} />
        </Provider>
      );
    });
  });

  test("Renders Matches Snapshot", async () => {
    act(() => {
      root = create(
        <BrowserRouter>
          <Provider store={store}>
            <VideoCard youtubeVideo={data} />
          </Provider>
        </BrowserRouter>
      );
    });
    expect(root).toMatchSnapshot();
    console.log(root.toJSON());
  });
});
