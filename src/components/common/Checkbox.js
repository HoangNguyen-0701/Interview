import React from 'react';

const Checkbox = ({ value, className, onChangeValue = () => null, label }) => {
  return (
    <div className="form-check">
      <label className="form-check-label text-muted">
        <input
          type="checkbox"
          className={`form-check-input ${className}`}
          value={value}
          onChange={(e) => onChangeValue(e.target.checked)}
        />
        {label}
        <i className="input-helper"></i>
      </label>
    </div>
  );
};

export default Checkbox;
