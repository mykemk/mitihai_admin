import React, { useState } from "react";
import { Alert, Icon } from "@blueprintjs/core";
import styles from "./state-styles.module.css";
import DeletePage from "./DeletePage";

function DeleteAlert() {
  const [isOpen, setIsOpen] = useState(true);
  const [proceedDelete, setProceedDelete] = useState(false);
  function closeAlert() {
    setIsOpen(false);
  }
  function deleteObject() {
    setProceedDelete(true);
    setIsOpen(false);
  }
  return (
    <div className={styles.alert}>
      <Alert
        canOutsideClickCancel={true}
        confirmButtonText="Yes, Delete"
        cancelButtonText="Cancel"
        icon="delete"
        intent="danger"
        isOpen={isOpen}
        onCancel={closeAlert}
        onConfirm={deleteObject}>
        Are you sure you want to delete this item ?
      </Alert>
      {proceedDelete ? (
        <DeletePage url="" url="https://jsonplaceholder.typicode.com/todos/1" />
      ) : null}
    </div>
  );
}

export default DeleteAlert;
