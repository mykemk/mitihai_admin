import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { makeStyles } from "@material-ui/core/styles";

const useDropzoneStyles = makeStyles((theme) => {
  return {
    active: {
      backgroundColor: "gold",
    },
    invalid: {
      backgroundColor: "red",
    },
  };
});
const ImageUpload = ({ label }) => {
  const classes = useDropzoneStyles();
  return (
    <div className="imageUploader">
      <label>{label}</label>
      <DropzoneArea
        acceptedFiles={["image/*"]}
        filesLimit="20"
        dropzoneText="Drag and drop a photo here or click to select"
        showFileNamesInPreview="true"
        showFileNames="true"
        onChange={(files) => console.log(files)}
        classes={classes}
      />
    </div>
  );
};

export default React.memo(ImageUpload);
