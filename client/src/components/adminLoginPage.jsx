import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";

class AdminLoginPage extends Component {
  state = {
    username: "pareekshith",
    password: "pareekshith",
    usernameverified: "false",
    passwordverified: "false",
    redirect: "/login",
  };
  handleUsername = async (e) => {
    if (e.target.value == this.state.username) {
      await this.setState({ usernameverified: true });
    }
  };
  handlePassword = async (e) => {
    if (e.target.value == this.state.password) {
      await this.setState({ passwordverified: true });
    }
  };

  handleLogin = () => {
    if (
      this.state.usernameverified == true &&
      this.state.passwordverified == true
    ) {
      this.setState({ redirect: "/dashboard" });
      // return <Redirect to="/admindashboard" />;
    } else {
      alert("Incorrect Username or Password");
    }
  };
  render() {
    return (
      <div id="loginmargin" className="container margin middle ">
        <div className="jumbotron transparent ">
          <h2 className="middle">Login</h2>
          <div className="container ">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={this.handleUsername}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={this.handlePassword}
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Remember Password
                </label>
              </div>
              <Link
                to={this.state.redirect}
                onClick={this.handleLogin}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLoginPage;
