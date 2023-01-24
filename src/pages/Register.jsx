import React, { Component } from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  };
  handleChange = (event) => {
    const fields = Object.assign({}, this.state);
    fields[event.target.name] = event.target.value;
    this.setState({ ...fields });
  };
  render() {
    return (
      <div>
        <Announce />
        <Navbar />
        <div className="flex justify-center">
          <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg w-[60%] p-5 mobile:w-[90%] mr-5">
            <text className="text-2xl">Register</text>
            <div className="flex mt-3 gap-3">
              <input
                className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
                placeholder="first name"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
                required
              />
              <input
                className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
                placeholder="last name"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="flex mt-3">
              <input
                className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
                placeholder="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="flex mt-3">
              <input
                className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="flex mt-3">
              <input
                className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
                name="confirmpass"
                placeholder="confirm password"
                value={this.state.confirmpass}
                onChange={this.handleChange}
                required
              />
            </div>
            {/* Temperate Link to Home page */}
            <Link to="/" className="btn mt-7 hover:scale-[1.02] text-center">
            <input
              to = "/"
              type="button"
              value="Register"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
