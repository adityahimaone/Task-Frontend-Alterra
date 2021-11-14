import React, { useState } from "react";
import { addContact } from "../../../store/contactSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ContactInputRight() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const baseData = {
    id: 1,
    fullName: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    message: "",
  };

  const baseErr = {
    fullName: "",
    email: "",
    phoneNumber: "",
  };
  const [data, setData] = useState(baseData);
  const [errMsg, setErrMsg] = useState(baseErr);
  const regexName = /^[A-Za-z ]*$/;
  const regexPhone = /^(\d{9}|\d{10}|\d{11}|\d{12}|\d{13}|\d{14})$/;
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "fullName") {
      if (regexName.test(value)) {
        setErrMsg({ ...errMsg, fullName: "" });
      } else {
        setErrMsg({ ...errMsg, fullName: "Nama Lengkap Harus Berupa Huruf" });
      }
    } else if (name === "email") {
      if (validateEmail(value)) {
        setErrMsg({ ...errMsg, email: "" });
      } else {
        setErrMsg({ ...errMsg, email: "Email Harus Sesuai" });
      }
    } else if (name === "phoneNumber") {
      if (regexPhone.test(value)) {
        setErrMsg({ ...errMsg, phoneNumber: "" });
      } else {
        setErrMsg({
          ...errMsg,
          phoneNumber: "No Handpone Harus 9 - 14 Karakter",
        });
      }
    }
    setData({ ...data, [name]: value });
    console.log("data", data);
    console.log("error", errMsg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputNotEmpty = data.fullName;
    if (
      errMsg.fullName === "" &&
      errMsg.email === "" &&
      errMsg.phoneNumber === "" &&
      data.fullName === "" &&
      data.email === "" &&
      data.phoneNumber === ""
    ) {
      alert("Data Gagal Di Input");
    } else if (inputNotEmpty) {
      const newContact = {
        id: data.id,
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        nationality: data.nationality,
        message: data.message,
      };
      dispatch(addContact(newContact));
      alert("Form Submitted");
      navigate("/contact_output");
      handleReset();
    }
  };

  const handleReset = () => {
    setData(baseData);
    setErrMsg("");
  };

  return (
    <div class="col-sm-7 col-md-7 contact-right align-self-center mt-4">
      <form class="needs-validation" onSubmit={handleSubmit} noValidate>
        <h2>Contact Us</h2>
        <div class="mb-3">
          <label for="inputFullName" class="form-label">
            Full Name<sup class="stars-red">*</sup>
          </label>
          <input
            type="text"
            name="fullName"
            class="form-control"
            placeholder="Your Full Name Here..."
            aria-label="default input example"
            id="fullname-input"
            onChange={handleChange}
            value={data.fullName}
            required
          />
          <span style={{ color: "red" }}>{errMsg.fullName}</span>
          <div class="invalid-feedback">Please fill Full Name.</div>
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address<sup class="stars-red">*</sup>
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="email-input"
            placeholder="example@domail.com"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={data.email}
            required
          />
          <span style={{ color: "red" }}>{errMsg.email}</span>
          <div class="invalid-feedback">Please Fill Email Address.</div>
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="mb-3">
          <label for="inputPhoneNumber" class="form-label">
            Phone Number<sup class="stars-red">*</sup>
          </label>
          <input
            type="text"
            name="phoneNumber"
            class="form-control"
            id="phonenumber-input"
            placeholder="08573890xxxxx."
            aria-label="default input example"
            onChange={handleChange}
            value={data.phoneNumber}
            required
          />
          <span style={{ color: "red" }}>{errMsg.phoneNumber}</span>
          <div class="invalid-feedback">Please Fill Phone number.</div>
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="mb-3">
          <label for="inputNationality" class="form-label">
            Nationality
          </label>
          <select
            class="form-select"
            id="national-input"
            name="nationality"
            onChange={handleChange}
            value={data.nationality}
          >
            <option value="">Selected</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Singapore">Singapore</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            id="message-input"
            rows="3"
            name="message"
            onChange={handleChange}
            value={data.message}
          ></textarea>
        </div>
        <button
          onClick="saveContact()"
          type="submit"
          class="btn btn-primary contact-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
