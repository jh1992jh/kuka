import React, { useContext, useState } from "react";
import { UserContext } from "../context/user-context";
import { ADD_USER } from "../reducers/types";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const { dispatch } = useContext(UserContext);

  const submitUser = e => {
    e.preventDefault();

    const newUser = {
      username,
      added: new Date().toISOString()
    };
    dispatch({ type: ADD_USER, payload: newUser });
    setUsername("");
  };

  return (
    <div className="add_user">
      <form className="add_user_form" onSubmit={submitUser}>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button type="submit" disabled={username.length === 0}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
