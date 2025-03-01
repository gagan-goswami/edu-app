import React from "react";
import Headers from "./Header";
import Footers from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Headers />
      <div>{children}</div>
      <Footers />
    </>
  );
}

export default Layout;
