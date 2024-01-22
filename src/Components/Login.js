import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import * as Yup from "yup";

const Login = () => {
  let navigate = useNavigate();

  const defaultvalues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    if (
      values.email === "shaikabrarulhaq777@gmail.com" &&
      values.password === "Abrar@31"
    ) {
      navigate("/");
    } else {
      alert("Invalid Credentials !!");
    }
    console.log("Form submitted");
    console.log(values);
  };

  const validate = Yup.object().shape({
    email: Yup.string("Email..........")
      .email("Invalid email")
      .required("Email can;t be empty bro"),

    password: Yup.string()
      .min(8, "Min length - 8")
      .required("Password is not there"),
  });

  return (
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
