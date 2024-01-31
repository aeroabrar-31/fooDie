import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import {
  Button,
  Divider,
  Snackbar,
  Paper,
  TextField,
  Grid,
} from "@mui/material";
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

  if (cartItems.length == 0)
    return (
      <div className="empty-cart">
        <img src="https://www.adasglobal.com/img/empty-cart.png"></img>
      </div>
    );

  console.log(cartItems);
  return (
    <div className="cart-height-div">
      <Grid container columnSpacing={2} direction="row">
        <Grid xs={9} item sx={{ marginBottom: "5px", marginLeft: "6px" }}>
          <Paper elevation={8}>
            <div className="cart-div">
              <h1>Cart Items</h1>

              {cartItems.map((item, index) => {
                return <CartItem key={item.id} props={item} />;
              })}

              <Button
                variant="contained"
                color="warning"
                sx={{ textTransform: "none", padding: "7px", margin: "5px" }}
                onClick={handleClearCart}
              >
                <HighlightOff fontSize="small" sx={{ marginRight: "2px" }} />
                clear cart
              </Button>
            </div>
          </Paper>
        </Grid>

        <Grid xs item sx={{ marginTop: "20px" }}>
          <Paper
            elevation={4}
            sx={{
              width: "fit-content",
              margin: "5px",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div className="checkout">
              <h3>Enter your address</h3>
              <TextField
                variant="outlined"
                multiline
                rows={2}
                label="Address"
              ></TextField>{" "}
            </div>
          </Paper>

          <Paper
            elevation={6}
            sx={{
              width: "fit-content",
              margin: "5px",
              justifyContent: "center",
              textAlign: "center",
              padding: "0px 15px",
            }}
          >
            <div className="checkout">
              <h3>Bill Details</h3>
              <Divider></Divider>
              <h4>
                Items total : ₹{" "}
                <span className="amount"> {itemsTotal / 100}</span>
              </h4>
              <h4>
                Platform fee : ₹ <span className="amount"> 5.54</span>
              </h4>
              <h4>
                Delivery charge : ₹ <span className="amount"> 17.00</span>
              </h4>
              <Divider></Divider>
              <h3>
                Grant Total : ₹
                <span className="amount"> {itemsTotal / 100 + 5 + 17}</span>
              </h3>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "none" }}
              >
                checkout
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;

{
  /* <div className="cart-page">
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

      <div className="cart-address-div">
        <Paper elevation={4}>
          <TextField variant="outlined" label="Address"></TextField>{" "}
        </Paper>
      </div>

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
    </div> */
}
