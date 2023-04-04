import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/MainPage/MainPage';
import Test from './pages/test/test';

import './common/common.scss';

function App() {

  return (
    <Routes>
      <Route path="/test" element={<Test />}/>
      <Route exact path="/" element={<Main />}/>
    </Routes>
  );
}

export default App;
