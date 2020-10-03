import { useReducer, useCallback } from "react";
import axios from "axios";

let initialState = {
  error: "",
  isUpdating: true,
};

const updateDataReducer = (state, action) => {
  switch (action.status) {
    case "UPDATE_SUCCESS":
      return {
        error: "",
        isUpdating: false,
      };
    case "UPDATE_ERROR":
      return {
        error: action.error,
        isUpdating: false,
      };
    default:
      return state;
  }
};

export function useUpdate() {
  const [state, dispatch] = useReducer(updateDataReducer, initialState);
  const update = useCallback((data, url) => {
    axios
      .put(url, data)
      .then(() => {
        dispatch({ status: "UPDATE_SUCCESS" });
      })
      .catch(() => {
        dispatch({
          status: "UPDATE_ERROR",
          error: "Something went wrong",
        });
      });
  }, []);

  return { state, update };
}
