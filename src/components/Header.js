import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <nav class=" ">
        <div class="header_logoBlock ">
          <Link class="navbar-brand" to="/">
            <img
              className="header_logo"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header_address">
          <span className="header__optionLineOne ">Hello</span>
          <span className="header__optionLineTwo">Select your address</span>
          <span class="mapIcon">
            <i class="fas fa-map-marker-alt"></i>
          </span>
        </div>

        <div className="header_search">
          <input
            type="text"
            class=" header_searchInput "
            placeholder="Search Product Name..."
          />
          <span className=" header_searchIcon text-dark">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <div className="header_nav text-light">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header_option">
              <span className="header__optionLineOne">
                Hello,&nbsp;
                <span className="loginName">
                  {user ? user.email : "Guest"}{" "}
                </span>
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header_option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header_optionBasket">
            <Link to="/checkout" className="shopping_link">
              <i class="fas fa-shopping-cart"></i>

              <span className="header__optionLineTwo header_basketCount">
                {basket?.length}
              </span>
              {/* <span className="cartName">Cart</span> */}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
