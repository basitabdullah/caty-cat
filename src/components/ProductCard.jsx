import React from "react";
import {BsStarFill} from "react-icons/bs"
import {CiShoppingCart} from "react-icons/ci"
const ProductCard = ({name,img,rating,price,type,handler}) => {
  return (
    <div className="card">
      <div className="ImageContainer">
        <img className="imagephoto" src={img} alt="" />
      </div>

      <div className="productCard">
        <h1>{name}</h1>
        <p>{type}</p>
        <div className="rating"><BsStarFill color={"gold"}/>{rating}</div>
        <div className="PriceDiv">
          <p className="price">${price}</p> <p className="price2">{price}</p>
        </div>
          <button className="cartbtn" onClick={()=>handler({name,img,rating,price,type,quantity:1})}> <CiShoppingCart color="blue" fontSize={18}/>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
