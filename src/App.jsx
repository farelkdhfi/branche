import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './Pages/HomePage'
import GalleryPage from './Pages/GalleryPage'
import PreviewPage from './Pages/PreviewPage'
import PreviewPage2 from './Pages/PreviewPage2'
import PreviewPage3 from './Pages/PreviewPage3'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/preview' element={<PreviewPage />} />
        <Route path='/preview2' element={<PreviewPage2 />} />
        <Route path='/preview3' element={<PreviewPage3 />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
      
    </>
  )
}

export default App