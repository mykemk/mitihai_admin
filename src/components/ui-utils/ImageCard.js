import React, { useState, useCallback } from "react";
import Image from "material-ui-image";
import DeleteIcon from "@material-ui/icons/Delete";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import Styles from "./ui-utils.module.css";

const ImageCard = ({ src }) => {
  const [isActionsShown, setIsActionsShown] = useState(false);

  const showActionsToggle = useCallback(() => {
    setIsActionsShown(!isActionsShown);
  }, [isActionsShown]);

  const { imageCard, imageActions, imageAction } = Styles;

  return (
    <div className={isActionsShown ? `${imageCard} zoomed` : null}>
      <Image src={src} animationDuration={3000} onClick={showActionsToggle} />
      <div className={!isActionsShown ? `${imageActions} hidden` : null}>
        <button className={Styles.imageAction}>
          <DeleteIcon color="error" />
        </button>
        <button className={imageAction} onClick={showActionsToggle}>
          <ZoomOutIcon color="primary" />
        </button>
      </div>
    </div>
  );
};
export default React.memo(ImageCard);
