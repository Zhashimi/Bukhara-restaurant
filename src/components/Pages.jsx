import React from "react";
import { links } from "./data";
import { NavLink } from "react-router-dom";
const Pages = ({ linksRef }) => {
  return (
    <ul className="links" ref={linksRef}>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id} className="link">
            <NavLink to={url} id="link">
              <p>{text}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Pages;
