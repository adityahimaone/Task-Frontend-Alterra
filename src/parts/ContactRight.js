import React from "react";

export default function ContactRight() {
  return (
    <div class="col-sm-7 col-md-7 contact-right align-self-center">
      <form class="needs-validation" action="review_message.html" novalidate>
        <h2>Contact Us</h2>
        <div class="mb-3">
          <label for="inputFullName" class="form-label">
            Full Name<sup class="stars-red">*</sup>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Your Full Name Here..."
            aria-label="default input example"
            id="fullname-input"
            required
          />
          <div class="invalid-feedback">Please fill Full Name.</div>
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address<sup class="stars-red">*</sup>
          </label>
          <input
            type="email"
            class="form-control"
            id="email-input"
            placeholder="example@domail.com"
            aria-describedby="emailHelp"
            required
          />
          <div class="invalid-feedback">Please Fill Email Address.</div>
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="mb-3">
          <label for="inputPhoneNumber" class="form-label">
            Phone Number<sup class="stars-red">*</sup>
          </label>
          <input
            type="text"
            class="form-control"
            id="phonenumber-input"
            placeholder="08573890xxxxx."
            aria-label="default input example"
            required
          />
          <div class="invalid-feedback">Please Fill Phone number.</div>
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="mb-3">
          <label for="inputNationality" class="form-label">
            Nationality
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            id="national-input"
            required
          >
            <option selected>Selected</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Singapore">Singapore</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea class="form-control" id="message-input" rows="3"></textarea>
        </div>
        <button
          onclick="saveContact()"
          type="submit"
          class="btn btn-primary contact-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
