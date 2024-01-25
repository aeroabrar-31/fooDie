import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { useDispatch, useSelector } from "react-redux";
import { setUrl } from "../utils/cartSlice";

import * as Yup from "yup";
import { useEffect, useState } from "react";
import useRestroUrl from "../utils/useRestroUrl";
import { Visibility } from "@mui/icons-material";

const Login = () => {
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

  return (
    <div className="form-div">
      <div className="form-container">
        <h1>Login Form</h1>

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

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </div>
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
