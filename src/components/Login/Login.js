import React, { useState,useEffect } from "react";
import { getUsers } from "../Sericess/api";
import { useDispatch} from "react-redux";
import { addUser } from "../Redux/UserSlice";
import { useHistory } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();
  const dispatch = useDispatch();



  const onSubmitHandler = (e) => {
    e.preventDefault();
    getUsers().then((data) => {
      const credential = data.data.filter(
        (u) => u.email === email && u.password === password
      );
      if (credential.length === 0) {
        alert("Invalid Credential");
      } else {
        dispatch(addUser(credential[0]));
        if (credential[0].role==="admin") {
          history.push('/dashbord')
        }
        else if (credential[0].role==="user") {
          history.push('/my-leaves')
        }
      }
    });
  };

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  
  useEffect(() => {
    dispatch(addUser({}))
   }, [])
  return (
    <section className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3"> </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-info text-white text-center">
                <h2 className="text-uppercase"> Log In </h2>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-group ">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      onChange={onEmailChangeHandler}
                      value={email}
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onPasswordChangeHandler}
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="submit"
                      className="btn btn-outline-primary btn-sm"
                      value="Login"
                      disabled={!email && !password}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3"> </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
