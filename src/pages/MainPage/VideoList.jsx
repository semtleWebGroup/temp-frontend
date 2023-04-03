import React from "react";

import VideoItem from "./VideoItem";
import * as api from "../../services/api";

function VideoList(props) {
  let videoList = api.getVideoList();

  const now = new Date();

  let formatViewCount = (views) =>{
    return views;
  }
  let formatTime = (createdTime) => {
    const diff = now.getTime() - createdTime * 1000;
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 12 * month;

    if (diff < minute) {
      return "방금 전";
    } else if (diff < hour) {
      const minutes = Math.floor(diff / minute);
      return `${minutes}분 전`;
    } else if (diff < day) {
      const hours = Math.floor(diff / hour);
      return `${hours}시간 전`;
    } else if (diff < month) {
      const days = Math.floor(diff / day);
      return `${days}일 전`;
    } else if (diff < year) {
      const months = Math.floor(diff / month);
      return `${months}달 전`;
    } else {
      const years = Math.floor(diff / year);
      return `${years}년 전`;
    }
  }

  return (<ul className="box-container">
    {videoList.map((video,index)=>(
      <VideoItem title ={video.title} 
      thumbnail={video.thumb_img}  
      channelId={video.channelId} 
      profile_img={video.profile_img} 
      view_count = {formatViewCount(video.view_count)} 
      created_time = {formatTime(video.created_time)}/>
    ))}
  </ul>);
}

export default VideoList;