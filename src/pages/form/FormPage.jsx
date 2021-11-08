import React, { useRef, useState } from "react";
import Styles from "./form.module.css";

export default function FormPage() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: 0,
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const baseErr = {
    nama: " ",
    email: " ",
    noHandphone: " ",
  };

  const suratKesungguhan = useRef(null);
  const [data, setData] = useState(baseData);
  const regexName = /^[A-Za-z ]*$/;
  const [errMsg, setErrMsg] = useState(baseErr);
  const regexPhone = /^(\d{9}|\d{14})$/;
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "nama") {
      if (regexName.test(value)) {
        setErrMsg({ ...errMsg, nama: "" });
      } else {
        setErrMsg({ ...errMsg, nama: "Nama Lengkap Harus Berupa Huruf" });
      }
    }

    if (name === "email") {
      if (validateEmail(value)) {
        setErrMsg({ ...errMsg, email: "" });
      } else {
        setErrMsg({ ...errMsg, email: "Email Harus Sesuai" });
      }
    }

    if (name === "noHandphone") {
      if (regexPhone.test(value)) {
        setErrMsg({ ...errMsg, noHandphone: "" });
      } else {
        setErrMsg({
          ...errMsg,
          noHandphone: "No Handphone Harus 9 - 14 Karakter",
        });
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    // console.log(data);
    console.log("state", errMsg);
  };

  const handleSubmit = (e) => {
    if (
      errMsg.nama !== "" &&
      errMsg.noHandphone !== "" &&
      errMsg.email !== ""
    ) {
      alert("Data Pendaftar Tidak Sesuai ");
    } else {
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`);
    }
    baseData();
    e.preventDefault();
  };

  const resetData = () => {
    setData(baseData);
    setErrMsg("");
  };
  return (
    <div className="flex justify-center items-center w-full bg-blue-400">
      <div className=" bg-white rounded shadow-2xl p-8 m-4 lg:w-1/2 sm:w-full sm:m-12">
        <div>
          <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Pendaftaran Peserta Coding Bootcamp
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className={Styles.divForm}>
              <label className={Styles.labelForm}>
                Nama Lengkap:
                <input
                  type="text"
                  name="nama"
                  onChange={handleInput}
                  className={Styles.inputForm}
                  value={data.nama}
                  required
                />
              </label>
            </div>
            <div className={Styles.divForm}>
              <label className={Styles.labelForm}>
                Email:
                <input
                  type="email"
                  name="email"
                  className={Styles.inputForm}
                  onChange={handleInput}
                  value={data.email}
                  required
                />
              </label>
            </div>
            <div className={Styles.divForm}>
              <label className={Styles.labelForm}>
                No Handphone:
                <input
                  type="number"
                  name="noHandphone"
                  value={data.noHandphone}
                  onChange={handleInput}
                  className={Styles.inputForm}
                  required
                />
              </label>
            </div>
            <div className={Styles.divForm}>
              <label className={Styles.labelForm}>
                Latar belakang Pendidikan:
                <br />
                <input
                  type="radio"
                  name="pendidikan"
                  value="it"
                  onChange={handleInput}
                />
                <span className="ml-2 font-normal">IT</span>
                <span className="ml-4" />
                <input
                  type="radio"
                  name="pendidikan"
                  value="nonit"
                  onChange={handleInput}
                />
                <span className="ml-2 font-normal">NON IT</span>
              </label>
            </div>
            <div className={Styles.divForm}>
              <label className={Styles.labelForm}>
                Kelas Coding yang Dipilih:
                <select
                  name="kelas"
                  className={Styles.inputForm}
                  value={data.kelas}
                  onChange={handleInput}
                  required
                >
                  <option value="">Pilih Salah Satu Program</option>
                  <option value="backend">Coding Backend with Golang</option>
                  <option value="frontend">Coding Frontend with ReactJS</option>
                  <option value="fullstack">Fullstack Developer</option>
                </select>
              </label>
            </div>
            <div className={Styles.divForm}>
              <label className={Styles.labelForm}>
                Foto Surat Kesungguhan:
                <input
                  type="file"
                  className={Styles.inputForm}
                  ref={suratKesungguhan}
                  required
                />
              </label>
            </div>
            <div className={Styles.divForm}>
              <label className={Styles.labelForm}>
                Harapan Untuk Coding Bootcamp ini:
                <textarea
                  type="harapan"
                  name="harapan"
                  className={Styles.inputForm}
                  onChange={handleInput}
                  value={data.harapan}
                />
              </label>
            </div>
            <div className={Styles.divForm}>
              {/* {Object.keys(errMsg).forEach((key) => {
                <span style={{ color: "red" }}>{errMsg[key]}</span>;
                console.log(key, errMsg[key]);
              })} */}

              <span style={{ color: "red" }}>{errMsg.nama}</span>
              <span style={{ color: "red" }}>{errMsg.email}</span>
              <span style={{ color: "red" }}>{errMsg.noHandphone}</span>
            </div>
            <div className={Styles.divForm}>
              <input
                type="submit"
                value="Submit"
                className="bg-blue-400 text-white text-lg p-2 rounded-md shadow-md hover:bg-blue-600"
              />
              <button
                className="bg-gray-200 text-lg p-2 mt-2 rounded-md shadow-md hover:bg-gray-300"
                onClick={resetData}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
