import React from "react";
import { useDelete } from "../../utils/hooks/useDelete";
import Spinner from "./Spinner";
import FeedbackMessage from "./FeedbackMessage";

function DeletePage({ url }) {
  const { error, isDeleting, isSuccessful } = useDelete(url);
  return (
    <>
      {isDeleting ? (
        <Spinner intent="danger" state="Deleting" />
      ) : isSuccessful ? (
        <FeedbackMessage
          icon="tick"
          message="Item removed successfull"
          intent="success"
        />
      ) : (
        <FeedbackMessage icon="error" message={error} intent="danger" />
      )}
    </>
  );
}

export default DeletePage;
