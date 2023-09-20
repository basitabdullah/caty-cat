import React from "react";
import CartItemcard from "./CartItemcard";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <main>
      <div className="cartItemsContainer">
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItemcard
              name={i.name}
              img={i.img}
              price={i.price}
              key={i.id}
              qty={i.quantity}
            />
          ))
        ) : (
          <h1>no items here</h1>
        )}
      </div>

      <aside>
        <h2>Subtotal : ${2000}</h2>
        <h2>Shipping : ${2000}</h2>
        <h2>Tax : ${2000}</h2>
        <h2>Total : ${2000}</h2>
      </aside>
    </main>
  );
};

export default Cart;
