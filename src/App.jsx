import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CannedResponses from './pages/CannedResponses'


const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CannedResponses />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App