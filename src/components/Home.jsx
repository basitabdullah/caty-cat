import React from "react";

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
      id: 1,
    },
  ];
  return (
    <>
      <div className="homeComp">
        <h1>Todays For You!</h1>
        {
          buttonArray.map((i)=>(
            <button className="topBtns">{i.name}</button>
          ))
        }
      </div>
    </>
  );
};

export default Home;
