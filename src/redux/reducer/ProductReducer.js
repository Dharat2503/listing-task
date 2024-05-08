// reducers.js

import {SELECT_PRODUCT,FETCH_PRODUCT_REQ , FETCH_PRODUCT_DONE, FETCH_PRODUCT_FAIL, FETCH_PRODUCT_BY_ID_DONE, FETCH_PRODUCT_BY_ID_FAIL, FETCH_PRODUCT_BY_ID_REQ} from '../../constant/ActionType'

  
  const initialState = {
    products: [],

    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_REQ:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PRODUCT_DONE:
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: null,
        };
      case FETCH_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          products: [],
          error: action.payload,
        };

        case FETCH_PRODUCT_BY_ID_REQ:
          return {
            ...state,
            loading: true,
            error: null
          };
        case FETCH_PRODUCT_BY_ID_DONE:
          return {
            ...state,
            loading: false,
            product: action.payload,
            error: null
          };
        case FETCH_PRODUCT_BY_ID_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload
          };
    
      default:
        return state;
    }
  };
  
  export default productReducer;
  

