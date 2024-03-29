import { Alert, Button, ButtonGroup, Tooltip } from "@mui/material";
import { imgURL } from "../Config/constants";
import { IMG_COMING_SOON } from "../Config/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { AddIcCallOutlined, RemoveCircleOutline } from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import { Snackbar } from "@mui/material";
// import {Alert}

// import us

import Slide from "@mui/material/Slide";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}
const MenuCard = (props) => {
  // console.log(props);

  let menuItem = { ...props.props };
  menuItem.quantity = 0;
  let [a, setA] = useState(0);

  let { name, imageId, price, defaultPrice, quantity } = { ...menuItem };

  // console.log(name + "  " + price + "  " + imageId);

  const dispatch = useDispatch();
  let [openAdd, setOpenAdd] = useState("false");
  let [itemName, setItemName] = useState("");
  const [transition, setTransition] = useState(undefined);

  const [isAdd, setIsAdd] = useState(false);

  const handleAdd = (trans) => () => {
    setA(a + 1);
    dispatch(addItem(menuItem));
    console.log("Added to cart");
    setOpenAdd("true");
    setItemName("Added to Cart !");
    setTransition(() => trans);
    setIsAdd(true);
  };

  const handleClose = (event, reason) => {
    console.log(reason);
    if (reason === "clickway") {
      return;
    }
    setOpenAdd("false");
  };

  const handleRemove = () => {
    dispatch(removeItem(menuItem));
    console.log("Removed from cart");
    setOpenAdd("true");
    setItemName("Removed from cart");
    setIsAdd(false);
  };

  if (imageId === undefined) imageId = IMG_COMING_SOON;
  else imageId = imgURL + imageId;

  if (price === undefined) price = defaultPrice;

  // return <h1>Menu</h1>;

  return (
    <div className="">
      <div className="menu-card">
        <img src={imageId}></img>
        <span>
          <h2> {name}</h2>
          <h4>price - &#8377; {price / 100 - (price % 100)}</h4>
          <ButtonGroup variant="outlined">
            <Tooltip title="remove from cart" placement="left">
              <Button color="warning" onClick={handleRemove}>
                <RemoveCircleOutline />
              </Button>
            </Tooltip>
            {/* <h4>{quantity}</h4> */}
            <Button>{a}</Button>
            <Tooltip title="Add to cart" placement="right">
              <Button color="success" onClick={handleAdd(TransitionLeft)}>
                <AddCircleOutlineIcon />
              </Button>
            </Tooltip>
          </ButtonGroup>
        </span>
      </div>
      <Snackbar
        open={openAdd === "true"}
        message={itemName}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={transition}
        autoHideDuration={2000}
      >
        <Alert
          variant="filled"
          severity={isAdd ? "success" : "error"}
          sx={{ marginTop: 7 }}
          onClose={handleClose}
        >
          {itemName}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MenuCard;
