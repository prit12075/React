import React from "react";

export default function Content({ text, setText }) {

  const convertUpCase = () => {
    setText((prev) => prev.toUpperCase());
  }

  const convertDownCase = () => {
    setText((prev) => prev.toLowerCase());
  }

  const changeAllowed = (event) => {
    setText(event.target.value);
  }

  return (
      <div className="container mt-5 fw-bold">
        <h1 className="text-primary mb-3">Welcome to TextUtils</h1>
        <h3>Enter your text below to analyze:</h3>
        <div className="mb-3">
          <textarea
            className="form-control w-75 my-3"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={changeAllowed}
          ></textarea>
          <button className="btn btn-primary" onClick={convertUpCase}>Convert to Uppercase</button>
          <button className="btn btn-secondary" onClick={convertDownCase} style={{ marginLeft: '10px' }}>Convert to Lowercase</button>
        </div>
      </div>
  )
}
