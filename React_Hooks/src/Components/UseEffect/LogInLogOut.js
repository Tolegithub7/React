import React, { useState } from "react";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function LogInLogOut() {
  const [show, setShow] = useState(false);
  const status = () => {
    setShow(!show);
  };
  return (
    <div>
      <div>{show ? <LoggedIn /> : <LoggedOut />}</div>
      <button type="" onClick={status}>
        {show ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
