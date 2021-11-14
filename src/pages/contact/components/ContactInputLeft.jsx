import React from "react";
import { Link } from "react-router-dom";

export default function contactInputLeft() {
  return (
    <div className="contact-left col-sm-5 col-md-5 p-0 position-relative h-32 sm:h-screen sm:mb-0">
      <div
        className="
            overlay-img
            w-100 h-100
            d-flex
            justify-content-center
            align-items-center
          "
      > 
      <Link to="/">
        <img src="assets/img/logo-ALTA-v2.png" alt="" srcset="" />
      </Link>
      </div>
    </div>
  );
}
