import React from "react";
import Social from "./Social";
import Wrapper from "../assets/wrappers/Footer";
import Pages from "./pages";

const Footer = () => {
  return (
    <Wrapper className="section footer">
      <Pages />
      <Social />
      <p className="copyright">
        copyright &copy; Bukhara Restaurant
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </Wrapper>
  );
};

export default Footer;
