import React from "react";
import { useFormContext } from "react-hook-form";
import { validationRules } from "../../utils/validations/rules";
import { ErrorMessage } from "react-hook-form";

const CostInput = ({
  label,
  className = "",
  inputStyle,
  onChange,
  name,
  ...props
}) => {
  const { register, errors } = useFormContext();
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        {...props}
        style={inputStyle}
        type="number"
        ref={register(validationRules.cost)}
        //Triggers the onchange event only if it is defined
        onChange={onChange ? (e) => onChange(e.target.value) : null}
      />
      <ErrorMessage errors={errors} name={name}>
        {({ message }) => <p className="fieldError">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default CostInput;
