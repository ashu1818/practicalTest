import * as ACTION from "../types";

const initialState = {
  isLoading: false,
  product: {},
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.UPLOAD_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
        product: {},
        error: "",
      };
    case ACTION.UPLOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: action.payload,
        error: "",
      };
    case ACTION.UPLOAD_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        product: {},
        error: action.payload,
      };
    default:
      return state;
  }
}
