import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Badge, Dialog, DialogActions, DialogTitle } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import {
  AccountCircleOutlined,
  CardTravelRounded,
  LoginOutlined,
  LogoutOutlined,
  Person2Outlined,
  ShoppingCartTwoTone,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

// import Typography from "@mui/material";

export const Title = () => {
  return (
    <div>
      <img
        className="img"
        src="https://vegplatter.in/files/public/images/partner/store/5904658483830385985.jpg"
      />
    </div>
  );
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedin") === true) {
      console.log("setting loggednin");
      setIsLoggedIn(true);
    }

    console.log(
      isLoggedIn + "  isLoggedin " + localStorage.getItem("isLoggedin")
    );
  }, [isLoggedIn]);

  const cartItems = useSelector((store) => store.cart.items);

  const userInfo = useContext(UserContext);

  let navigate = useNavigate();

  let isOnline = useOnline();

  const [openMenu, setOpenMenu] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    setDialogOpen(false);
    navigate("/");
    setIsLoggedIn(false);
    handleClose();
    localStorage.removeItem("login");
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenu = (event) => {
    setOpenMenu(true);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleProfile = () => {
    navigate("/profile");
    handleClose();
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    handleClose();
  };

  return (
    <div>
      <AppBar position="sticky" color="warning">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            letterSpacing={3}
            sx={{ flexGrow: 1 }}
          >
            fooDie
          </Typography>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit" sx={{ margin: 2 }}>
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit" sx={{ margin: 2 }}>
              About
            </Button>
          </Link>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Button color="inherit" sx={{ margin: 2 }}>
              Contact
            </Button>
          </Link>
          {localStorage.getItem("login") && (
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                marginLeft: 10,
                marginRight: 20,
                color: "white",
              }}
            >
              <Badge badgeContent={cartItems.length} color="success" showZero>
                <ShoppingCartTwoTone fontSize="large" />
              </Badge>
            </Link>
          )}

          {localStorage.getItem("login") && (
            <IconButton onClick={handleMenu}>
              <Avatar
                src="https://assets.leetcode.com/users/avatars/avatar_1672670751.png"
                sx={{ width: 40, height: 40, margin: 1 }}
                aria-controls={openMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
              ></Avatar>
            </IconButton>
          )}

          <Menu
            id="basic-menu"
            open={openMenu}
            // onClose={handleCloseMenu}
            anchorEl={anchorEl}
            onClose={handleClose}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleProfile}>
              <AccountCircleOutlined sx={{ marginRight: 1 }} />
              Profile
            </MenuItem>
            <MenuItem onClick={openDialog}>
              <LogoutOutlined sx={{ marginRight: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div>
        <Dialog open={dialogOpen}>
          <DialogTitle>Do you really want to Logout ?</DialogTitle>
          <DialogActions>
            <Button
              sx={{ textTransform: "none" }}
              color="primary"
              variant="contained"
              onClick={closeDialog}
            >
              Cancel
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              color="error"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>

    // <div className="header">
    //   <Title />

    //   <div className="nav-list">
    //     <ul>
    //       <li>
    //         <Link to="/" style={{ textDecoration: "none" }}>
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/about" style={{ textDecoration: "none" }}>
    //           About Us
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/contact" style={{ textDecoration: "none" }}>
    //           Contact
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/instamart" style={{ textDecoration: "none" }}>
    //           Instamart
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/cart" style={{ textDecoration: "none" }}>
    //           <Badge badgeContent={cartItems.length} color="success" showZero>
    //             <ShoppingCartTwoTone fontSize="large" />
    //           </Badge>
    //         </Link>
    //       </li>
    //       {/* <li>{userInfo.user.name}</li> */}
    //       <li>{isOnline ? " 🟢" : " 🟠"}</li>
    //     </ul>
    //   </div>
    //   <Button
    //     onClick={() => navigate("/login")}
    //     variant="contained"
    //     color="primary"
    //   >
    //     Login
    //   </Button>
    // </div>
  );
};

// export default Header;

// (
//               <div className="blink-green"></div>
//             ) : (
//               <div className="blink-red"></div>
//             )
