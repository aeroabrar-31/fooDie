import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  Card,
  CardContent,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SendRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

import Slide from "@mui/material/Slide";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const Contact = () => {
  const form = useRef();

  const [captcha, setCaptcha] = useState(false);

  const [msg, setMsg] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [dob, setDOb] = useState("");
  const [sub, setsub] = useState("");
  const [ckedit, setckedit] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = () => {
    console.log("change d recaptacha");
    setCaptcha(true);
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form.current);

    // emailjs.send()
    setLoading(true);

    setTimeout(() => {
      emailjs
        .sendForm(
          "service_ke1qcwd",
          "template_i6jvcca",
          form.current,
          "6-tgNj4yOMmQVlcnE"
        )
        .then(
          (result) => {
            success(TransitionLeft);
            console.log(result);
          },
          (error) => {
            alert(error.text);
          }
        );
      setLoading(false);
    }, 3000);
  }

  return (
    <div className="contact-form">
      <Card sx={{ boxShadow: 6 }}>
        <CardContent>
          <h2 className="orange-text">Contact Us</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              label="Name"
              name="user_name"
              placeholder="ex: Abrar"
              required
              sx={{
                margin: "10px",
                width: "60%",
              }}
            ></TextField>{" "}
            <br></br>
            <TextField
              variant="outlined"
              label="Email"
              name="user_email"
              className="text-field"
              type="email"
              required
              sx={{
                margin: "10px",
                width: "60%",
              }}
            ></TextField>
            <br></br>
            <TextField
              variant="outlined"
              label="Subject"
              name="subject"
              className="text-field"
              required
              sx={{
                margin: "10px",
                width: "60%",
              }}
            ></TextField>
            <br></br>
            <TextField
              variant="outlined"
              label="Message"
              name="message"
              className="text-field"
              required
              multiline
              rows={5}
              sx={{
                margin: "10px",
                width: "60%",
              }}
            ></TextField>
            <br></br>
            <LoadingButton
              loading={loading}
              loadingPosition="end"
              endIcon={<SendRounded />}
              variant="contained"
              type="submit"
            >
              Send
            </LoadingButton>
            <br></br>
          </form>

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
              severity={"success"}
              sx={{ marginTop: 7 }}
              onClose={handleClose}
            >
              Successfully sent !
            </Alert>
          </Snackbar>
        </CardContent>
      </Card>
    </div>
  );
};
export default Contact;

{
  /* <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DemoContainer components={["DatePicker"]}>
    <DatePicker
      sx={{
        margin: "auto",
        width: "55%",
        textAlign: "center",
        justifyContent: "center",
      }}
      label="Basic date picker"
      name="dob"
    />
  </DemoContainer>
</LocalizationProvider>; */
}

{
  /* <div
  style={{
    width: "70%",
    margin: "auto",
  }}
>
  <CKEditor editor={ClassicEditor} data="" name="ckeditor_message" />
  <br></br>
  <ReCAPTCHA
            style={{ textAlign: "center", margin: "auto", width: "50%" }}
            sitekey="6LeG2E0pAAAAAAcKXdARE9ukKau2VX3e-7CJy6Rk"
            onChange={onChange}
          />
</div>; */
}
