import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    const item = window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", item);
  });
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
