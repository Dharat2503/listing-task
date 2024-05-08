
import axios from 'axios';
import {SELECT_PRODUCT,FETCH_PRODUCT_REQ , FETCH_PRODUCT_DONE, FETCH_PRODUCT_FAIL, FETCH_PRODUCT_BY_ID_REQ, FETCH_PRODUCT_BY_ID_DONE} from '../../constant/ActionType'


export const fetchProducts = () => {
    return async (dispatch) => {
      dispatch(fetchProductsRequest());
      try {
        const response = await axios.get('https://dummyjson.com/products');
        dispatch(fetchProductsSuccess(response.data.products));
      } catch (error) {
        dispatch(fetchProductsFailure(error.message));
      }
    };
  };
  

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCT_REQ,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCT_DONE,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCT_FAIL,
  payload: error,
});

export const fetchProductByIdRequest = () => ({
  type: FETCH_PRODUCT_BY_ID_REQ,
});

export const fetchProductByIdSuccess = (product) => ({
  type: FETCH_PRODUCT_BY_ID_DONE,
  payload: product,
});

export const fetchProductByIdFailure = (error) => ({
  type: FETCH_PRODUCT_FAIL,
  payload: error,
});


