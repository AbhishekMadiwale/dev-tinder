import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Body = () => {
  const fetchUser = async () => {
    // watch episode 3rd from the begining to implement the
    // API call to keep user logged in on page refresh
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
