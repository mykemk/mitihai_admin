import React, { useState, useContext } from "react";
import Styles from "./navbar.module.css";
import NavigationLinks from "./NavigationLink";
import { Icon } from "@blueprintjs/core";
import { AuthContext } from "app/App";

const UserProfile = () => {
  const [actionsShown, SetActionsShown] = useState(false);
  let { userState } = useContext(AuthContext);

  function toggleShowActions() {
    SetActionsShown(!actionsShown);
  }
  const userOptions = [
    { label: "Log Out", route: "logout", iconName: "log-out" },
    {
      label: "Edit Profile",
      route: "users/update",
      iconName: "briefcase",
    },
  ];
  return (
    <div className={`${Styles.listLinks} ${Styles.userProfile}`}>
      <button className={Styles.navOption} onClick={toggleShowActions}>
        <Icon icon="user" iconSize={Icon.SIZE_LARGE} />{" "}
        <span className={Styles.menuIcon}>{userState.name}</span>
      </button>
      <div className={actionsShown ? Styles.shown : Styles.hidden}>
        {/* Toggles the clasname to show/hide the menu options */}
        <NavigationLinks actions={userOptions} />
      </div>
    </div>
  );
};

export default UserProfile;
