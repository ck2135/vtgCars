import React from 'react'
import car from '../../../assets/car.jpg'

const About = ({heading}) => {
    return (
        <div>
            <h2 className='heading'>{heading}</h2>
            <section className='about'>
                <img src={car} alt="" />
                <div className="content">
                    <h2>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repudiandae necessitatibus distinctio facere porro quae possimus perferendis! Ea vitae fugiat magnam minus modi! Asperiores culpa beatae, perspiciatis sapiente quam quia?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatem excepturi perspiciatis quo ipsam ullam nihil aperiam? Eveniet dignissimos, numquam aliquam mollitia, quo, asperiores at iste culpa reiciendis in dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sint.</p>
                </div>
            </section>
        </div>
    )
}

export default About
