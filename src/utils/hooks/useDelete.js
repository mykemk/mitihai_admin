import { useCallback, useReducer } from "react";
import axios from "axios";

let initialState = {
  error: "",
  isDeleting: true,
  isSuccessful: false,
};

const deleteDataReducer = (state, action) => {
  switch (action.status) {
    case "DELETE_SUCCESS":
      return {
        error: "",
        isDeleting: false,
        isSuccessful: true,
      };
    case "DELETE_ERROR":
      return {
        error:
          "Sorry something went wrong. We could not complete the delete request.",
        isDeleting: false,
        isSuccessful: false,
      };
    default:
      return state;
  }
};

export function useDelete() {
  const [state, dispatch] = useReducer(deleteDataReducer, initialState);

  const deleteData = useCallback((url) => {
    axios
      .delete(url)
      .then(() => {
        dispatch({ status: "DELETE_SUCCESS" });
      })
      .catch((error) => {
        dispatch({
          status: "DELETE_ERROR",
          error: error,
        });
      });
  }, []);
  return { state, deleteData };
}
