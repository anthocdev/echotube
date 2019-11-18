import React from "react";
import Playlist from "./containers/Playlist";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions";

function Body() {
  return (
    <div>
      <Playlist />
    </div>
  );
}

export default Body;
