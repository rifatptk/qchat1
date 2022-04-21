import React, { Component } from "react";
import "./Chat.css";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", arr: [] };
  }
  changeHandler = (e) => {
    this.setState({ value: e.target.value });
  };
  submitHandler = (e) => {
    const { value, arr } = this.state;
    value ? arr.push(value) : arr.push(); // if (value.length > 0) {
    //   arr.push(value);
    // }

    this.setState({ arr: arr });

    e.preventDefault();
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="chat-js">
        <form onSubmit={this.submitHandler} className="" autoComplete="off">
          <h3 className="text-warning text-center fw-bold mb-5">Q C H A T</h3>
          <div className="m-3">
            <label className="text-warning mb-1 " htmlFor="input-message">
              Insert message here
            </label>
            <br />
            <input
              id="input-message"
              className="p-2 border-0 bg-secondary text-light text-center rounded "
              type="text"
              value={this.state.value}
              onChange={this.changeHandler}
            />
            <button className="ms-2 p-2 rounded btn btn-warning" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="">
          {this.state.arr.length ? (
            <h5 className="text-info text-center text-warning my-5">
              Messages
            </h5>
          ) : (
            ""
          )}

          {this.state.arr.map((item, index) => (
            <p
              className={`${
                index % 2 === 0
                  ? "me-auto bg-secondary text-light"
                  : "ms-auto bg-warning text-dark"
              } rounded  py-2 px-5 message`}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
