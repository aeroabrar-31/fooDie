import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Snackbar,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { useDispatch, useSelector } from "react-redux";
import { setLoggedinTrue, setUrl } from "../utils/cartSlice";

import * as Yup from "yup";
import { useEffect, useState } from "react";
import useRestroUrl from "../utils/useRestroUrl";
import {
  LoginOutlined,
  PersonAddAltOutlined,
  RestartAlt,
  SaveAsOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { LoadingButton } from "@mui/lab";
import SignUp from "./SignUp";

import Slide from "@mui/material/Slide";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [recaptcha, setRecaptcha] = useState(false);

  function onChangeCaptcha(value) {
    console.log(value);
    setRecaptcha(true);
  }

  const handleSignUpSubmit = () => {
    setIsLoading(true);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [snackOpen, setSnackOpen] = useState("close");
  const [transition, setTransition] = useState(undefined);

  function success(trans) {
    console.log("====================================");
    console.log("in the success func trans");
    console.log("====================================");
    setSnackOpen("open");
    setTransition(() => trans);
    console.log(new Date());

    console.log(new Date());

    return true;
  }

  const handleClose = (event, reason) => {
    console.log(reason);
    if (reason === "clickway") {
      return;
    }
    setSnackOpen("close");
  };

  const [url, tttt] = useState("");

  const dispatch = useDispatch();

  function got(data) {
    console.log("got success");
    console.log(data);
    const temp =
      "https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D" +
      data.coords.latitude +
      "%26lng%3D" +
      data.coords.longitude +
      "%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING";
    console.log(data.coords.latitude + "  " + data.coords.longitude);

    localStorage.setItem("restro_url", temp);
    localStorage.setItem("lat", data.coords.latitude);
    localStorage.setItem("long", data.coords.longitude);
    // getData();
  }

  function fail() {
    console.log("fail");
  }

  async function getlocation() {
    navigator.geolocation.getCurrentPosition(got, fail);
  }

  function get() {
    getlocation();
  }

  useEffect(() => {
    get();
  }, []);

  let navigate = useNavigate();

  const defaultvalues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    setIsLoading(true);
    // console.log(values);

    if (
      values.email === "test@gmail.com" &&
      values.password === "password123" &&
      recaptcha
    ) {
      localStorage.setItem("login", true);
      console.log("====================================");
      console.log("success");
      console.log("====================================");

      setTimeout(() => {
        setIsLoading(false);

        navigate("/home");
      }, 3000);
    } else {
      success(TransitionLeft);
      setIsLoading(false);
    }
    // console.log("Form submitted");
    // console.log(values);
    localStorage.setItem("isLoggedin", true);
  };

  const validate = Yup.object().shape({
    email: Yup.string("Email..........")
      .email("Invalid email")
      .required("Email can't be empty bro"),

    password: Yup.string()
      .min(8, "Min length - 8")
      .required("Password is not there"),
  });

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="form-div">
      <Box sx={{ width: "50%", marginLeft: "25%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab
              label="Login"
              sx={{ fontSize: "20px" }}
              {...a11yProps(0)}
              // icon={<LoginOutlined />}
              // iconPosition="bottom"
            />
            <Tab
              label="Sign Up"
              {...a11yProps(1)}
              sx={{ fontSize: "20px" }}
              // icon={<PersonAddAltOutlined />}
              // iconPosition="bottom"
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="form-container-login">
            <Card sx={{ boxShadow: 6 }}>
              <CardContent>
                <Formik
                  initialValues={defaultvalues}
                  validationSchema={validate}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <Field
                      as={TextField}
                      label="Email"
                      name="email"
                      sx={{ width: "290px" }}
                      placeholder="test@gmail.com"
                      helperText={<ErrorMessage name="email" />}
                      FormHelperTextProps={{
                        sx: {
                          color: "red",
                        },
                      }}
                    ></Field>
                    <br />
                    <br />
                    <Field
                      as={TextField}
                      label="Password"
                      name="password"
                      type={!showPassword ? "password" : "text"}
                      sx={{ width: "290px" }}
                      placeholder="password123"
                      InputProps={{
                        // <-- This is where the toggle button is added.
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {!showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      helperText={<ErrorMessage name="password" />}
                      FormHelperTextProps={{
                        sx: {
                          color: "red",
                        },
                      }}
                    ></Field>
                    <br />
                    <br />
                    <ReCAPTCHA
                      style={{
                        textAlign: "center",
                        marginLeft: "50px",
                        width: "20%",
                      }}
                      sitekey="6LeG2E0pAAAAAAcKXdARE9ukKau2VX3e-7CJy6Rk"
                      onChange={onChangeCaptcha}
                    />
                    <br />
                    {/* <br /> */}

                    <LoadingButton
                      loading={isLoading}
                      loadingPosition="start"
                      startIcon={<LoginOutlined />}
                      variant="contained"
                      type="submit"
                      color="primary"
                    >
                      Login
                    </LoadingButton>
                    <Button
                      type="reset"
                      startIcon={<RestartAlt />}
                      sx={{ marginLeft: "8px" }}
                      variant="contained"
                      color="warning"
                    >
                      Reset
                    </Button>
                  </Form>
                </Formik>
              </CardContent>
            </Card>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SignUp />
        </CustomTabPanel>
      </Box>

      <Snackbar
        open={snackOpen === "open"}
        message="Success !"
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={transition}
        autoHideDuration={2000}
      >
        <Alert
          variant="filled"
          severity={"error"}
          sx={{ marginTop: 7 }}
          onClose={handleClose}
        >
          Invalid credentials !
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;

// <form onSubmit={() => {}}>
//   <TextField
//     id="outlined-basic"
//     name="email"
//     label="email"
//     type="email"
//     variant="outlined"
//     key={102}
//   />
//   <br />
//   <br />
//   <TextField
//     id="outlined-basic"
//     name="password"
//     label="password"
//     variant="outlined"
//     type="password"
//     autoComplete="current-password"
//     key={101}
//   />
//   <br />
//   <br />
//   <Tooltip title="submit">
//     <Button type="submit" variant="contained">
//       Submit
//     </Button>
//   </Tooltip>
// </form>;
