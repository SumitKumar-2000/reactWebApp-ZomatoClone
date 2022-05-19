import React from 'react'
import HomePage from './pages/home'
import UserPreview from './pages/userpreview'
import NoPageFound from './pages/NoPageFound'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {

  return (
    <Router basename='/reactWebApp-ZomatoClone'>
      <Routes>
        <Route path='/reactWebApp-ZomatoClone' element={<UserPreview/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='*' element={<NoPageFound/>} />
      </Routes>
    </Router>
  )
}

export default App
