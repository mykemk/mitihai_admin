import React, { useContext } from "react";
import Styles from "./ui-utils.module.css";
import { AuthContext } from "app/App";

const CurrentUserState = () => {
  const { userState } = useContext(AuthContext);
  return (
    <div className={Styles.userState}>
      <p>
        Logged in as: <b>{userState.name}</b>
      </p>
    </div>
  );
};

export default React.memo(CurrentUserState);
