import React from "react";

export default function CheckBox({ label, onChange, checked }) {
  return (
    <label className="form-check-label m-1">
      <input
        className="form-check-input"
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      {label}
    </label>
  );
}
