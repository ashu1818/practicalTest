//Set all reducer and push them in combine reducers.
import { combineReducers } from "redux";
import getAllProductsReducer from "./getAllProductsReducer";
import uploadProductReducer from "./uploadProductReducer";

const rootReducer = combineReducers({
  GetProducts: getAllProductsReducer,
  UploadProduct: uploadProductReducer,
});

export default rootReducer;
