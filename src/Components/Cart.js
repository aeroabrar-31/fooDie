import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { Button, Snackbar } from "@mui/material";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  let [total, setTotal] = useState(0);

  for (let index = 0; index < cartItems.length; index++) {
    const element = cartItems[index];

    total += element.price;
  }

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);
  return (
    <div>
      <h1>Cart Items</h1> <h2>Total Amount = {total / 100}</h2>
      <Button variant="contained" color="warning" onClick={handleClearCart}>
        Clear Cart
      </Button>
      {cartItems.map((item, index) => {
        return <MenuCard key={item.id} props={item}></MenuCard>;
      })}
    </div>
  );
};

export default Cart;
