import './style.scss';

function VideoItem(porps){
  return(
      <div className="box">
        <div className='thumbnailWrapper'>
          <img className='thumbnail' src="https://i.ytimg.com/vi/QxJgUBRR5V4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLC5slQdj9vCwmEv8TdzJv2g7lRvEg" ></img>
        </div>
        <div className='InfoWrapper'>
          <div className='ProfileCircle'>

          </div>
          <div className='TitleWrapper'>
            <div className='InnerTitle'>
              <div className='VideoTitle'>영상 제목이 어쩌구저쩌구 영상 제목이 어쩌구저쩌구 영상 제목이 </div>
              <div className='ChannelName'>채널 이름</div>
              <div className='DescriptionWrapper'>
                <div className='ViewCounter'>조회수 17만회</div>
                <div className='dot'>·</div>
                <div className='UploadedTime'>2시간 전</div>
              </div>
            </div>
            <div className='MoreArea'>
             <span class="material-symbols-outlined">more_vert</span>
            </div>
          </div>
        </div>
      </div>
  );
}
function App() {
  return (
    <div className="box-container">
      <VideoItem></VideoItem>
      <VideoItem></VideoItem>
      <VideoItem></VideoItem>
      <VideoItem></VideoItem>
      <VideoItem></VideoItem>
      <VideoItem></VideoItem>
    </div>
  );
}

export default App;
