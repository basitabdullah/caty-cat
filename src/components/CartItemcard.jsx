import React from "react";
import { RiDeleteBinLine } from 'react-icons/ri';
const CartItemcard = ({name,img,price,qty,id,decrement,increment,deleteHandler  }) => {
  return (
    <div className="cartConatiner">
      <div className="imageConatiner">
        <img src={img} alt="dwdw" />
      </div>

      <h1>{name}</h1>
      <p>${price}</p>
      <div className="btnDiv">
        <button onClick={()=>decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={()=>increment(id)}>+</button>
        <RiDeleteBinLine onClick={()=>deleteHandler(id)}/>
      </div>
    </div>
  );
};

export default CartItemcard;
