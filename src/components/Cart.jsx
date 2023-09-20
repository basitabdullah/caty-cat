import React from "react";
import CartItemcard from "./CartItemcard";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems,subtotal,shipping,tax,total} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });

    dispatch({
      type: "calculatePrice",
    });
  };


  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({
      type: "calculatePrice",
    });
  };

  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });

    dispatch({
      type: "calculatePrice",
    });
  };


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
              id={i.id}
              qty={i.quantity}
              increment={increment}
              decrement={decrement}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1 className="noItemsIn">no items here...</h1>
        )}
      </div>

      <aside>
        <h2>Subtotal : ${subtotal}</h2>
        <h2>Shipping : ${shipping}</h2>
        <h2>Tax : ${tax}</h2>
        <h2>Total : ${total}</h2>
      </aside>
    </main>
  );
};

export default Cart;
