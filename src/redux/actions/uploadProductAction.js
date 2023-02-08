import {
  UPLOAD_PRODUCT_FAILED,
  UPLOAD_PRODUCT_LOADING,
  UPLOAD_PRODUCT_SUCCESS,
} from "../types";
import axios from "axios";

export const uploadProduct = (data, navigation) => {
  return (dispatch) => {
    dispatch({
      type: UPLOAD_PRODUCT_LOADING,
    });
    try {
      var config = {
        method: "post",
        url: "https://fakestoreapi.com/products",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          dispatch({
            type: UPLOAD_PRODUCT_SUCCESS,
            payload: response.data,
          });
          navigation.navigate("ProductDetail");
        })
        .catch(function (error) {});
    } catch (error) {
      dispatch({
        type: UPLOAD_PRODUCT_FAILED,
        payload: {
          error: "Something wents wrong please try again later.",
        },
      });
    }
  };
};
