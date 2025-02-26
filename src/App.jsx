import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import ScrollToTop from './utils/ScrollToTop'

const App = () => {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App