import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

const Layout = (p) => {


  return (
    <BrowserRouter>
        <Navbar />
        {p.children}
        <Footer />
    </BrowserRouter>
  )
}

export default Layout