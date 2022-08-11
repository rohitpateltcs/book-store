import React from "react";
import "./Header.css";
import {
  BookOpenIcon,
  HomeIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h3 className="logo_text">Logo</h3>
      </div>
      <div className="search">
        <input type="text" placeholder="Enter your input" />
        <SearchIcon className="search__icon" />
      </div>
      <div className="header_items">
        <Link to="/">
          <div className="items_option">
            <HomeIcon className="home_icon" />
            <span id="span">Home</span>
          </div>
        </Link>

        <div className="items_option">
          <BookOpenIcon className="home_icon" />
          <span id="span">Books Categories</span>
        </div>
        <Link to="/mylist">
          <div className="items_option">
            <ShoppingBagIcon className="home_icon" />
            <span id="span">My List</span>
          </div>
        </Link>
      </div>
      <div className="mobileView_search">
        <SearchIcon />
      </div>

      {/* Login */}
      <div className="login_option">
        <button type="submit">Login</button>
      </div>
    </div>
  );
};

export default Header;
