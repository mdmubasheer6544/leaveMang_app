import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { postLeave } from "../Sericess/api";

const NewLeaves = () => {
  const { user } = useSelector((state) => state.user);
  const history=useHistory();
  const [request, setRequest] = useState({
    userId: "",
    from: "",
    to: "",
    reason: "",
    name: "",
    status: "pending",
  });

  const onChangeHandler = (e) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };
  const applyRequestHandler = (e) => {
    e.preventDefault();
    postLeave(request)
      .then((res) =>{
        history.push("/my-leaves");
        setRequest([]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setRequest({ ...request, userId: user.id, name: user.name });
  }, []);
  return (
    <div className="row mt-4">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h2 className="text-center">New Leaves</h2>
        <div className="card">
          <div className="card-header bg-info text-white">
            <h3>Add New Leave</h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={applyRequestHandler}>
              <div className="form-group">
                <label for="From" class="form-label">
                  From
                </label>
                <input
                  type="date"
                  name="from"
                  value={request.from}
                  onChange={onChangeHandler}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="To" class="form-label">
                  To
                </label>
                <input
                  type="date"
                  name="to"
                  value={request.to}
                  onChange={onChangeHandler}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label for="Reason" class="form-label">
                  Reason
                </label>
                <textarea
                  value={request.reason}
                  name="reason"
                  onChange={onChangeHandler}
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Apply"
                  className="btn btn-success"
                  disabled={(!request.from && !request.to)?true:false}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default NewLeaves;
