import React from "react";

function Home(Props) {
 // console.log("home", );
  return (
    <div>
      <h1>Home</h1>
      <div className="cart-wrapper">
        <div className="add-to-cart img">
        <span>{Props.data}</span>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper button">
          <button onClick={() => Props.addToCartHandler({ price: 1000,name : 'I phone 14' })}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
