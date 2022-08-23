import React from "react";
import "./Profile.css";

const Profile = () => {
  const userData = localStorage.getItem("userData");
  const finalUserData = JSON.parse(userData);
  console.log(finalUserData);

  return (
    <div>
      <header className="header">
        <img
          src={`http://localhost:4000/${finalUserData.image}`}
          alt="John Doe"
          className="profile-image"
        />
        <h1 className="tag name">Hello, I’m {finalUserData.name}.</h1>
        <p className="tag location">{finalUserData.user_type}</p>
        <p className="tag location">{finalUserData.email}</p>
      </header>
    </div>
  );
};

export default Profile;
