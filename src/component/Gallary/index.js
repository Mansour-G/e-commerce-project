import React from 'react';
import './style.css'
import fImg from '../../assets/image-product-1.jpg'
import sImg from '../../assets/image-product-2.jpg'
import tImg from '../../assets/image-product-3.jpg'
import foImg from '../../assets/image-product-4.jpg'
import fImgs from '../../assets/image-product-1-thumbnail.jpg'
import sImgs from '../../assets/image-product-2-thumbnail.jpg'
import tImgs from '../../assets/image-product-3-thumbnail.jpg'
import foImgs from '../../assets/image-product-4-thumbnail.jpg'
import prev from '../../assets/icon-previous.svg'
import next from '../../assets/icon-next.svg'

const Gallary = () => {

  const showGallery = () => {
    const showLightBox = document.querySelector(".lightbox")
    showLightBox.classList.remove('hidden')
  }

  return (

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-slide-to="3">

      <div className="carousel-inner  " >

        <div className="carousel-item active">
          <img src={fImg} className="d-block w-100 mainPointer" alt="..." onClick={showGallery} />
        </div>
        <div className="carousel-item ">
          <img src={sImg} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={tImg} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={foImg} className="d-block w-100" alt="..." />
        </div>
      </div>

      <div className="carousel-indicators indicators">
        <button className='active smImg smImg1' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"><img src={fImgs} alt="" className='smImgs fImgs' /></button>
        <button className='smImg smImg2' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><img src={sImgs} alt="" className='smImgs sImgs' /></button>
        <button className='smImg smImg3' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><img src={tImgs} alt="" className='smImgs tImgs' /></button>
        <button className='smImg smImg4' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"><img src={foImgs} alt="" className='smImgs foImgs' /></button>
      </div>

      <button className="carousel-control-prev controls" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <img src={prev} alt="" className='svg prev' />
      </button>
      <button className="carousel-control-next controls" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <div>
          <img src={next} alt="" className='svg next' />
        </div>
      </button>
    </div>


  );
}

export default Gallary;