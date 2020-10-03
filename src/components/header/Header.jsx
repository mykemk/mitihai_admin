import React from "react";
import { Icon, Intent } from "@blueprintjs/core";
import "./header.css";

function Header({ clickHandler, isNavBarShown, newStyles }) {
  return (
    <>
      <div className="header" style={isNavBarShown ? null : newStyles}>
        <Icon
          icon="menu"
          iconSize={Icon.SIZE_LARGE}
          intent={Intent.PRIMARY}
          onClick={clickHandler}
        />
      </div>
    </>
  );
}
export default React.memo(Header);
