import * as ACTION from "../types";

const initialState = {
  isLoading: false,
  products: {},
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.GET_ALL_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
        products: {},
        error: "",
      };
    case ACTION.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: "",
      };
    case ACTION.GET_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        products: {},
        error: action.payload,
      };
    default:
      return state;
  }
}
