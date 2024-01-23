import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { TextField, Button } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Contact = () => {
  const form = useRef();

  const [captcha, setCaptcha] = useState(false);

  const [msg, setMsg] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [dob, setDOb] = useState("");
  const [sub, setsub] = useState("");
  const [ckedit, setckedit] = useState("");

  const onChange = () => {
    console.log("change d recaptacha");
    setCaptcha(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form.current);

    // emailjs.send()
    emailjs
      .sendForm(
        "service_ke1qcwd",
        "template_i6jvcca",
        form.current,
        "6-tgNj4yOMmQVlcnE"
      )
      .then(
        (result) => {
          alert(result.text);
          console.log("message sent");
        },
        (error) => {
          alert(error.text);
        }
      );
  }

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
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
        <Button type="submit" variant="contained">
          Send
        </Button>
        <br></br>
        <br></br>
      </form>
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
