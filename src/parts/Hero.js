import React from "react";

export default function Hero() {
  return (
    <div className="container-fluid">
      <section className="hero">
        <div className="row row-cols-sm-1 row-cols-sm-2 h-100 d-flex justify-content-center">
          <div className="hero-left col-sm-5 col-md-5 p-0 position-relative d-flex justify-content-center">
            <img
              src="assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
              className="avatar"
            />
          </div>
          <div className="hero-right col-sm-7 col-md-7 d-flex justify-content-start">
            <div className="hero-desc align-self-center">
              <h5>Hi, my name is</h5>
              <h1>Anne Sullivan</h1>
              <h3>I build things for the web</h3>
              <a href="#" className="btn btn-secondary hero-btn btn-hero">
                {" "}
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
