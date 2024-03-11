import React, { useEffect } from "react";

export default function LoggedIn() {
  useEffect(() => {
    alert("logged in");
    return () => {
      alert("you have successfully logged out");
    };
  }, []);
  return (
    <div>
      <h3> This is LOG IN page</h3>
    </div>
  );
}
