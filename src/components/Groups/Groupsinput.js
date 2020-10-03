import React from "react";
import styles from "./groups.module.css";
import { Shorttext } from "../form-components";
import Permisionstable from "./PermisionsTable";
import { permisionSections } from "contexts/GroupsContext";

const Groupsinput = () => {
  return (
    <>
      <Shorttext
        name="groupName"
        className={styles.groupName}
        placeholder="Enter user Group name"
      />
      <br />
      <Permisionstable permisions={permisionSections} />
    </>
  );
};

export default Groupsinput;
