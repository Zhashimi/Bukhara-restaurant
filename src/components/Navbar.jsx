import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";
import Wrapper from "../assets/wrappers/Navbar";
import Pages from "./pages";
import Social from "./Social";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

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
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
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
