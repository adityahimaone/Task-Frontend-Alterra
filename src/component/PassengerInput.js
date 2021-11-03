import React, { Component } from "react";

export default class PassengerInput extends Component {
  state = {
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
    editing: true,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty =
      this.state.nama && this.state.umur && this.state.jenisKelamin;
    if (formIsNotEmpty) {
      const newData = {
        nama: this.state.nama,
        umur: this.state.umur,
        jenisKelamin: this.state.jenisKelamin,
      };
      this.props.addGuest(newData);
      this.setState({
        nama: "",
        umur: "",
        jenisKelamin: "Pria",
      });
    }
  };

  handleBukaInput = () => {
    this.setState({ editing: false });
  };

  handleTutupInput = () => {
    this.setState({ editing: true });
  };

  render() {
    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    return (
      <div>
        <div onSubmit={() => {}} style={viewMode}>
          <p>Masukan nama anda</p>
          <input
            type="text"
            name="name"
            placeholder="Masukan nama anda..."
            value={this.state.nama}
            onChange={this.onChange}
          />
          <p>Masukan umur anda</p>
          <input
            type="text"
            name="umur"
            placeholder="Masukan umur anda..."
            value={this.state.umur}
            onChange={this.onChange}
          />
          <p>Masukan Jenis Kelamin anda</p>
          <select id="gender" name="gender">
            <option value="pria">Pria</option>
            <option value="pria">Wanita</option>
          </select>
          <input type="submit" value="Submit" />
          <input type="submit" value="Selesai" />
        </div>
        <button onClick={this.handleBukaInput} style={editMode}>
          Input Passenger
        </button>
      </div>
    );
  }
}
