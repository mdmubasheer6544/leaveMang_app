import React, { useState, useEffect } from "react";
import { getPendingLeavesForAdmin, putChangeForAdmin } from "../Sericess/api";

const PendingLeaves = () => {
  const [pendingLeaves, setPendingLeaves] = useState([]);
  const getPendingDetails = () => {
    getPendingLeavesForAdmin()
      .then((pendingLeaves) => {
        setPendingLeaves(pendingLeaves.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPendingDetails();
  }, []);

  const statusChangeHandler = (id, value) => {
    putChangeForAdmin(id, value)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          getPendingDetails();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row mt-4">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <h2 className="text-center">Pending-Leaves</h2>
        <table className="table table-striped table-hover">
          <thead className="bg-teal text-white text-center ">
            <tr>
              <th className="font-weight-bold">Sr.No</th>
              <th className="font-weight-bold">Name</th>
              <th className="font-weight-bold">Leave Duration</th>

              <th className="font-weight-bold">Apply Date</th>
              <th className="font-weight-bold">Status</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {pendingLeaves.length !== 0 &&
              pendingLeaves.map((leave, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    {leave.from} To {leave.to}
                  </td>
                  <td>{leave.reason}</td>
                  <td>{leave.applyDate}</td>
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) =>
                        statusChangeHandler(leave._id, e.target.value)
                      }
                    >
                      <option defaultValue={leave.status}>{leave.status}</option>
                      <option value="approved">approved</option>
                      <option value="cancel">cancel</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {pendingLeaves.length === 0 && (
          <h3 className="text-center text-danger ">No Pending Leaves!</h3>
        )}
      </div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default PendingLeaves;
