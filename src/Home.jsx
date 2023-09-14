import { useState } from "react";
import React from 'react';
import "./App.css";
//components
import Layout from "./components/Layout";
import User from "./components/User";
import Admin from "./components/Admin";

const Home = () => {
  const [sector, setSector] = useState("Home")
  // create function handle button to display data table for user
  const userHandleClick = () => {
   setSector("User");
  }
  // create function handle button to display data table for admin
  const adminHandleClick = () => {
    setSector("Admin")
  }

  return (
    <Layout>
     <div>
     {sector === "Home" && <h1>Generation Thailand <br /> React-Assessment</h1>}
     {sector === "User" && <h1>Generation Thailand <br /> Home - User Sector</h1>}
     {sector === "Admin" && <h1>Generation Thailand <br /> Home - Admin Sector</h1>}
      </div>
      <div className="button">
      <button className="btnUser" onClick={userHandleClick}>User Home Sector</button>
      <button className="btnAdmin" onClick={adminHandleClick}>Admin Home Sector</button>
      </div>
      {sector === "User" && <div><User /></div>}
     {sector === "Admin" && <div><Admin /></div>}
    </Layout>
  )
}

export default Home;
