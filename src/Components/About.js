import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div className="about-div">
      <h1>About Us Page</h1>
      <h3>Welcome to Foodiezz</h3>

      <Outlet />
      <ProfileClass name="Abrar" />
    </div>
  );
};

export default About;
