import React from "react";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const buttonArray = [
    {
      name: "Best Seller",
      id: 1,
    },
    {
      name: "Keep Stylish",
      id: 2,
    },
    {
      name: "Special Discount",
      id: 3,
    },
    {
      name: "Official Store",
      id: 4,
    },
    {
      name: "Coveted Product",
      id: 5,
    },
  ];

  const productsArr = [
    {
      imgsrc:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1898&q=80",
      name: "Nike Waffle Debut",
      type: "Shoes",
      rating: "4.2",
      price: "699",
      id: "ehjrgqrga",
    },
    {
      imgsrc:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      name: "Nike Venture Runner",
      type: "Shoes",
      rating: "4.5",
      price: "896",
      id: "arghargahg",
    },
    {
      imgsrc:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      name: "Black Panther: Wakanda Forever",
      type: "T-shirts",
      rating: "3.7",
      price: "299",
      id: "arhguyeargyufg",
    },
    {
      imgsrc:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1682160088_3882011.jpg?format=webp&w=480&dpr=1.3",
      name: "Star Wars: The Mandal",
      type: "T-shirts",
      rating: "3.9",
      price: "999",
      id: "agboaughuagh",
    },
    {
      imgsrc:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1693836203_8667066.jpg?format=webp&w=480&dpr=1.3",
      name: "Pink Panther: Whatevs",
      type: "T-shirts",
      rating: "4.6",
      price: " 1499",
      id: "ahguoaghtg",
    },
    {
      imgsrc:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80",
      name: "SAINT LAURENT",
      type: "Bags",
      rating: "4.8",
      price: "2999",
      id: "ahg0ouayr",
    },
  ];
  const dispatch = useDispatch();
  const addtocart = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({
      type: "calculatePrice",
    });
    toast.success("Added To Cart");
  };
  return (
    <>
      <div className="homeComp">
        <div className="btnsContainer">
          {buttonArray.map((i) => (
            <button key={i.id} className="topBtns">
              {i.name}
            </button>
          ))}
        </div>
      </div>
      <div className="products">
        {productsArr.map((i) => (
          <ProductCard
            name={i.name}
            img={i.imgsrc}
            rating={i.rating}
            price={i.price}
            type={i.type}
            id={i.id}
            key={i.id}
            handler={addtocart}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
