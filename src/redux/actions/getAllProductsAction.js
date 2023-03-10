import {
  GET_ALL_PRODUCTS_FAILED,
  GET_ALL_PRODUCTS_LOADING,
  GET_ALL_PRODUCTS_SUCCESS,
} from "../types";
import axios from "axios";

export const getProducts = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_PRODUCTS_LOADING,
    });
    try {
      var config = {
        method: "get",
        url: "https://fakestoreapi.com/products",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: response.data,
          });
        })
        .catch(function (error) {});
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAILED,
        payload: {
          error: "Something wents wrong please try again later.",
        },
      });
    }
  };
};
