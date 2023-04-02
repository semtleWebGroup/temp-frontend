import React, { useState } from 'react';

import VideoList from "./VideoList";

function MainPage(props) {
  return <div className="MainPage">
    <VideoList />
  </div>;
}

function ExampleComponent(props) {

  // useState 사용법은 1주차 리액트 기본 강좌 참고
  const [isOpenedMoreMenu, setOpenedMoreMenu] = useState(false);

  // js에서는 함수를 변수에 저장할 수 있음
  // => 기호를 써서 함수를 간단하게 표현할 수 있음
  const toggleMoreMenu = e => {
    setOpenedMoreMenu(isOpened => !isOpened);
  };

  // 태그 클릭스 onClick prop에 들어간 함수가 실행됨
  return (
    <div className="button" onClick={toggleMoreMenu}>
      클릭
      {isOpenedMoreMenu && "앞의 값이 true일 때만 표시됨"}
    </div>
  )
}

export default MainPage;