import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Main from "./Components/Main";
import Book from "./Components/Book/Book";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Additem from "./Components/Additem";
import Signup from './Components/Signup'
import Signin from "./Components/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/index.html" element={<Main />} />
        <Route path="/book.html" element={<Book />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/menu.html" element={<Menu />} />
        <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Additem" element={<Additem/>} />
        {/* <Route
          path="/employment"
          element={<PrivateRoute element={<Employment />} />}
        />
        <Route
          path="/skilldev"
          element={<PrivateRoute element={<Skilldev />} />}
        />
        <Route
          path="/leisure"
          element={<PrivateRoute element={<Leisure />} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/jobapp" element={<Jobapp />} /> */}
      </Routes>
    </>
  );
}

export default App;