import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";
import Wrapper from "../assets/wrappers/Navbar";
import Pages from "./pages";
import Social from "./Social";
import { FaShoppingCart } from "react-icons/fa";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalQuantity } from "../functions";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const { cartItems } = useSelector((store) => store.cart);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <div className="cart-container">
            {" "}
            <p className="total-amount">{getTotalQuantity(cartItems) || 0}</p>
            <Link to={"/cart"} className="cart">
              <FaShoppingCart />
            </Link>
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>{" "}
          </div>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <Pages linksRef={linksRef} />
        </div>
        {/* social links */}
        <Social />
      </div>
    </Wrapper>
  );
};
export default Navbar;
