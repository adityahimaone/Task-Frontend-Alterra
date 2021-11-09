import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <ListPassenger />
      <PassengerInput />
    </div>
  );
}

export default Home;
