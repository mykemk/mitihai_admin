import React, { useContext } from "react";
import Styles from "./ui-utils.module.css";
import { NavigationContext } from "app/MainSection";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Breadcrumbs = () => {
  const { action, section } = useContext(NavigationContext);
  return (
    <div className={Styles.breadcrumb}>
      <h2>{section} </h2>
      <span>
        <ChevronRightIcon fontSize="small" />
      </span>
      <h4> {action}</h4>
    </div>
  );
};

export default React.memo(Breadcrumbs);
