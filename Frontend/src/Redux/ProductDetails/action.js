import {
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "./actionType";
import { getProductById } from "../../Components/Data";

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });

    // Use local data instead of API call
    const product = getProductById(id);
    
    if (!product) {
      throw new Error("Product not found");
    }

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.message || "Failed to load product details",
    });
  }
};
