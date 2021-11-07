import React from "react";
import Todo from "./home/Todo.jsx";
import AboutApp from "./about/AboutApp";
import AboutAuthor from "./about/AboutAuthor";
import NotFound from "./notfound/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function _routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Todo />} />
        <Route path="/about_app" element={<AboutApp />} />
        <Route path="/about_author" element={<AboutAuthor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
