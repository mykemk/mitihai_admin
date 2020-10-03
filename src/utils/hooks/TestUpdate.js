import React, { useEffect } from "react";
import { useUpdate } from "./useUpdate";
import Spin from "../../app/components/state-components/Spinner";
import FeedbackMessage from "../../app/components/state-components/FeedbackMessage";

function TestUpdate() {
  let url = "https://jsonplaceholder.typicode.com/posts/1";
  let data = {
    id: 1,
    title: "[...]",
    body: "[...]",
    userId: 1,
    userName: 2,
  };
  const { state, update } = useUpdate(url);
  const { error, isUpdating } = state;
  useEffect(() => {
    update(data);
  }, [update]);
  return (
    <div>
      {isUpdating ? (
        <Spin intent="primary" state="Updating..." />
      ) : error ? (
        <FeedbackMessage message={error} intent="danger" icon="" />
      ) : (
        <FeedbackMessage
          message="Updated succesfully"
          intent="success"
          icon=""
        />
      )}
    </div>
  );
}
export default TestUpdate;
