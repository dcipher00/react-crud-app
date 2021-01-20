import React from "react";
import UserItem from "./UserItem.jsx";

export default function UserList(props) {
  let users = props.userList;
  const trItem = users.map((item, index) => (
    <UserItem
      key={index}
      user={item}
      index={index}
      editUserSubmit={props.editUserSubmit}
      deleteUser={props.deleteUser}
    />
  ));
  return <tbody>{trItem}</tbody>;
}
