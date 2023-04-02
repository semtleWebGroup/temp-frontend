import React from "react";

import VideoItem from "./VideoItem";

function VideoList(props) {
  return <ul className="box-container">
    <VideoItem title={'메인'} thumbnail={"https://i.ytimg.com/vi/QxJgUBRR5V4/hq720.jpg"} />
    <VideoItem title={'메인'} thumbnail={"https://i.ytimg.com/vi/QxJgUBRR5V4/hq720.jpg"} />
    <VideoItem title={'메인'} thumbnail={"https://i.ytimg.com/vi/QxJgUBRR5V4/hq720.jpg"} />
  </ul>;
}

export default VideoList;