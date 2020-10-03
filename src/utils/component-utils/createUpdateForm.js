import React, { useContext, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { NavigationContext } from "app/MainSection";

const createUpdateForm = (
  Inputform,
  name = "",
  url,
  modalClass,
  initialData,
) => {
  const UpdateForm = () => {
    const methods = useForm({
      defaultValues: initialData,
    });
    const history = useHistory();
    const { setAction, setSection } = useContext(NavigationContext);

    useEffect(() => {
      setSection(`${name.toUpperCase()}S`);
      setAction("update");
    }, [setSection, setAction]);

    return (
      <div
        className={`actionPage ${modalClass ? `modal ${modalClass}` : null}`}>
        <h3 className="actionTitle">{`Update ${name}`}</h3>
        <FormContext {...methods}>
          <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
            <Inputform />
            <div className="actionBtns">
              <button type="submit" className="managementAction">
                {`Update ${name}`}
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
  return UpdateForm;
};

export default createUpdateForm;
