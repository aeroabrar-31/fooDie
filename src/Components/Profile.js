import { useState } from "react";

const Profile = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Profile Functional component</h1>
      <h4>Count : {count}</h4>
      <button onClick={() => setCount(count + 1)}>function ++</button>
    </div>
  );
};
export default Profile;
