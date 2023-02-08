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
          console.log("UPLOAD_PRODUCT_SUCCESS", response.data);
          dispatch({
            type: UPLOAD_PRODUCT_SUCCESS,
            payload: response.data,
          });
          navigation.navigate("ProductDetail");
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log("Error", error);
      dispatch({
        type: UPLOAD_PRODUCT_FAILED,
        payload: {
          error: "Something wents wrong please try again later.",
        },
      });
    }
  };
};
