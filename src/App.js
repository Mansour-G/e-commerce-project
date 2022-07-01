import React, { useEffect, useState } from "react";
import './App.css';
import NavBar from './component/Nav';
import Gallary from './component/Gallary/index';
import Detailes from './component/Detailes';
import Lightbox from "./component/Gallary/lightbox";

const App = () => {

  const [add, setAdd] = useState(false);
  const [numProduct, setNumProduct] = useState(0);

  const AddBtn = () => {
    const details = document.querySelector(".nav .icons .cartDetailes .showDetailes");
    const emptyMsg = document.querySelector(".nav .icons .cartDetailes .hideDetailes")
    const emptyMsgP = document.querySelector(".nav .icons .cartDetailes .hideDetailes p")

    if (numProduct <= 0) {
      return 0;
    } else {
      add ? setAdd(false) : setAdd(true)
      document.querySelector(".nav .icons .saleCount").classList.add("show");

      details.classList.add("show");
      details.classList.remove("hidden");

      emptyMsg.classList.add("hidden");
      emptyMsg.classList.remove("show");
      emptyMsgP.classList.add("hidden");
      emptyMsgP.classList.remove("show");
    }
  }

  useEffect(() => {
    const details = document.querySelector(".nav .icons .cartDetailes .showDetailes");
    const emptyMsg = document.querySelector(".nav .icons .cartDetailes .hideDetailes")
    const emptyMsgP = document.querySelector(".nav .icons .cartDetailes .hideDetailes p")

    if (numProduct <= 0) {
      details.classList.add("hidden");
      details.classList.remove("show");

      emptyMsg.classList.add("show");
      emptyMsg.classList.remove("hidden");
      emptyMsgP.classList.add("show");
      emptyMsgP.classList.remove("hidden");
    }
  }, [numProduct]);

  const increaseProduct = () => {
    setNumProduct(numProduct + 1);
  }

  const decreaseProduct = () => {
    if (numProduct === 0) {
      return 0;
    } else {
      setNumProduct(numProduct - 1);
    }
  }

  return (

    <div id="ecommerce" className="ecommerce">
      <Lightbox />

      <div className="container-lg">
        <NavBar
          numProduct={numProduct}
          setNumProduct={setNumProduct}
        />
      </div>
      <div className="main-layout">
        <div className='layout'>
          <Gallary />
          <Detailes
            increaseProduct={increaseProduct}
            decreaseProduct={decreaseProduct}
            numProduct={numProduct}
            setNumProduct={setNumProduct}
            AddBtn={AddBtn}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
