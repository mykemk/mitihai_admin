import { useReducer, useCallback } from "react";
import axios from "axios";

let initialState = {
  error: "",
  isUploading: true,
};

const postDataReducer = (state, action) => {
  switch (action.status) {
    case "POST_SUCCESS":
      return {
        error: "",
        isUploading: false,
      };
    case "POST_ERROR":
      return {
        error: action.error,
        isUploading: false,
      };
    default:
      return state;
  }
};

export function usePost(url) {
  const [state, dispatch] = useReducer(postDataReducer, initialState);
  const upload = useCallback(
    (data) => {
      axios
        .post(url, data)
        .then(() => {
          dispatch({ status: "POST_SUCCESS" });
        })
        .catch((error) => {
          dispatch({
            status: "POST_ERROR",
            error: "Something went wrong",
          });
        });
    },
    [url],
  );

  return { state, upload };
}
