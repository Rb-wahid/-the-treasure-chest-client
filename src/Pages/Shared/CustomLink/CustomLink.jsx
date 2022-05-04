import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const active = {
    backgroundColor: "#a0c3d2",
    color: "black",
    padding: "6px 14px",
    fontWeight: "500",
    borderRadius: "15px 90px 90px 15px",
    boxShadow: "1px 2px 8px gray",
  };

  return (
    <div>
      <Link style={match && active} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};
export default CustomLink;
