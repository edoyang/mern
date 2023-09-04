import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from '..'
import { Footer, Header, Navbar } from '../../components'

const MainApp = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <p>Main App</p>
      <Footer />
    </div>
  )
}

export default MainApp