import React from 'react'
import HomePage from './pages/home'
import UserPreview from './pages/userpreview'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserPreview/>} />
        <Route path='/home' element={<HomePage/>} />
      </Routes>
    </Router>
  )
}

export default App