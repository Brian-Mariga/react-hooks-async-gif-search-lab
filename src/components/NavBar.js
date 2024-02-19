import React from "react";

function NavBar({ color, title }) {
  const colors = {
    black: "navbar-inverse",
    white: "navbar-default",
  };

  const navClass = `navbar ${colors[color]}`;

  return (
    <nav className={navClass}>
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">{title}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
