import React, { Component } from "react";
import BlogCard from "./blogCard";
import { Link } from "react-router-dom";
class AdminDashBoard extends Component {
  state = {};
  render() {
    return (
      <div className="container container-fluid my-5 mx-5">
        <Link to="/addblog" class="btn btn-light ">
          Add new Blog
        </Link>
        <div class="jumbotron jumbotron-fluid my-2 transparent">
          <div class="container my">
            <h2 class="display-5">My Blogs</h2>
            <hr color="black" />
            <div id="myblogs">
              <BlogCard loginCalled="true" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoard;
