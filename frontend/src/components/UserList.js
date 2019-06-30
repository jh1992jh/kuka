import React, { useContext } from "react";
import { UserContext } from "../context/user-context";

const UserList = () => {
  const { userState } = useContext(UserContext);

  let users;

  if (userState.users.length < 1) {
    users = <li>There are no users</li>;
  } else {
    users = userState.users.map((user, i) => (
      <li key={i}>
        <h3>Username: {user.username}</h3>
        <p>Added: {user.added}</p>
      </li>
    ));
  }
  return <ul className="user_list">{users}</ul>;
};

export default UserList;
