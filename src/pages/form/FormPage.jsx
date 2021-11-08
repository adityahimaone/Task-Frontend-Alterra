import React, { useState, useRef } from "react";
import Styles from "./Style.module.css";

export default function FormPage() {
  const dataKosong = {
    judul: "",
    pengarang: "",
    cetakan: "",
    tahunTerbit: 0,
    kotaTerbit: "",
    harga: 0,
  };
  const [data, setData] = useState(dataKosong);
  const regex = /^[A-Za-z ]*$/;
  const [errMsg, setErrMsg] = useState("");
  const fotoSampul = useRef(null);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "pengarang") {
      if (regex.test(value)) {
        setErrMsg("");
      } else {
        setErrMsg("Nama Pengarang Harus Berupa Huruf");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    console.log("data", data);
  };

  const handleSubmit = (e) => {
    if (errMsg !== "") {
      alert("Terdapat data yang tidak sesuai");
    } else {
      alert(`Data buku "${data.judul}" berhasil diterima`);
    }
    dataKosong();
    e.preventDefault();
  };

  const resetData = () => {
    setData(dataKosong);
    setErrMsg("");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Formulir Buku Baru</h1>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <label style={{ textAlign: "left", alignItems: "left" }}>
          Judul :
          <input
            type="text"
            name="judul"
            className={Styles.input}
            onChange={handleInput}
            required
            value={data.judul}
          />
        </label>
        <label>
          Pengarang :
          <input
            type="text"
            name="pengarang"
            className={Styles.input}
            onChange={handleInput}
            value={data.pengarang}
            required
          />
        </label>
        <label>
          Cetakan :
          <input
            type="text"
            name="cetakan"
            className={Styles.input}
            onChange={handleInput}
            value={data.cetakan}
          />
        </label>
        <label>
          Tahun Terbit :
          <input
            type="number"
            name="tahunTerbit"
            className={Styles.input}
            onChange={handleInput}
            value={data.tahunTerbit}
          />
        </label>
        <label>
          Kota terbit :
          <input
            type="text"
            name="kotaTerbit"
            className={Styles.input}
            onChange={handleInput}
            value={data.kotaTerbit}
          />
        </label>
        <label>
          Harga :
          <input
            type="number"
            name="harga"
            className={Styles.input}
            onChange={handleInput}
            value={data.harga}
          />
        </label>
        <label>
          Foto Sampul :
          <input type="file" className={Styles.input} ref={fotoSampul} />
        </label>
        <div>
          <span style={{ color: "red" }}>{errMsg}</span>
        </div>
        <input type="submit" value="Submit" className={Styles.submit} />
        <button className={Styles.input} onClick={resetData}>
          Reset
        </button>
      </form>
    </>
  );
}
