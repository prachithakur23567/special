import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
// import Footer from './Footer'
// import Main from './Main'
import Footer from './Footer'
import Logoo from './Logoo'
import About from './About'
import Customer from './Customer'
import Login from './Login'
import Main from './Main'




const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Logoo />} />
        <Route exact path="/log" element={<Login />} />

        <Route exact path='/about' element={<About />} />
        <Route exact path="/customer" element={<Customer />} />


      </Routes>
      <Main />
      <Footer />
    </>
  )
}

export default App
