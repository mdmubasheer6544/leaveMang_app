import React,{useState,useEffect} from 'react';
import { getApprovedLeavesForAdmin, getUsers } from '../Sericess/api';

const ApprovedLeaves = () => {
    const[approvedLeaves,setApprovedLeaves]=useState([]);

    useEffect(() => {
     
        getApprovedLeavesForAdmin().then(approvedLeaves=>{
        setApprovedLeaves(approvedLeaves.data)
     }).catch(err=>console.log(err))
    }, [])
    return (
        <div className="row mt-4">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <h2 className="text-center">Approved-Leaves</h2>
        <table className="table table-striped table-hover">
          <thead className="bg-teal text-white text-center ">
            <tr>
              <th className="font-weight-bold">Sr.No</th>
              <th className="font-weight-bold">Name</th>
              <th className="font-weight-bold">Leave Duration</th>
              <th className="font-weight-bold">Reason</th>
              <th className="font-weight-bold">Apply Date</th>
              <th className="font-weight-bold">Status</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {approvedLeaves.length !== 0 &&
              approvedLeaves.map((leave, index) =><tr key={leave._id}>
                    <td>{index+1}</td>
                    <td>{leave.name}</td>
                    <td>
                     {leave.from.substr(0,10)}  To  {leave.to.substr(0,10)}
                    </td>
                    <td>{leave.reason}</td>
                    <td>{leave.applyDate.substr(0,10)}</td>
                    <td>{leave.status}</td>
                  </tr>
                
              )}
          </tbody>
          
        </table>
        {approvedLeaves.length === 0 && (
          <h3 className="text-center text-danger ">No Approved Leaves!</h3>
        )}
      </div>
      <div className="col-md-1"></div>
    </div>
    );
};

export default ApprovedLeaves;