import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "./product_types";
import { getProductsResponse, filterProducts } from "../../Components/Data";

export const getProduct =
  (currentPage = 1, price, brand) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      
      // Use local data instead of API call
      let data;
      if (price || brand) {
        data = filterProducts(price, brand);
      } else {
        data = getProductsResponse;
      }

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: "Failed to load products",
      });
    }
  };

// clearing the error
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
