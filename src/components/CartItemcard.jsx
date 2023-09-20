import React from "react";

const CartItemcard = ({name,img,price,qty}) => {
  return (
    <div className="cartConatiner">
      <div className="imageConatiner">
        <img src={img} alt="" />
      </div>

      <h1>{name}</h1>
      <p>${price}</p>
      <div className="btnDiv">
        <button>-</button>
        <p>{qty}</p>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItemcard;
