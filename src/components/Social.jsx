import React from "react";
import { social } from "./data";
import { NavLink } from "react-router-dom";

const Social = () => {
  return (
    <ul className="social-icons">
      {social.map((socialIcon) => {
        const { id, url, icon } = socialIcon;
        return (
          <li key={id} className="link">
            <NavLink to={url} id="link">
              {icon}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
