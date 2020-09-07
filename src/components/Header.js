import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div class="brand">
            <Link to="/"> Watchlist</Link>
          </div>
          <ul class="nav-links">
            <li class="nav-links">
              <Link to="/watchlist">Watch List</Link>
            </li>
            <li class="nav-links">
              <Link to="/watched">Watched</Link>
            </li>
            <li class="nav-links">
              <Link to="/add" className="btn">
                +ADD
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
