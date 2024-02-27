import React from 'react'
import headercar from '../../assets/headercar.jpg'
import './Header.css'
const Header = ({ heading }) => {
    return (
        <section className='header' style={{ backgroundImage: `url(${headercar})`, backgroundSize: 'cover', backgroundPosition: 'fixed' }}>
            <h1>{heading}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, nisi.</p>
        </section>
    )
}

export default Header
