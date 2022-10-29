import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Weekly from './routes/Weekly'
import Contact from './routes/Contact'
import Pc from './routes-dropdown/Pc'
import Monitor from './routes-dropdown/Monitor'
import Peripherals from './routes-dropdown/Peripherals'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weekly' element={<Weekly />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pc' element={<Pc />} />
        <Route path='/monitor' element={<Monitor />} />
        <Route path='/peripherals' element={<Peripherals />} />
      </Routes>
    </>
  );
}

export default App;