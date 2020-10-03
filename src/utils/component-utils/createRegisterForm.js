import React, { useContext, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { NavigationContext } from "app/MainSection";

const createRegisterForm = (Inputform, name = "", url, modalClass) => {
  const Registerform = () => {
    const history = useHistory();
    const methods = useForm();
    const { setAction, setSection } = useContext(NavigationContext);

    useEffect(() => {
      setSection(`${name.toUpperCase()}S`);
      setAction("create");
    }, [setSection, setAction]);
    return (
      <div
        className={`actionPage ${modalClass ? `modal ${modalClass}` : null}`}>
        <h3 className="actionTitle">{`Add ${name}`}</h3>
        <FormContext {...methods}>
          <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
            <Inputform />
            <div className="actionBtns">
              <button type="submit" className="managementAction">
                {`Add ${name}`}
              </button>
              <button
                type="button"
                className="navigation"
                onClick={() => history.goBack()}>
                Back
              </button>
            </div>
          </form>
        </FormContext>
      </div>
    );
  };
  return Registerform;
};

export default createRegisterForm;
