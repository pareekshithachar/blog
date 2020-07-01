import React, { Component } from "react";
import { Link } from "react-router-dom";
class MainLandingPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="jumbotron transparent ">
            <div className="jumbotron mainpage"></div>
            <div className="middle1">
              <Link to="/login" className="btn btn-primary">
                Log In
              </Link>
              <Link to="/blogs" className="btn btn-primary ml-5">
                All Blogs
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainLandingPage;
