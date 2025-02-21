import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './Pages/HomePage'
import ScrollToTop from './utils/ScrollToTop'

const App = () => {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
      
    </>
  )
}

export default App