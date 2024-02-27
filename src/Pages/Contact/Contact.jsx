import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Form from './components/Form'
import './ContactStyle.css'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Header heading='Contact Page'/>
      <Form />
      <Footer/>
    </div>
  )
}

export default Contact
