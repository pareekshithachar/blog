import React, { Component } from "react";
import NavBar from "./components/Navbar";
import MainLandingPage from "./components/mainLandingPage";
import AdminLoginPage from "./components/adminLoginPage";
import BlogPage from "./components/blogPage";
import AdminDashBoard from "./components/adminDashBoard";
import AddBlog from "./components/addBlog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="background">
        <NavBar />
        <Router>
          <Switch>
            <Route path="/" exact>
              <MainLandingPage />
            </Route>
            <Route path="/login">
              <AdminLoginPage />
            </Route>
            <Route path="/blogs">
              <BlogPage />
            </Route>
            <Route path="/dashboard">
              <AdminDashBoard />
            </Route>
            <Route path="/addblog">
              <AddBlog />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
