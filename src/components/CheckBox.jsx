import React from "react";

export default function CheckBox(props) {
  return (
    <label className="form-check-label m-1">
      <input className="form-check-input" type="checkbox" /> {props.label}
    </label>
  );
}
