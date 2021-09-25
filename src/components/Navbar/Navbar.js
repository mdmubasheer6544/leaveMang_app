import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch =useDispatch();
  const [role, setRole] = useState("");
  useEffect(() => {
    setRole(user.role);
  }, [user]);
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-teal navbar-dark">
        <div className="container-fluid">
          <div
            className="navbar-toggler"
            data-target="#my-menu"
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </div>
          <Link to="#" className="navbar-brand">
            Leave Management App
          </Link>

          <div className="navbar-collapse collapse" id="my-menu">
            <ul className="navbar-nav mr-auto">
              {role === "admin" && 
                <>
                  <li className=" nav-item mx-2">
                    <Link to="/dashbord" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                  <li className=" nav-item mx-2">
                    <Link to="/pending-leaves" className="nav-link">
                      Pending Leaves
                    </Link>
                  </li>
                  <li className=" nav-item mx-2">
                    <Link to="/approve-leaves" className="nav-link">
                      Approved Leaves
                    </Link>
                  </li>
                </>}
  
                {role==="user"&&<>
                  <li className=" nav-item mx-2">
                    <Link to="/my-leaves" className="nav-link">
                      My-Leaves
                    </Link>
                  </li>
                  <li className=" nav-item mx-2">
                    <Link to="/new-leaves" className="nav-link">
                      New-Leave
                    </Link>
                  </li>
                </>}
  
            </ul>
            <ul className="navbar-nav profile">
              {/* <li className=" nav-item mx-2">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li> */}
              <li className=" nav-item mx-2">
               {(role==="admin"||role==="user")&& <Link to="/" className="nav-link">
                  LogOut
                </Link>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
