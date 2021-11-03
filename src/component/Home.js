import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ListPassenger from "./ListPassenger";
import { mockData } from "../mockData";
import PassengerInput from './PassengerInput'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = mockData;
  }
  // New State
  // state = {
  //   mockData,
  // };
  deleteGuest = (id) => {
    const newListGuest = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newListGuest });
  };

  addGuest = (newUser) => {
    const newGuest = { id: uuidv4(), ...newUser };
    this.setState({ data: [...this.state.data, newGuest] });
  };

  render() {
    return (
      <div>
        <ListPassenger data={this.state.data} deleteGuest={this.deleteGuest} />
        <PassengerInput/>
      </div>
    );
  }
}
