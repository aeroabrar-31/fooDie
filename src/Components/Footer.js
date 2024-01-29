import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import Typewriter from "typewriter-effect";

export const Footer = () => {
  // var tt = new Typewriter(".auto-type", {
  //   strings: ["Hello", "World"],
  //   autoStart: true,
  // });
  return (
    <div className="footer">
      <div className="">
        <div className="icons">
          <Instagram fontSize="large"></Instagram>
          <YouTube fontSize="large"></YouTube>
          <Twitter fontSize="large"></Twitter>
          <Facebook fontSize="large"></Facebook>
        </div>
        <div>
          <li className="list-footer">
            <ul>
              <span>We Deliver to </span>
            </ul>
            <ul>
              <h3>
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
              </h3>
            </ul>
          </li>
        </div>
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
