import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
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

  const handleSignUpSubmit = () => {
    setIsLoading(true);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
    if (
      values.email === "test@gmail.com" &&
      values.password === "password123"
    ) {
      localStorage.setItem("login", true);
      navigate("/home");
    } else {
      alert("Invalid Credentials !!");
    }
    console.log("Form submitted");
    console.log(values);
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
                      type="password"
                      placeholder="password123"
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
                        marginLeft: "5%",
                        width: "30%",
                      }}
                      sitekey="6LeG2E0pAAAAAAcKXdARE9ukKau2VX3e-7CJy6Rk"
                      // onChange={onChange}
                    />
                    <br />
                    {/* <br /> */}

                    <LoadingButton
                      loading={isLoading}
                      loadingPosition="start"
                      startIcon={<SaveAsOutlined />}
                      onClick={handleSignUpSubmit}
                      variant="contained"
                      type="submit"
                    >
                      Submit
                    </LoadingButton>
                  </Form>
                </Formik>
              </CardContent>
            </Card>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="form-container-signup">
            <Card sx={{ boxShadow: 6 }}>
              <CardContent>
                <TextField label="Name" variant="outlined"></TextField>
                <TextField label="Email" variant="outlined"></TextField>

                <TextField label="Phone No" variant="outlined"></TextField>
                <TextField label="Date Of Birth" variant="outlined"></TextField>
                <TextField label="Password" variant="outlined"></TextField>
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                ></TextField>
                <LoadingButton
                  loading={isLoading}
                  loadingPosition="start"
                  startIcon={<SaveAsOutlined />}
                  onClick={handleSignUpSubmit}
                  variant="contained"
                >
                  Submit
                </LoadingButton>
              </CardContent>
            </Card>
          </div>
        </CustomTabPanel>
      </Box>
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
