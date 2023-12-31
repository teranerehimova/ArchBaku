import React from 'react'
import styles from './style.module.css'
import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <div className="container">
        <div className={styles.contactAndSocial}>
          <div className={styles.contactInfo}>
            <div className='d-flex align-items-center'>
              <BsTelephoneFill className='me-2' />
              +994 55 000 00 00
            </div>
            <div className='d-flex align-items-center'>
              <AiOutlineMail className='me-2' />
              info@archbaku.az
            </div>
            <div className='d-flex align-items-center'>
              <ImLocation className='me-2' />
              Bakı / Azərbaycan
            </div>
          </div>

          <div className="d-flex align-items-center ">
            <FaFacebookF />
            <AiOutlineInstagram />
            <AiFillLinkedin />
            <AiOutlineWhatsApp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
