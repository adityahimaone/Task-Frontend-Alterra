import React from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

export default function ProfileList({ title, users }) {
  console.log(users);
  return (
    <>
      <Header text={title} />
      {users.map((user) => (
        <ProfileCard key2={user.id} user={user} />
      ))}
    </>
  );
}
