import React, { useEffect } from "react";
import { usePost } from "./usePost";
import Spin from "../../app/components/state-components/Spinner";
import FeedbackMessage from "../../app/components/state-components/FeedbackMessage";

function TestPost() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let data = {
    id: 1,
    title: "[...]",
    body: "[...]",
    userId: 1,
    userName: 2,
  };
  const { state, uploadData } = usePost(url, data);
  const { error, isUploading } = state;
  useEffect(() => {
    uploadData();
  }, [uploadData]);
  return (
    <div>
      {isUploading ? (
        <Spin intent="primary" state="Uploading..." />
      ) : error ? (
        <FeedbackMessage message={error} intent="danger" icon="" />
      ) : (
        <FeedbackMessage
          message="Uploaded succesfully"
          intent="success"
          icon=""
        />
      )}
    </div>
  );
}
export default TestPost;
