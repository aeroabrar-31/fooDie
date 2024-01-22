import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy",
    email: "email@gmail.com",
  },
});

export default UserContext;
