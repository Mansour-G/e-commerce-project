import React from 'react'
import './lightbox.css'
import Gallary from '../Gallary/index'
import close from '../../assets/icon-close.svg'


const Lightbox = () => {


  const hideGallery = () => {
    const showLightBox = document.querySelector(".lightbox")
    showLightBox.classList.add('hidden')
  }

  return (
    <div className='lightbox hidden'>
      <img src={close} alt='...' className='close' onClick={hideGallery} />
      <Gallary />
    </div>
  )
}


export default Lightbox;