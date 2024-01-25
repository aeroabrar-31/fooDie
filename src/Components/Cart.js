import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { Button, Divider, Snackbar, Paper } from "@mui/material";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { HighlightOff } from "@mui/icons-material";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  let [itemsTotal, setItemsTotal] = useState(0);

  for (let index = 0; index < cartItems.length; index++) {
    const element = cartItems[index];

    itemsTotal += element.price;
  }

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length == 0) return <h1>Oops! Cart is Empty </h1>;

  console.log(cartItems);
  return (
    <div className="cart-page">
      <div className="cart-div">
        <h1>Cart Items</h1>

        {cartItems.map((item, index) => {
          return <CartItem key={item.id} props={item} />;
        })}
      </div>
      <Button
        variant="contained"
        color="warning"
        sx={{ textTransform: "none", padding: "7px", margin: "5px" }}
        onClick={handleClearCart}
      >
        <HighlightOff fontSize="small" sx={{ marginRight: "2px" }} />
        clear cart
      </Button>

      <Paper
        elevation={6}
        sx={{
          width: "fit-content",
          margin: "5px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="checkout">
          <h3>Bill Details</h3>
          <Divider></Divider>
          <h4>
            Items total : ₹ <span className="amount"> {itemsTotal / 100}</span>
          </h4>
          <h4>
            Platform fee : ₹ <span className="amount"> 5.54</span>
          </h4>
          <h4>
            Delivery charge : ₹ <span className="amount"> 17.00</span>
          </h4>
          <Divider></Divider>
          <h4>
            Grant Total : ₹
            <span className="amount"> {itemsTotal / 100 + 5 + 17}</span>
          </h4>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            checkout
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Cart;
