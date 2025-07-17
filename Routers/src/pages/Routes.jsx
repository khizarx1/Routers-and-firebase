import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from "./Home";
import Login from "./Login";
import About from './About';
import Contact from './Contact'
import Register from './Register'
import Users from './Home/users'
import UseRef from './Hooks/useRef'
import UseMemo from './Hooks/UseMemo'
import UseReducer from "./Hooks/UseReducer";
import UseContext from "./Hooks/UseContext";
import UseState from "./Hooks/UseState";
import TodoList from "./Todolist";

import Nopage from './Nopage'
import Adduser from "./Login/Adduser";
import AddProducts from "./Products/AddProducts";
import ReadProducts from "./Products/ReadProducts";
import Storage from "./storage/index";


function customRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <main
        style={{
          flex: "1 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Adduser" element={<Adduser />} />
          <Route path="/Products/AddProducts" element={<AddProducts />} />
          <Route path="/Products/ReadProducts" element={<ReadProducts />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Hooks/UseRef" element={<UseRef />} />
          <Route path="/Hooks/UseMemo" element={<UseMemo />} />
          <Route path="/Hooks/UseReducer" element={<UseReducer />} />
          <Route path="/Hooks/UseContext" element={<UseContext />} />
          <Route path="/Hooks/UseState" element={<UseState />} />
          <Route path="/TodoList" element={<TodoList />} />


          <Route path="*" element={<Nopage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default customRoutes;
