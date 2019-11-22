import React from "react";
import UserCard from "./UserCard";
export default function UserList({ users }) {
  const noUsersMessage = <p>No users found in database.</p>;

  const userList = (
    <div className="card">
      {users.map(user => (
        <UserCard user={user} key={user.UserID} />
      ))}
    </div>
  );

  return <div>{users.length === 0 ? noUsersMessage : userList}</div>;
}
