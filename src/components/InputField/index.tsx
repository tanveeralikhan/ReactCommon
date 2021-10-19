import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { validateInput } from "../../utilities/Validator";

interface IProps {
  value?: string;
  label?: string;
  placeholder?: string;
  validators?: any[];
  type?: string;
  onChange: (value: string) => void;
}

interface IState {
  error: Error;
}

interface Error {
  error: boolean;
  message: string;
}

const InputField = (props: IProps) => {
  const [error, setError] = useState(Error);

  const handleChange = (event: any) => {
    const { value } = event.currentTarget;
    setError(validateInput(props.validators, value));
    props.onChange(value);
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="form-group">
      {props.label && <label htmlFor="app-input-field">{props.label}</label>}

      {props.type === "textarea" ? (
        <textarea
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          defaultValue={props.value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={props.type}
          value={props.value}
          className="form-control"
          placeholder={props.placeholder}
          onChange={handleChange}
        />
      )}
      {error && <span className="text-danger">{error.message}</span>}
    </div>
  );
};

export default InputField;
