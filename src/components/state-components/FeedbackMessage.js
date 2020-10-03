import React, { useEffect, useState } from "react";
import { Toaster, Toast, Position } from "@blueprintjs/core";
import styles from "./state-styles.module.css";

function FeedbackMessage({ position, ...props }) {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    //The feedback message shows form only 5 seconds
    window.setInterval(() => {
      setShowMessage(false);
    }, 3000);
    return () => {
      //Clears the interval after 5 seconds
      window.clearInterval();
    };
  }, []);

  return (
    <>
      {showMessage && (
        <Toaster className={styles.toaster} position={position || Position.TOP}>
          <Toast button="Dismis" {...props} />
        </Toaster>
      )}
    </>
  );
}

export default FeedbackMessage;
