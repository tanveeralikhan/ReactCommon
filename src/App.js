import React, { useState } from "react";
import Header from "./components/header/Header";
import InputField from "./components/InputField/index";
import { Validators } from "./utilities/Validator";
import "./App.scss";

function App() {
  const [name, setName] = useState("");
  const handleChange = (key) => (value) => {
    setName(value);
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <InputField
              label="Enter Name"
              value={name}
              type="text"
              placeholder="Enter text here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
              onChange={handleChange("text")}
            />
          </div>

          <div className="col-3">
            <InputField
              label="Enter Name"
              value={name}
              type="text"
              placeholder="Enter text here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
              onChange={handleChange("text")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
