import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css'
import fImgs from '../../assets/image-product-1-thumbnail.jpg'
import cart from '../../assets/icon-cart.svg'
import avatar from '../../assets/image-avatar.png'
import deleteCart from '../../assets/icon-delete.svg'



const NavBar = (props) => {

  useEffect(() => {
    const sale = document.querySelector(".nav .icons .saleCount");


    if (props.numProduct <= 0) {
      sale.classList.remove("show");
    }
  }, [props.numProduct]);

  const [show, setShow] = useState(false);

  const showCart = () => {
    const mainDetls = document.querySelector(".theDetailes");

    show ? setShow(false) : setShow(true);

    mainDetls.classList.toggle("show");
    mainDetls.classList.toggle("hidden");
  }

  const removeProduct = () => {
    const details = document.querySelector(".nav .icons .cartDetailes .showDetailes");
    const emptyMsg = document.querySelector(".nav .icons .cartDetailes .hideDetailes")
    const emptyMsgP = document.querySelector(".nav .icons .cartDetailes .hideDetailes p")

    details.classList.add("hidden");
    emptyMsg.classList.add("show");
    emptyMsgP.classList.add("show");

    props.setNumProduct(0);
  }

  return (

    <nav class="navbar bg-light justify-content-between navbar-expand-lg  border-bottom py-0  nav">
  <div class="container-fluid d-flex align-items-center flex-row">
    <div className='d-flex flex-row-reverse'>

    <a class="navbar-brand fw-bold" href="#">Sneaker</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    </div>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>


      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">

          <li class="nav-item">
            <a class="nav-link active links" aria-current="page" href="#">Collections</a>
          </li>

          <li class="nav-item">
            <a class="nav-link links" href="#">Men</a>
          </li>

          <li class="nav-item">
            <a class="nav-link links" href="#">Women</a>
          </li>

          <li class="nav-item">
            <a class="nav-link links" href="#">About</a>
          </li>

          <li class="nav-item">
            <a class="nav-link links" href="#">Contact</a>
          </li>



        </ul>
      </div>
    </div>

  <div className='icons d-flex align-items-center'>
        <div className='cartDetailes'>
          <img src={cart} alt="" className='cart' onClick={showCart} /><span className='saleCount'> {props.numProduct} </span>
          <div className='theDetailes hidden' >
            <p className='cartLable'>Cart</p>
            <div className='showDetailes hidden'>
              <div className='detaile'>
                <img src={fImgs} alt="" className='productImg' />
                <div className='cartDetls'>Fall Limited Edition Sneakers <br /> <span className='numDetls'>$125.00 x {props.numProduct} <span className='numTotal'>${125 * props.numProduct}</span></span></div>
                <img src={deleteCart} alt="" className='delete' onClick={removeProduct} />
              </div>
              <div>
                <button className='checkout'>Checkout</button>
              </div>
            </div>
            <div className="hideDetailes show">
              <p>
                Your Cart is Empty
              </p>
            </div>
          </div>
        </div>
        <img src={avatar} alt="" className='avatar' />
      </div>

  </div>



</nav>

    // <Navbar className='justify-content-between  border-bottom py-0  nav' bg="light" expand="lg">
    //   <container className="d-flex align-items-center flex-row-reverse">
    //     <Navbar.Brand href="#home" className='fw-bold'>Sneaker</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />

    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home" className='links active'>Collections</Nav.Link>
    //         <Nav.Link href="#link" className='links'>Men</Nav.Link>
    //         <Nav.Link href="#link" className='links'>Women</Nav.Link>
    //         <Nav.Link href="#link" className='links'>About</Nav.Link>
    //         <Nav.Link href="#link" className='links'>Contact</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </container>

    //   <div className='icons d-flex align-items-center'>
    //     <div className='cartDetailes'>
    //       <img src={cart} alt="" className='cart' onClick={showCart} /><span className='saleCount'> {props.numProduct} </span>
    //       <div className='theDetailes hidden' >
    //         <p className='cartLable'>Cart</p>
    //         <div className='showDetailes hidden'>
    //           <div className='detaile'>
    //             <img src={fImgs} alt="" className='productImg' />
    //             <div className='cartDetls'>Fall Limited Edition Sneakers <br /> <span className='numDetls'>$125.00 x {props.numProduct} <span className='numTotal'>${125 * props.numProduct}</span></span></div>
    //             <img src={deleteCart} alt="" className='delete' onClick={removeProduct} />
    //           </div>
    //           <div>
    //             <button className='checkout'>Checkout</button>
    //           </div>
    //         </div>
    //         <div className="hideDetailes show">
    //           <p>
    //             Your Cart is Empty
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <img src={avatar} alt="" className='avatar' />
    //   </div>

    // </Navbar>

  )
}

export default NavBar;