import React from 'react';

const Input = ({ type, value, className, checkError, placeholder, onChangeValue, id, label }) => {
  return (
    <div className="form-group">
      {label && <label for={id}>{label}</label>}
      <input
        type={type}
        className={`form-control form-control-lg ${className}`}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
      <small className="text-danger">{checkError && `${placeholder} is invalid`}</small>
    </div>
  );
};

export default Input;
