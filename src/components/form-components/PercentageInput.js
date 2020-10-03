import React from "react";
import { useFormContext } from "react-hook-form";
import { validationRules } from "../../utils/validations/rules";
import { ErrorMessage } from "react-hook-form";

const PercentageInput = ({
  label,
  name,
  placeholder,
  className = "",
  inputStyle,
  onChange,
}) => {
  const { register, errors } = useFormContext();
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        style={inputStyle}
        type="number"
        name={name}
        ref={register(validationRules.percentage)}
        placeholder={placeholder}
        //Triggers the onchange event only if it is defined
        onChange={onChange ? (e) => onChange(e.target.value) : null}
      />
      <ErrorMessage errors={errors} name={name}>
        {({ message }) => <p className="fieldError">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default PercentageInput;
