import React from "react";
import hero from "../assets/images/hero.jpg";

import { FcPhone } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";
import Wrapper from "../assets/wrappers/HomePage";
import SlideShow from "../components/SlideShow";
const Home = () => {
  return (
    <Wrapper>
      <img src={hero} className="hero" />
      <SlideShow />
      <h4 className="title">Bukhara Restaurant </h4>
      <p>
        Bukhara Restaurant offers its customers beautiful dining halls and
        delectable food 24/7.
      </p>
      <p>
        <FcPhone size={"20px"} />
        +93 78 944 4222
      </p>
      <p>
        <span className="icon">
          <MdOutlineMailOutline />
        </span>
        bukhara.r@gmail.com
      </p>
    </Wrapper>
  );
};

export default Home;
