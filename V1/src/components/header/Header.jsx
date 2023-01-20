import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = (props) => {
  const { name, image, profession, cv } = props.data
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{name}</h1>
        <h5 className='text-light'>{profession}</h5>
        <CTA cv={cv}/>
        <div className='me'>
          <img src={image} alt="me" className='avatar'/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header