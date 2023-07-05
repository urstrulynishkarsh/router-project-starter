import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const[IsLoggedIn,setIsLoggedIn] =useState(false);
  return(
     <div className="w-screen h-screen bg-[#99f8a6] flex flex-col">
        <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home IsLoggedIn={IsLoggedIn}/>}/>
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/Dashboard" element={
            <PrivateRoute IsLoggedIn={IsLoggedIn}>
          <Dashboard/>
          </PrivateRoute>}/>
        </Routes>
    </div>
    );
}

export default App;
