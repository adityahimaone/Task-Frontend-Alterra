import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import ContactInput from "./contact/ContactInput";
import ContactOutput from "./contact/ContactOutput";
import News from "./news/News";

export class routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact_input" element={<ContactInput />} />
          <Route path="/contact_output" element={<ContactOutput />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default routes;
