import React from "react";
import Nav from "../nav/Nav";
import "./Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { useNavigate } from "react-router";

function Profile() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div className="Profile">
      <Nav />
      <div className="profile_body">
        <h1>Who's Watching </h1>
        <div className="profile_info">
          <img
            onClick={() => navigate("/")}
            src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
            alt="#"
          />
          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plans">
              <h3>Plans (current plan: Basic)</h3>
              <button onClick={() => auth.signOut()} className="signOut_button">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
