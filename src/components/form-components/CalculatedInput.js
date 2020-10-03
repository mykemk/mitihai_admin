import React from "react";
import { useFormContext } from "react-hook-form";

const CalculatedInput = ({ label, name, value = 0, inputStyle }) => {
  const { register } = useFormContext();
  return (
    <>
      <label>{label}</label>
      <input
        style={inputStyle}
        type="number"
        value={value}
        name={name}
        ref={register}
        disabled
      />
    </>
  );
};

export default CalculatedInput;
