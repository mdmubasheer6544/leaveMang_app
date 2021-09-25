import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getMyLeaves } from "../Sericess/api";

const MyLeaves = () => {
  const { user } = useSelector((state) => state.user);

  const [myLeaves, setMyLeaves] = useState([]);
  useEffect(() => {
    getMyLeaves(user.id)
      .then((leaveDetails) => {
        setMyLeaves(leaveDetails.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="row mt-4">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h2 className="text-center">My-Leaves</h2>
        <table className="table table-striped table-hover">
          <thead className="bg-teal text-white text-center ">
            <tr>
              <th className="font-weight-bold">Sr.No</th>
              <th className="font-weight-bold">Leave Duration</th>
              <th className="font-weight-bold">Reason</th>
              <th className="font-weight-bold">Apply Date</th>
              <th className="font-weight-bold">Status</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {myLeaves.length !== 0 &&
              myLeaves.map((leave, index) =><tr key={leave._id}>
                    <td>{index+1}</td>
                    <td>
                     {leave.from.substr(0,10)} To {leave.to.substr(0,10)}
                    </td>
                    <td>{leave.reason}</td>
                    <td>{leave.applyDate.substr(0,10)}</td>
                    <td>{leave.status}</td>
                  </tr>
                
              )}
          </tbody>
        </table>
        {myLeaves.length === 0 && (
          <h3 className="text-center text-danger ">No Leaves Yet!</h3>
        )}
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default MyLeaves;
