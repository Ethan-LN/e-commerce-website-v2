import React, { Component } from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
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
            <text className="text-2xl">Login</text>
            <div className="flex mt-3">
              <input
                className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
                placeholder="username"
                name="username"
                value={this.state.username}
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
            <Link to="/" className="btn mt-7 hover:scale-[1.02] text-center">
            <input
              type="button"
              value="login"
            />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
