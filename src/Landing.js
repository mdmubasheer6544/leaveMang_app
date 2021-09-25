import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/mdbreact/dist/css/mdb.css';
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css'
import {Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import DashBoard from "./components/Dashboard/DashBoard";
import ApprovedLeaves from "./components/Approved-Leaves/ApprovedLeaves";
import PendingLeaves from "./components/Pending-Leaves/PendingLeaves";
import MyLeaves from "./components/My-Leaves/MyLeaves";
import NewLeaves from "./components/New-Leaves/NewLeaves";
const Landing = () => {
  return <>
    <Navbar/>
    <div className="container">
    <Route path="/" exact component={Login}></Route>
    <Route path="/dashbord" component={DashBoard}></Route>
    <Route path="/approve-leaves" component={ApprovedLeaves}></Route>
    <Route path="/pending-leaves" component={PendingLeaves}></Route>
    <Route path="/my-leaves" component={MyLeaves}></Route>
    <Route path="/new-leaves" component={NewLeaves}></Route>
    </div>
  </>;
};

export default Landing;
