import React from 'react';
import BottomBar from './BottomBar';
import History from './History';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Setting from './Setting';
import Fav from './Fav';


function App() {
  return (
    <BrowserRouter>
      <>
        <BottomBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/history' element={<History />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/fav' element={<Fav />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
