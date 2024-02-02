import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { IconButton, Link } from "@mui/material";
import Typewriter from "typewriter-effect";

import { styled } from "@mui/system";

const CustomIconButton = styled(IconButton)({
  "&:hover": {
    color: "red", // Change this to your desired hover color
  },
});

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-up">
        <h2>Follow us on</h2>
        <div className="icons">
          <Link href="https://instagram.com/aeroabrar_31/" target="_blank">
            <Instagram
              fontSize="large"
              className="mui-icons instagram"
            ></Instagram>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aeroabrar-31-a20a27224"
            target="_blank"
          >
            <LinkedIn
              fontSize="large"
              className="mui-icons linkedin"
            ></LinkedIn>
          </Link>
          <Link href="https://www.youtube.com/@aeroabrar_31" target="_blank">
            <YouTube fontSize="large" className="mui-icons youtube"></YouTube>
          </Link>
          <Link href="https://twitter.com/ShaikAbrarulha4" target="_blank">
            <Twitter fontSize="large" className="mui-icons twitter"></Twitter>
          </Link>
        </div>
      </div>

      <div className="footer-middle">
        <h2>
          <span>We Deliver to &nbsp;</span>
        </h2>
        <h2 className="orange-text">
          <Typewriter
            options={{
              strings: [
                "Kurnool !",
                "Hyderabad !",
                "Bengaluru !",
                "Delhi !",
                "Chennai !",
                "Mumbai !",
                "Kolkata !",
                "Jaipur !",
                "Lucknow !",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
      <div className="copyright">
        <h4>
          Copyright © 2024 <span className="orange-text">fooDie Pvt ltd, </span>
          All rights reserved.
        </h4>
      </div>
    </div>
  );
};

// {
//  <div className="icons">
//         <Instagram sx={{ color: "orange" }}></Instagram>
//         <YouTube sx={{ color: "orange" }}></YouTube>
//         <Twitter sx={{ color: "orange" }}></Twitter>
//         <Facebook sx={{ color: "orange" }}></Facebook>
//       </div>
// }
{
  //    <Typewriter
  //   options={{
  //     strings: [
  //       "Kurnool !",
  //       "Hyderabad !",
  //       "Bengaluru !",
  //       "Delhi !",
  //       "Chennai !",
  //       "Mumbai !",
  //       "Tiruvanantapuram !",
  //       "Jaipur !",
  //     ],
  //     autoStart: true,
  //     loop: true,
  //   }}
  // />;
}
