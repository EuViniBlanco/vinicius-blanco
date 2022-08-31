import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/viniciusblanco/' target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/EuViniBlanco' target='_blank' rel="noopener noreferrer"><FaGithub/></a>
        <a href='https://wa.me/message/SEO3HJUHGUB2G1' target='_blank' rel="noopener noreferrer"><RiWhatsappFill/></a>
    </div>
  )
}

export default HeaderSocials