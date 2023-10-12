import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e) {
        e.preventDefault();
      
        try {
          const response = await axios.post("http://localhost:8000/", {
            email,
            password,
          });
      
          if (response.data === "exist") {
            history("/home", { state: { id: email } });
          } else if (response.data === "notexist") {
            alert("User has not signed up");
          } else {
            alert("Unexpected response from the server");
          }
        } catch (error) {
          if (error.response) {
            // Server responded with an error (4xx or 5xx)
            console.error(error.response.data);
            alert("Server error");
          } else if (error.request) {
            // Request made but no response received
            console.error(error.request);
            alert("No response from the server");
          } else {
            // Something else went wrong
            console.error(error);
            alert("An error occurred");
          }
        }
      }
      


    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Login</h1>
                <form onSubmit={submit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    /> <br />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    /> <br />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
                <br />
                <p>OR</p>
                <br />
                <a href="/signup" className="btn btn-secondary">Signup Page</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
    )
}

export default Login