

import './VideoItem.scss';
import VideoItemMore from './VideoItemMore';

function VideoItem({title, thumbnail}) {
  return (
    <div className="VideoItem">
      <div className='thumbnailWrapper'>
        <img className='thumbnail' src={thumbnail} ></img>
      </div>
      <div className='InfoWrapper'>
        <div className='ProfileCircle'>
        </div>
        <div className='TitleWrapper'>
          <div className='InnerTitle'>
            <div className='VideoTitle'>{title}</div>
            <div className='ChannelName'>채널 이름</div>
            <div className='DescriptionWrapper'>
              <div className='ViewCounter'>조회수 17만회</div>
              <div className='dot'>·</div>
              <div className='UploadedTime'>2시간 전</div>
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