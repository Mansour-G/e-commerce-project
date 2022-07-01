import React from 'react'
import './style.css'
import decremnt from '../../assets/icon-minus.svg'
import incremnt from '../../assets/icon-plus.svg'
import cartImg from '../../assets/icon-cart.svg'

const Detailes = (props) => {

  return (
    <div className='detailes'>
      <div className="content py-3">
        <h6>Sneaker Company</h6>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      </div>
      <div className="price">
        <h4>$123.00 <span>50%</span></h4>
        <span>$250.00</span>
      </div>
      <div className="addToCart">
        <div className="count">
          <button className='decremnt'>
            <img src={decremnt} alt="" onClick={props.decreaseProduct} />
          </button>
          <span> {props.numProduct} </span>
          <button className='incremnt'>
            <img src={incremnt} alt="" onClick={props.increaseProduct} />
          </button>
        </div>
        <button className="addBtn " onClick={props.AddBtn}>
          <img src={cartImg} alt="" className='cartImg mx-2' /> <p className='text-light fw-bold my-0'>Add to cart</p>
        </button>
      </div>
    </div>
  )
}

export default Detailes;