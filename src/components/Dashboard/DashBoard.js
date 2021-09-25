import React, { useState, useEffect } from "react";
import { getAllLeavesForAdmin, getUsers } from "../Sericess/api";

const DashBoard = () => {
  const [allLeaves, setAllLeaves] = useState([]);
  useEffect(() => {
    getAllLeavesForAdmin()
      .then((allLeaves) => {
        
        let dashBoardData=[];

        getUsers().then((users) => {
          users.data.map((user) => {
            const userId = user.id;
            if (user.role==="user") {
              
           
            const userLeaves = allLeaves.data.filter((leave) => leave.userId === userId);
            const totalApproved = userLeaves.filter((leave) => leave.status === "approved").length;
            const totalPending = userLeaves.filter((leave) => leave.status === "pending").length;
            const leaveData={
              name:user.name,
              totalApproved,
              totalPending,
            }
            dashBoardData.push(leaveData);
          }
          });
             setAllLeaves(dashBoardData);
        });
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="row mt-4">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <h2 className="text-center">Dash-board</h2>
        <table className="table table-striped table-hover">
          <thead className="bg-teal text-white text-center ">
            <tr>
              <th className="font-weight-bold">Sr.No</th>
              <th className="font-weight-bold">Name</th>
              <th className="font-weight-bold">Leaves Approved</th>
              <th className="font-weight-bold">Leaves Pending</th>
              
            </tr>
          </thead>
          <tbody className="text-center ">
            {allLeaves.length !== 0 &&
              allLeaves.map((leave, index) => (
                <tr key={leave.userId}>
                  <td>{index + 1}</td>
                  <td>{leave.name}</td>

                  <td><h4 className="badge badge-success">{leave.totalApproved}</h4></td>
                  <td><h4 className="badge badge-danger">{leave.totalPending}</h4></td>
                 
                
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default DashBoard;
