import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div className="card">
      <div className="card-img-top">
        <img src={user.UserImageLink} width="200" height="200" />
      </div>
      <div className="content">
        <Link to={`/user/${user.UserID}`} className="userHeader">
          {user.Nickname}
        </Link>
      </div>
    </div>
  );
}
