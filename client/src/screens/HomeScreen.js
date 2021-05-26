import React from "react";
import Info from "../components/Info";
import Login from "../components/Login";

const HomeScreen = (props) => {
  return (
    <>
      <Login {...props} />
      <Info />
    </>
  );
};

export default HomeScreen;
