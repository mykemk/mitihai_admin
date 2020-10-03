import React, { useEffect } from "react";
import Spinner from "./Spinner";

const Messages = () => {
  useEffect(() => {
    window.open("https://accounts.google.com/signin", "_blank");
    window.history.back();
  }, []);
  return <Spinner state="Redirecting" intent="success" />;
};

export default React.memo(Messages);
