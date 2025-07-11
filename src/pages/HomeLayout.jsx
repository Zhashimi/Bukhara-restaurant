import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Wrapper from "../assets/wrappers/HomeLayout";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Wrapper>  <Outlet /></Wrapper>
    
      <Footer />
    </>
  );
};

export default HomeLayout;
