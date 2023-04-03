

import './VideoItem.scss';
import VideoItemMore from './VideoItemMore';

function VideoItem({title, thumbnail, profile_img, channel_title, view_count,created_time  }) {
  return (
    <div className="VideoItem">
      <div className='thumbnailWrapper'>
        <img className='thumbnail' src={thumbnail} ></img>
      </div>
      <div className='InfoWrapper'>
        <img className='ProfileCircle' src={profile_img}>
        </img>
        <div className='TitleWrapper'>
          <div className='InnerTitle'>
            <div className='VideoTitle'>{title}</div>
            <div className='ChannelName'>{channel_title}</div>
            <div className='DescriptionWrapper'>
              <div className='ViewCounter'>조회수 {view_count}</div>
              <div className='dot'>·</div>
              <div className='UploadedTime'>{created_time}</div>
            </div>
          </div>
          <div className='MoreArea'>
            <VideoItemMore />
          </div>
        </div>
      </div>
    </div>
  );
}
export default VideoItem;