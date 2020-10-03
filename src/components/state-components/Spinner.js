import React from "react";
import { Spinner, Overlay } from "@blueprintjs/core";
import styles from "./state-styles.module.css";
function Spin({ intent, state }) {
  return (
    <Overlay isOpen="true">
      <div className={styles.spinner}>
        <Spinner intent={intent} size={Spinner.SIZE_STANDARD} />
        <h3>{`${state}...`}</h3>
      </div>
    </Overlay>
  );
}

export default Spin;
