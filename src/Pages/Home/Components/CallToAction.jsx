import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal';

const CallToAction = () => {

    const [modal, setModal] = useState(false);

    const handleClick = ()=>{
        setModal(!modal)
    }
  return (
    <div>
      <section className='call-to-action'>
        <h2>Hurry up Book your Tickets!</h2>
        <button onClick={handleClick}>Know More!</button>
      </section>
      {
        modal && <Modal handleClick={handleClick}/>
      }
    </div>
  )
}

export default CallToAction
