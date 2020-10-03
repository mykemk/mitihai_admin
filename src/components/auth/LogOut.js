import React, { useEffect, useContext } from "react";
import { AuthContext } from "app/App";
import { useHistory } from "react-router-dom";

function LogOut() {
  let { dispatch } = useContext(AuthContext);
  let history = useHistory();
  useEffect(() => {
    dispatch({ details: "LOG_OUT" });
    history.push("/");
  }, [dispatch,history]);
  return <div className="page-container">Leaving....</div>;
}

export default LogOut;
