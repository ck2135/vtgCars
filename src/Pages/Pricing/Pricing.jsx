import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Card from './Component/Card'
import Footer from '../../Components/Footer/Footer'

import './PricingStyles.css'


const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Header heading='Pricing Page' />
      <Card />
      <Footer />
      
    </div>
  )
}

export default Pricing
