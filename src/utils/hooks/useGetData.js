import { useCallback, useReducer } from "react";
import axios from "axios";

let initialState = {
  data: [],
  error: "",
  loading: true,
};

const getDataReducer = (state, action) => {
  switch (action.status) {
    case "FETCH_SUCCESS":
      return {
        data: action.payload,
        error: "",
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        data: [],
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export function useGetData() {
  const [state, dispatch] = useReducer(getDataReducer, initialState);

  const getData = useCallback((url) => {
    axios
      .get(url)
      .then((responce) => {
        dispatch({ status: "FETCH_SUCCESS", payload: responce.data });
      })
      .catch(() => {
        dispatch({
          status: "FETCH_ERROR",
          error: "Something went wrong",
        });
      });
  }, []);
  return { state, getData };
}
