import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function ContactOutput() {
  const contact = useSelector((state) => state.contact);
  console.log(contact);
  console.log(contact.contacts.fullName);
  return (
    <>
      <div class="container-fluid">
        <div class="main d-flex justify-content-center align-items-center">
          <div class="message shadow-sm p-3 mb-5 bg-body rounded">
            <div class="row">
              <div class="col">
                <table class="table table-borderless tbl-review">
                  <tbody>
                    <tr>
                      <td>Full Name</td>
                      <td>:</td>
                      <td id="fullname-review">{contact.contacts.fullName}</td>
                    </tr>
                    <tr>
                      <td>Email Address</td>
                      <td>:</td>
                      <td id="email-review">{contact.contacts.email}</td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td>:</td>
                      <td id="phone-review">{contact.contacts.phoneNumber}</td>
                    </tr>
                    <tr>
                      <td>Nationality</td>
                      <td>:</td>
                      <td id="national-review">
                        {contact.contacts.nationality}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="message-result">
                  <p id="msg-review">{contact.contacts.message}</p>
                </div>
                <div class="line d-flex">
                  <hr />
                </div>
                <div class="greeting">
                  <p>Thanks for contacting us! </p>
                  <p>We will be in touch with you shortly. </p>
                  <a href="" class="btn btn-primary contact-btn">
                    <Link to="/">Home</Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <img src="assets/img/img-dot.png" alt="" srcset="" class="dot-img" />
        </div>
      </div>
    </>
  );
}
