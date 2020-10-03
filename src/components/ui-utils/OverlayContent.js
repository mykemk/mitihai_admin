import React from "react";
import { Overlay } from "@blueprintjs/core";

const OverlayContent = (props) => {
  return (
    <Overlay isOpen={true}>
      <div className="overlayContent">{props.children}</div>
    </Overlay>
  );
};

export default OverlayContent;
